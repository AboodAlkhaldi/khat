import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/Reveal";
import RegistrationForm from "@/components/RegistrationForm";
import { site } from "@/site.config";
import { IconArrow, IconCode, IconCompass, IconGrowth, IconPerson, IconSpark, IconUsers } from "@/components/Icons";

function HeroCircuit() {
  return (
    <svg className="hero-circuit" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#A6D80D" strokeOpacity="0.22" strokeWidth="1.2">
        <path className="dashline" d="M0 96 H190 L232 54 H430" />
        <path d="M1200 176 H1014 L972 218 H812" />
        <path className="dashline" d="M1200 470 H1046 L1004 512 H830" />
        <path d="M56 596 V488 L118 426 H306" />
        <path d="M0 330 H126 L168 288 H268 L310 330 H524" />
        <path className="dashline" d="M640 640 V546 L692 494 H900" />
      </g>
      <g fill="#A6D80D" fillOpacity="0.55">
        <circle cx="434" cy="54" r="3.6" /><circle cx="808" cy="218" r="3.6" />
        <circle cx="310" cy="426" r="3.6" /><circle cx="528" cy="330" r="3.6" /><circle cx="904" cy="494" r="3.6" />
      </g>
    </svg>
  );
}

const days = [
  { num: "٠١", day: "الأحد", title: "نفهم عالم البرمجة", text: "ما هي البرمجة فعلًا؟ كيف يفكر البرنامج؟ وما الفرق بين اللغة والمجال؟ نفكك نظامًا نستخدمه يوميًا، ونبدأ بتحويل المشكلات إلى خطوات قابلة للتنفيذ.", result: "تخرج بصورة واضحة عن البرمجة وعالمها." },
  { num: "٠٢", day: "الثلاثاء", title: "من الفكرة إلى أول كود", text: "نرى كيف تتحول الخطوات إلى برنامج: متغيرات، شروط، حلقات ودوال. ثم نمر على ما يأتي بعدها: المشاريع، Git، قواعد البيانات، والبرمجة الكائنية.", result: "ترى الدورة كاملة: فكرة ← كود ← اختبار ← تعديل." },
  { num: "٠٣", day: "الخميس", title: "من هنا إلى أين؟", text: "نتعرف على المسارات التقنية، كيف تجرّب قبل أن تختار، كيف تتعلم بنفسك، وكيف تستخدم الذكاء الاصطناعي كمساعد دون أن يفكر مكانك.", result: "تخرج بخطوة تالية ومسارين تريد تجربتهما." },
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

        <section className="section" id="workshop">
          <div className="wrap">
            <Reveal><span className="label">٠١ — الفكرة</span><h2>مش دورة لغة برمجة.<br/><span className="g">هي بداية الطريق.</span></h2></Reveal>
            <div className="split workshop-intro">
              <Reveal delay={80}><div><p className="section-lead">إذا كنت تسمع عن البرمجة، المجالات، الذكاء الاصطناعي، الويب وقواعد البيانات، لكن الصورة ما زالت غير واضحة لديك — فهذه الورشة صُممت لتبدأ معك من البداية.</p><p>لن يكون المطلوب أن تحفظ لغة برمجة، بل أن <span className="strong">تفهم الطريق وتعرف كيف تبدأ فيه.</span></p></div></Reveal>
              <Reveal delay={140}><div className="question-stack"><span>كيف يفكر البرنامج؟</span><span>كيف تتحول المشكلة إلى خطوات؟</span><span>كيف تتحول الخطوات إلى كود؟</span><span>وماذا تتعلم بعد ذلك؟</span></div></Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal><span className="label">٠٢ — هل الورشة لك؟</span><h2>كل ما تحتاجه هو <span className="g">الفضول والبداية.</span></h2></Reveal>
            <div className="grid-2 audience-grid">
              {[
                ["لم تبرمج من قبل","وتريد بداية مفهومة بعيدًا عن كثرة المصطلحات."],
                ["بدأت قليلًا ثم ضعت","جرّبت بعض الدروس، لكنك لا تعرف ماذا يأتي بعدها."],
                ["تدرس تخصصًا تقنيًا","وتريد أن تربط ما تدرسه بالصورة العملية للمجال."],
                ["لست في تخصص برمجي","لكن لديك فضول تجاه التقنية وتريد أن تفهم المجال من البداية."],
              ].map(([t,d],i)=><Reveal delay={i*60} key={t}><div className="card audience-card"><span className="mini-num">٠{i+1}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section days-section">
          <div className="wrap">
            <Reveal><span className="label">٠٣ — البرنامج</span><h2>ثلاثة أيام.<br/><span className="g">خطوة أبعد في كل يوم.</span></h2><p className="section-lead">الورشة رحلة واحدة؛ كل يوم يبني على اليوم الذي قبله.</p></Reveal>
            <div className="workshop-days">
              {days.map((d,i)=><Reveal delay={i*90} key={d.day}><article className="day-card"><div className="day-top"><span className="day-num">{d.num}</span><span className="day-name">{d.day}</span></div><h3>{d.title}</h3><p>{d.text}</p><div className="day-result"><span>نتيجة اليوم</span>{d.result}</div></article></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal><div className="band"><span className="label">داخل الورشة</span><h2>مش بس رح نحكي عن البرمجة.</h2><p>سنفهم، نفكر، نجرّب، نخطئ، نصحح، ثم نكمل.</p><div className="process"><span>نفهم</span><b>←</b><span>نفكر</span><b>←</b><span>نجرب</span><b>←</b><span>نخطئ</span><b>←</b><span>نصحح</span></div></div></Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal><span className="label">٠٤ — ماذا ستخرج به؟</span><h2>بعد ثلاثة أيام،<br/><span className="g">الصورة تصبح أوضح.</span></h2></Reveal>
            <div className="outcomes">
              {[
                ["أفهم ما هي البرمجة","وأستطيع تحويل مشكلة بسيطة إلى مدخلات وخطوات ومخرجات."],
                ["أفهم كيف تبدو البرامج من الداخل","وأعرف بصورة عامة دور الواجهة والخادم وقاعدة البيانات."],
                ["أعرف الطريق أمامي","وأفهم أين تأتي الأساسيات والمشاريع وGit وقواعد البيانات والخوارزميات."],
                ["جرّبت الكود","ولم يعد الخطأ شيئًا مجهولًا، بل شيئًا يمكن فهمه وتصحيحه."],
                ["أعرف كيف أتعلم","وكيف أستخدم المصادر والذكاء الاصطناعي دون نسخ شيء لا أفهمه."],
                ["لدي خطوة تالية واضحة","بدل قائمة طويلة من الدورات لا أعرف من أين أبدأها."],
              ].map(([t,d],i)=><Reveal delay={(i%3)*55} key={t}><div className="outcome"><IconGrowth/><div><h3>{t}</h3><p>{d}</p></div></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal><span className="label">٠٥ — خارطة الطريق</span><h2>والورشة… <span className="g">أين تضعك في الطريق؟</span></h2></Reveal>
            <Reveal delay={100}><div className="roadmap">
              {["لغة + مفاهيم أساسية","ممارسة + حل مشكلات","OOP + مشروع صغير","Git + SQL","خوارزميات + هياكل بيانات","مشاريع وتجربة المجالات","اختيار مسارك"].map((x,i)=><div className="roadmap-item" key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}
            </div><p className="roadmap-note">لن ننهي هذه الرحلة في ثلاثة أيام. <span className="strong">سنريك كيف تبدأها بشكل صحيح.</span></p></Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="split ai-split">
              <Reveal><div><span className="label">٠٦ — والذكاء الاصطناعي؟</span><h2>مساعد في التعلّم،<br/><span className="g">لا بديل عن الفهم.</span></h2></div></Reveal>
              <Reveal delay={100}><div className="card"><IconSpark className="ico"/><p>سنستخدمه لفهم فكرة، الحصول على تلميح، تفسير خطأ، مراجعة محاولة، واقتراح حالات اختبار.</p><div className="thin-line"/><h3>لكن الفهم، القرار، التجربة والتحقق… عندك أنت.</h3></div></Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal><div className="before-after"><div><span>قد تبدأ بسؤال</span><blockquote>«أنا بدي أتعلم برمجة… بس من وين أبدأ؟»</blockquote></div><IconArrow/><div><span>ونريدك أن تنهي الورشة وأنت تقول</span><blockquote className="g">«أعرف أين أقف، وما خطوتي التالية، وماذا سأجرّب بعدها.»</blockquote></div></div></Reveal>
          </div>
        </section>

        <section className="section details-section">
          <div className="wrap">
            <Reveal><span className="label">٠٧ — التفاصيل</span><h2>ثلاثة أيام، <span className="g">ورشة واحدة.</span></h2></Reveal>
            <div className="details-grid">
              <div><span>الأيام</span><strong>الأحد • الثلاثاء • الخميس</strong></div>
              <div><span>المدة</span><strong>٣ ساعات يوميًا</strong></div>
              <div><span>المستوى</span><strong>مبتدئ — لا خبرة مطلوبة</strong></div>
              <div><span>الفئة</span><strong>طلاب الجامعة والمهتمون بالتقنية</strong></div>
            </div>
            <p className="details-note">التسجيل يشمل الأيام الثلاثة، لأن كل يوم يبني على ما قبله.</p>
          </div>
        </section>

        <section className="section" id="register"><div className="wrap"><RegistrationForm /></div></section>
      </main>
      <footer className="footer"><div className="wrap"><p className="hadith">«احرص على ما ينفعك، واستعن بالله ولا تعجز»</p><p className="rawi">حديث صحيح — رواه مسلم</p><div className="footer-bottom">{site.brand} | من {site.program}</div></div></footer>
    </>
  );
}
