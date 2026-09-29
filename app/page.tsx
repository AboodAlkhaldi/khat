import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/Reveal";
import RegistrationForm from "@/components/RegistrationForm";
import { site } from "@/site.config";
import { IconArrow, IconCompass, IconSpark, IconUsers } from "@/components/Icons";

function HeroCircuit() {
  return (
    <svg className="hero-circuit" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#A6D80D" strokeOpacity="0.22" strokeWidth="1.2">
        <path className="dashline" d="M0 96 H190 L232 54 H430" />
        <path d="M1200 176 H1014 L972 218 H812" />
        <path className="dashline" d="M1200 470 H1046 L1004 512 H830" />
        <path d="M56 596 V488 L118 426 H306" />
        <path d="M0 330 H126 L168 288 H268 L310 330 H524" />
      </g>
      <g fill="#A6D80D" fillOpacity="0.55">
        <circle cx="434" cy="54" r="3.6" /><circle cx="808" cy="218" r="3.6" />
        <circle cx="310" cy="426" r="3.6" /><circle cx="528" cy="330" r="3.6" />
      </g>
    </svg>
  );
}

const days = [
  { num:"٠١", day:"الأحد", title:"نفهم عالم البرمجة", text:"نفهم ما هي البرمجة، كيف يفكر البرنامج، الفرق بين اللغة والمجال، وكيف نحول المشكلة إلى خطوات." },
  { num:"٠٢", day:"الثلاثاء", title:"من الفكرة إلى أول كود", text:"نحوّل الخطوات إلى كود بسيط، ونتعرف على المتغيرات والشروط والحلقات والدوال وما يأتي بعدها." },
  { num:"٠٣", day:"الخميس", title:"من هنا إلى أين؟", text:"نتعرف على المسارات التقنية، كيف نختار بالتجربة، وكيف نبني خطة تعلم واضحة ونستخدم AI بوعي." },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-glow" /><HeroCircuit /><div className="dotgrid a" /><div className="dotgrid b" />
          <div className="wrap">
            <span className="hero-badge"><span className="dot" />ورشة من {site.brand} | {site.program}</span>
            <h1>ابدأ البرمجة<br /><span className="g">من المكان الصحيح.</span></h1>
            <p className="lead">ثلاثة أيام نبدأ فيها من الصفر: نفهم كيف تعمل البرامج، نجرّب أول كود، ونبني خريطة واضحة للطريق الذي يمكنك أن تكمله بعدها.</p>
            <div className="hero-actions">
              <a className="btn" href="#register">سجّل في الورشة <IconArrow className="ico" style={{width:18,height:18}} /></a>
              <a className="btn btn-ghost" href="#workshop">اكتشف الورشة</a>
            </div>
            <div className="hero-meta">
              <div><IconCompass />الأحد • الثلاثاء • الخميس</div>
              <div><IconUsers />٣ أيام • ٣ ساعات يوميًا</div>
              <div><IconSpark />لا تحتاج إلى خبرة سابقة</div>
            </div>
          </div>
        </section>

        <section className="section compact-section" id="workshop">
          <div className="wrap">
            <Reveal><span className="label">٠١ — الفكرة</span><h2>مش دورة لغة برمجة.<br/><span className="g">هي بداية الطريق.</span></h2></Reveal>
            <div className="split workshop-intro">
              <Reveal delay={70}><p className="section-lead">إذا كانت البرمجة ومجالاتها تبدو لك كصورة كبيرة وغير واضحة، نبدأ معك من الأساس: كيف يفكر البرنامج، كيف تتحول المشكلة إلى خطوات، وكيف تتحول الخطوات إلى كود.</p></Reveal>
              <Reveal delay={120}><div className="audience-tags"><span>لم تبرمج من قبل</span><span>بدأت قليلًا ثم ضعت</span><span>تدرس تخصصًا تقنيًا</span><span>مهتم بالتقنية من أي تخصص</span></div></Reveal>
            </div>
          </div>
        </section>

        <section className="section compact-section days-section">
          <div className="wrap">
            <Reveal><span className="label">٠٢ — البرنامج</span><h2>ثلاثة أيام.<br/><span className="g">خطوة أبعد في كل يوم.</span></h2></Reveal>
            <div className="workshop-days">
              {days.map((d,i)=><Reveal delay={i*70} key={d.day}><article className="day-card"><div className="day-top"><span className="day-num">{d.num}</span><span className="day-name">{d.day}</span></div><h3>{d.title}</h3><p>{d.text}</p></article></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section compact-section">
          <div className="wrap">
            <Reveal><span className="label">٠٣ — ماذا ستخرج به؟</span><h2>نفهم البداية،<br/><span className="g">ونعرف كيف نكمل.</span></h2></Reveal>
            <Reveal delay={90}>
              <div className="compact-roadmap">
                <div><span>01</span><strong>نفهم الأساس</strong><p>ما هي البرمجة وكيف نفكر في المشكلة.</p></div>
                <div><span>02</span><strong>نجرّب الكود</strong><p>نرى الفكرة تتحول إلى برنامج ونتعامل مع الخطأ.</p></div>
                <div><span>03</span><strong>نعرف الطريق</strong><p>نفهم مكان المشاريع وGit وSQL والخوارزميات.</p></div>
                <div><span>04</span><strong>نحدد الخطوة التالية</strong><p>نختار ما نجرّبه بعد الورشة بدل التعلم العشوائي.</p></div>
              </div>
              <div className="ai-note"><IconSpark /><p><strong>والذكاء الاصطناعي؟</strong> نستخدمه كمساعد للفهم والتلميح ومراجعة الأخطاء — لا كبديل عن الفهم والتجربة.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="section compact-section">
          <div className="wrap">
            <Reveal>
              <div className="closing-card">
                <span className="label">٠٤ — التفاصيل</span>
                <h2>ثلاثة أيام، <span className="g">ورشة واحدة.</span></h2>
                <div className="details-grid">
                  <div><span>الأيام</span><strong>الأحد • الثلاثاء • الخميس</strong></div>
                  <div><span>المدة</span><strong>٣ ساعات يوميًا</strong></div>
                  <div><span>المستوى</span><strong>مبتدئ — لا خبرة مطلوبة</strong></div>
                  <div><span>الفئة</span><strong>طلاب الجامعة والمهتمون بالتقنية</strong></div>
                </div>
                <p className="closing-line">لا نعدك أن تصبح مبرمجًا في ثلاثة أيام. نريدك أن تخرج وأنت تعرف <strong>أين تقف، وما خطوتك التالية.</strong></p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section compact-register" id="register"><div className="wrap"><RegistrationForm /></div></section>
      </main>
      <footer className="footer"><div className="wrap"><p className="hadith">«احرص على ما ينفعك، واستعن بالله ولا تعجز»</p><p className="rawi">حديث صحيح — رواه مسلم</p><div className="footer-bottom">{site.brand} | من {site.program}</div></div></footer>
    </>
  );
}
