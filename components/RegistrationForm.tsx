"use client";

import { useState } from "react";
import { site } from "@/site.config";
import { IconCheck } from "./Icons";

type Values = {
  name: string;
  whatsapp: string;
  study: string;
  level: string;
  days: string;
  motivation: string;
  question: string;
  website: string; // honeypot — يجب أن يبقى فارغًا
};

const empty: Values = {
  name: "",
  whatsapp: "",
  study: "",
  level: "",
  days: "",
  motivation: "",
  question: "",
  website: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 3) e.name = "اكتب اسمك كاملًا.";
  const phone = v.whatsapp.replace(/[\s\-()]/g, "");
  if (!/^\+?\d{8,15}$/.test(phone))
    e.whatsapp = "أدخل رقم واتساب صحيحًا (أرقام فقط، ويمكن أن يبدأ بـ +).";
  if (v.study.trim().length < 3) e.study = "اكتب تخصصك وسنتك الدراسية.";
  if (!v.level) e.level = "اختر الوصف الأقرب لوضعك.";
  if (!v.days) e.days = "اختر الأيام الأنسب لك.";
  if (v.motivation.trim().length < 5) e.motivation = "سطر واحد يكفي.";
  return e;
}

export default function RegistrationForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [formError, setFormError] = useState("");

  const set = (k: keyof Values) => (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((s) => ({ ...s, [k]: ev.target.value }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setFormError("");
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) {
      document
        .querySelector<HTMLElement>(".invalid, .err")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "تعذّر إرسال التسجيل.");
      }
      setStatus("done");
      window.scrollTo({
        top: (document.getElementById("register")?.offsetTop ?? 0) - 40,
        behavior: "smooth",
      });
    } catch (err) {
      setStatus("idle");
      setFormError(
        err instanceof Error && err.message
          ? err.message
          : "حدث خطأ أثناء الإرسال. حاول مرة أخرى."
      );
    }
  }

  if (status === "done") {
    return (
      <div className="formcard">
        <div className="success">
          <div className="success-mark">
            <IconCheck />
          </div>
          <h2>وصلنا تسجيلك</h2>
          <p style={{ marginTop: 14 }}>
            شكرًا لك. سنتواصل معك على رقم الواتساب الذي أدخلته لتأكيد الموعد
            والتفاصيل قبل اللقاء.
          </p>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            style={{ marginTop: 10 }}
            onClick={() => {
              setValues(empty);
              setStatus("idle");
            }}
          >
            تسجيل شخص آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="formcard" onSubmit={onSubmit} noValidate>
      <span className="label">٠٤ — التسجيل</span>
      <h2>سجّل حضورك</h2>
      <p style={{ marginBottom: 28 }}>
        لن نطلب منك الكثير — فقط ما يساعدنا أن نفهم أين تقف الآن.
      </p>

      {formError && <div className="formerr">{formError}</div>}

      <div className="field">
        <label htmlFor="name">الاسم</label>
        <input
          id="name"
          value={values.name}
          onChange={set("name")}
          placeholder="اكتب اسمك الكامل"
          className={errors.name ? "invalid" : ""}
          autoComplete="name"
        />
        {errors.name && <span className="err">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="whatsapp">
          رقم واتساب <span className="opt">— وسيلة التواصل</span>
        </label>
        <input
          id="whatsapp"
          value={values.whatsapp}
          onChange={set("whatsapp")}
          placeholder="05xxxxxxxx"
          inputMode="tel"
          dir="ltr"
          style={{ textAlign: "right" }}
          className={errors.whatsapp ? "invalid" : ""}
          autoComplete="tel"
        />
        {errors.whatsapp && <span className="err">{errors.whatsapp}</span>}
      </div>

      <div className="field">
        <label htmlFor="study">
          ماذا تدرس؟ <span className="opt">— التخصص + السنة الدراسية</span>
        </label>
        <input
          id="study"
          value={values.study}
          onChange={set("study")}
          placeholder="مثال: هندسة برمجيات — السنة الثانية"
          className={errors.study ? "invalid" : ""}
        />
        {errors.study && <span className="err">{errors.study}</span>}
      </div>

      <div className="field">
        <label htmlFor="level">أي وصف أقرب لوضعك مع البرمجة؟</label>
        <select
          id="level"
          value={values.level}
          onChange={set("level")}
          className={errors.level ? "invalid" : ""}
        >
          <option value="">اختر الوصف الأقرب</option>
          {site.levels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        {errors.level && <span className="err">{errors.level}</span>}
      </div>

      <div className="field">
        <label>
          أي الأيام أنسب لك؟ <span className="opt">— اختر خيارًا واحدًا</span>
        </label>
        <div className="days">
          {site.dayOptions.map((d) => (
            <label className="day" key={d}>
              <input
                type="radio"
                name="days"
                value={d}
                checked={values.days === d}
                onChange={set("days")}
              />
              <span>{d}</span>
            </label>
          ))}
        </div>
        {errors.days && <span className="err">{errors.days}</span>}
      </div>

      <div className="field">
        <label htmlFor="motivation">ما الذي يجعلك مهتمًا بهذا اللقاء؟</label>
        <textarea
          id="motivation"
          value={values.motivation}
          onChange={set("motivation")}
          placeholder="سطر أو سطران يكفيان..."
          className={errors.motivation ? "invalid" : ""}
        />
        {errors.motivation && <span className="err">{errors.motivation}</span>}
      </div>

      <div className="field">
        <label htmlFor="question">
          هل هناك شيء محدد تتمنى أن تفهمه عن طريقك في البرمجة؟{" "}
          <span className="opt">— اختياري</span>
        </label>
        <textarea
          id="question"
          value={values.question}
          onChange={set("question")}
          placeholder="اكتب هنا..."
        />
      </div>

      {/* حقل مخفي لمنع السبام — لا يراه المستخدم */}
      <input
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={set("website")}
        name="website"
      />

      <button className="btn btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "جارٍ الإرسال..." : "سجّل الآن"}
      </button>
      <p className="formnote">
        العدد محدود حتى تبقى الجلسة حوارية وقريبة من كل مشارك.
      </p>
    </form>
  );
}
