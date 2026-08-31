import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** حد بسيط لعدد الطلبات لكل IP (يُعاد ضبطه مع كل بدء بارد للدالة) */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

const clean = (v: unknown, max = 500) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "عدد المحاولات كبير. حاول بعد قليل." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "طلب غير صالح." }, { status: 400 });
  }

  // مصيدة السبام: إن امتلأ الحقل المخفي نتظاهر بالنجاح دون تسجيل
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    whatsapp: clean(body.whatsapp, 30),
    study: clean(body.study, 200),
    level: clean(body.level, 120),
    days: clean(body.days, 60),
    motivation: clean(body.motivation, 1200),
    question: clean(body.question, 1200),
  };

  const phone = data.whatsapp.replace(/[\s\-()]/g, "");
  if (
    data.name.length < 3 ||
    !/^\+?\d{8,15}$/.test(phone) ||
    data.study.length < 3 ||
    !data.level ||
    !data.days ||
    data.motivation.length < 5
  ) {
    return NextResponse.json(
      { ok: false, error: "تأكد من تعبئة الحقول المطلوبة بصورة صحيحة." },
      { status: 422 }
    );
  }

  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) {
    console.error("SHEETS_WEBHOOK_URL غير معرّف في متغيرات البيئة.");
    return NextResponse.json(
      { ok: false, error: "الخدمة غير مهيأة بعد. تواصل مع المنظّمين." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.FORM_SECRET ?? "",
        ...data,
        submittedAt: new Date().toISOString(),
        userAgent: req.headers.get("user-agent") ?? "",
      }),
      // Apps Script يعيد توجيهًا قبل الاستجابة
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();
    if (!res.ok || !text.includes('"ok":true')) {
      console.error("Apps Script رفض الطلب:", res.status, text.slice(0, 300));
      return NextResponse.json(
        { ok: false, error: "تعذّر حفظ التسجيل. حاول مرة أخرى." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("فشل الاتصال بـ Apps Script:", err);
    return NextResponse.json(
      { ok: false, error: "تعذّر الاتصال بالخادم. حاول مرة أخرى." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
