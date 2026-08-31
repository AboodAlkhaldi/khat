# قدرات | من خَط — صفحة التسجيل

صفحة هبوط واحدة (Next.js) للقاء «أين أنت من البرمجة؟»، عربية بالكامل (RTL)،
بألوان الهوية البصرية لـ«خَط»، مع نموذج تسجيل يُرسل البيانات إلى Google Sheet.

---

## ١) التشغيل محليًا

```bash
npm install
cp .env.example .env.local     # ثم عبّئ القيم (انظر القسم ٢)
npm run dev                    # http://localhost:3000
```

---

## ٢) ربط النموذج بجدول Google Sheets

1. أنشئ جدولًا جديدًا على [sheets.new](https://sheets.new) وسمِّه مثلًا «تسجيلات قدرات».
2. من القائمة: **Extensions ← Apps Script**، واحذف الكود الموجود.
3. الصق محتوى الملف `apps-script/Code.gs` كاملًا.
4. غيّر في أعلى الملف:
   - `SECRET` → أي نص عشوائي طويل (احتفظ به، ستستخدمه في الخطوة ٦).
   - `NOTIFY_EMAIL` → بريدك إن أردت إشعارًا مع كل تسجيل جديد (اتركه فارغًا لتعطيله).
5. **Deploy ← New deployment ← Type: Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - اضغط Deploy ووافق على الأذونات، ثم انسخ رابط الـ Web app
     (ينتهي بـ `/exec`).
6. ضع القيمتين في `.env.local` محليًا، وفي Vercel لاحقًا:

```
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
FORM_SECRET=نفس-النص-السري-الموجود-في-Code.gs
```

> عند أول تسجيل يُنشئ السكربت صف العناوين تلقائيًا في الجدول.
> إذا عدّلت `Code.gs` لاحقًا، أعد النشر عبر **Deploy ← Manage deployments ← Edit ← New version**.

---

## ٣) النشر على Vercel

1. ارفع المجلد إلى مستودع على GitHub.
2. [vercel.com/new](https://vercel.com/new) ← اختر المستودع ← Import.
3. في **Environment Variables** أضف `SHEETS_WEBHOOK_URL` و `FORM_SECRET`.
4. Deploy. (لا يحتاج أي إعداد إضافي — Next.js يُكتشف تلقائيًا.)

> إن غيّرت متغيرات البيئة بعد النشر، أعد النشر (Redeploy) ليأخذها الموقع.

---

## ٤) تعديل المحتوى

| ماذا تريد أن تغيّر؟ | الملف |
| --- | --- |
| خيارات الأيام، خيارات المستوى، اسم البرنامج | `site.config.ts` |
| نصوص الصفحة والأقسام | `app/page.tsx` |
| حقول النموذج ورسائل التحقق | `components/RegistrationForm.tsx` |
| الألوان والخطوط والتنسيق | `app/globals.css` |
| الشعار وأيقونة المتصفح | `public/logo-light.png`، `app/icon.png` |

مثال — تغيير خيارات الأيام في `site.config.ts`:

```ts
dayOptions: ["الاثنين أو الخميس", "الثلاثاء أو الجمعة", "الأربعاء أو السبت"],
```

عند تحديد موعد اللقاء لاحقًا، يمكن إضافة قسم التاريخ والوقت والمكان في
`app/page.tsx` بسهولة (البنية جاهزة داخل قسم الـ hero).

---

## ٥) ماذا يحدث عند الضغط على «سجّل الآن»؟

```
المتصفح → /api/register (خادم Next.js) → Google Apps Script → Google Sheet
```

- التحقق من الحقول يتم في المتصفح **وفي الخادم** معًا.
- حقل مخفي (honeypot) يمنع السبام الآلي.
- حد للطلبات: ٦ محاولات لكل عنوان IP خلال ١٠ دقائق.
- رابط Apps Script والمفتاح السري لا يظهران في كود الصفحة إطلاقًا.

---

## البنية

```
app/
  layout.tsx          # اللغة والاتجاه والخط والـ metadata
  page.tsx            # أقسام الصفحة
  globals.css         # نظام التصميم كاملًا
  icon.png            # أيقونة المتصفح
  api/register/       # استقبال النموذج وتمريره إلى Google Sheet
components/
  SiteHeader.tsx      # الترويسة الثابتة
  RegistrationForm.tsx# النموذج والتحقق وحالات الإرسال
  Reveal.tsx          # ظهور تدريجي عند التمرير
  Icons.tsx           # الأيقونات
apps-script/Code.gs   # يُلصق داخل Google Apps Script
site.config.ts        # الإعدادات القابلة للتعديل
```
