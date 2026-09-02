import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/Reveal";
import RegistrationForm from "@/components/RegistrationForm";
import { site } from "@/site.config";
import {
  IconArrow,
  IconChat,
  IconCode,
  IconCompass,
  IconGrowth,
  IconPerson,
  IconSpark,
  IconUsers,
} from "@/components/Icons";

function HeroCircuit() {
  return (
    <svg
      className="hero-circuit"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="#A6D80D" strokeOpacity="0.22" strokeWidth="1.2">
        <path className="dashline" d="M0 96 H190 L232 54 H430" />
        <path d="M1200 176 H1014 L972 218 H812" />
        <path className="dashline" d="M1200 470 H1046 L1004 512 H830" />
        <path d="M56 596 V488 L118 426 H306" />
        <path d="M0 330 H126 L168 288 H268 L310 330 H524" />
        <path className="dashline" d="M640 640 V546 L692 494 H900" />
      </g>
      <g fill="#A6D80D" fillOpacity="0.55">
        <circle cx="434" cy="54" r="3.6" />
        <circle cx="808" cy="218" r="3.6" />
        <circle cx="310" cy="426" r="3.6" />
        <circle cx="528" cy="330" r="3.6" />
        <circle cx="904" cy="494" r="3.6" />
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />

      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="hero-glow" />
        <HeroCircuit />
        <div className="dotgrid a" />
        <div className="dotgrid b" />

        <div className="wrap">
          <span className="hero-badge">
            <span className="dot" />
            أولى لقاءات {site.brand} | {site.program}
          </span>

          <h1>
            {site.eventTitleTop}
            <br />
            <span className="g">{site.eventTitleHighlight}</span>؟
          </h1>

          <p className="lead">
            لقاء للشباب المهتمين بالبرمجة، من مختلف التخصصات والمستويات. ليس
            اختبارًا، ولا دورة مكثفة — هو مساحة نفهم فيها أين نقف، ونحدد من أين
            نكمل.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#register">
              سجّل حضورك
              <IconArrow className="ico" style={{ width: 18, height: 18 }} />
            </a>
            <a className="btn btn-ghost" href="#about">
              تعرّف على اللقاء
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <IconUsers />
              جلسة حوارية بعدد محدود
            </div>
            <div>
              <IconCompass />
              لكل المستويات — من الصفر إلى المشاريع
            </div>
            <div>
              <IconSpark />
              نحدد الموعد بحسب أنسب الأيام لكم
            </div>
          </div>
        </div>
      </section>

      {/* ============================== ٠١ الرحلة ============================== */}
      <section className="section" id="about">
        <div className="wrap">
          <Reveal>
            <span className="label">٠١ — كيف يسير اللقاء</span>
            <h2 style={{ maxWidth: "20ch" }}>
              نبدأ من مكانك أنت، <span className="g">ثم نرى من أين نكمل.</span>
            </h2>
          </Reveal>

          <div className="journey" style={{ marginTop: 44 }}>
            <Reveal delay={0}>
              <div className="step">
                <div className="step-node">
                  <IconPerson />
                </div>
                <span className="step-num">٠١</span>
                <h3>أين تقف الآن</h3>
                <p>
                  نتعرّف على مستوى كل واحد منّا وخلفيته، دون اختبار ودون مقارنة.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="step">
                <div className="step-node">
                  <IconChat />
                </div>
                <span className="step-num">٠٢</span>
                <h3>نتحدث ونفهم</h3>
                <p>
                  عالم البرمجة ومساراته، التعلّم والجامعة، والذكاء الاصطناعي وأثره
                  على الطريق.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="step">
                <div className="step-node">
                  <IconGrowth />
                </div>
                <span className="step-num">٠٣</span>
                <h3>الخطوة التالية</h3>
                <p>
                  نحدد المسار الأنسب لكل مجموعة، ونبني ما بعد اللقاء على أساس
                  واضح.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================== ٠٢ عن اللقاء ============================== */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <div>
                <span className="label">٠٢ — عن اللقاء</span>
                <p>
                  ربما لم تبدأ بعد. وربما بدأت وتعلّمت بعض الأساسيات. أو قطعت
                  شوطًا، لكنك لا تعرف ما الخطوة التالية.
                </p>
                <p>
                  سنتعرّف على عالم البرمجة ومساراته، ونتحدث عن التعلّم والجامعة
                  والذكاء الاصطناعي، والأهم:{" "}
                  <span className="strong">
                    نحاول أن نفهم أين يقف كل واحد منّا، وما الخطوة الأنسب له بعد
                    ذلك.
                  </span>
                </p>

                {/* مقياس المستويات */}
                <div style={{ marginTop: 34 }}>
                  <h3 style={{ marginBottom: 4 }}>كل المستويات مرحّب بها</h3>
                  <p style={{ fontSize: 15 }}>
                    أينما كان موقعك على هذا الخط، هذا اللقاء يشملك.
                  </p>
                  <div className="levels">
                    {site.levelsShort.map((_, i) => (
                      <div
                        key={i}
                        className="level"
                        data-i={["١", "٢", "٣", "٤", "٥"][i]}
                        style={{
                          height: `${38 + i * 15.5}%`,
                          background: `rgba(166, 216, 13, ${0.06 + i * 0.055})`,
                          border: `1px solid rgba(166, 216, 13, ${
                            0.18 + i * 0.11
                          })`,
                          borderBottom: 0,
                        }}
                      />
                    ))}
                  </div>
                  <div className="level-axis">
                    {site.levelsShort.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card" style={{ padding: 30 }}>
                <IconCompass className="ico" />
                <h3 className="g">ليس اختبارًا، ولا دورة مكثفة</h3>
                <p style={{ marginTop: 10 }}>
                  هو نقطة بداية تساعدنا أن نبني ما بعدها بصورة أنسب للمشاركين.
                </p>
                <div
                  style={{
                    height: 1,
                    background: "var(--line)",
                    margin: "24px 0",
                  }}
                />
                <IconUsers className="ico" />
                <h3>العدد محدود</h3>
                <p style={{ marginTop: 10 }}>
                  حتى تبقى الجلسة حوارية وقريبة من كل مشارك.
                </p>
                <div
                  style={{
                    height: 1,
                    background: "var(--line)",
                    margin: "24px 0",
                  }}
                />
                <IconSpark className="ico" />
                <h3>الموعد يُحدَّد معكم</h3>
                <p style={{ marginTop: 10 }}>
                  اختر في النموذج الأيام الأنسب لك، ونحدد الموعد على ضوء اختيارات
                  المشاركين.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================== ٠٣ ما بعد اللقاء ============================== */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="band">
              <p>
                أحيانًا لا نحتاج دورة جديدة بقدر ما نحتاج أن نعرف:{" "}
                <span className="g">أين نقف؟ وما الخطوة المناسبة بعد ذلك؟</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ marginTop: 54 }}>
              <span className="label">٠٣ — ما بعد اللقاء</span>
              <p style={{ maxWidth: "62ch" }}>
                بعد اللقاء، سنعمل على مسارين بحسب احتياج المجموعة:
              </p>
            </div>
          </Reveal>

          <div className="grid-2" style={{ marginTop: 18 }}>
            <Reveal delay={120}>
              <div className="card">
                <IconPerson className="ico" />
                <h3>مسار التأسيس</h3>
                <p style={{ marginTop: 10 }}>
                  لمن يحتاج أن يبني أساسه من البداية، بخطوات مرتّبة وواضحة.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card">
                <IconCode className="ico" />
                <h3>مسار التطبيق والمشاريع</h3>
                <p style={{ marginTop: 10 }}>
                  لمن لديه أساس ويريد الانتقال أكثر إلى التنفيذ والمشاريع
                  الحقيقية.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================== ٠٤ التسجيل ============================== */}
      <section className="section" id="register">
        <div className="wrap">
          <RegistrationForm />
        </div>
      </section>

      {/* ============================== FOOTER ============================== */}
      <footer className="footer">
        <div className="wrap">
          <p className="hadith">
            «احرص على ما ينفعك، واستعن بالله ولا تعجز»
          </p>
          <p className="rawi">حديث صحيح — رواه مسلم</p>
          <div className="footer-bottom">{site.brand} | من {site.program}</div>
        </div>
      </footer>
    </>
  );
}
