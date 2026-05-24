// School marketing pack — flyers, brochures, social, billboard, newspaper.
// All pieces sized in real print dimensions @ 96dpi.

// ─── 1. ADMISSIONS A4 FLYER (front) — 794 × 1123 ──────────────────────
function AdmissionsFlyer() {
  return (
    <div className="gds-paper" style={{ width: 794, height: 1123, padding: 48, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <BleedMarks/>
      {/* top stripe */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--line)', paddingBottom: 24, marginBottom: 36 }}>
        <Lockup size={1.05}/>
        <div style={{ textAlign: 'right' }}>
          <Eyebrow style={{ fontSize: 9 }}>Admissions · 2026–27</Eyebrow>
          <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 28, color: 'var(--maroon)', fontWeight: 500, marginTop: 10, fontStyle: 'italic' }}>Now open</div>
        </div>
      </div>

      {/* Hero copy + photo */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 28, alignItems: 'stretch', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 60, lineHeight: 0.96, color: 'var(--maroon-deep)', letterSpacing: '-.015em', margin: '4px 0 18px' }}>
            Where small minds <em style={{ color: 'var(--maroon)' }}>grow into</em><br/>
            <span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic' }}>great hearts.</span>
          </h1>
          <div className="gds-urdu" style={{ fontSize: 22, color: 'var(--maroon-deep)', marginBottom: 14, lineHeight: 1.9 }}>
            بچّوں کا چھوٹا ذہن، بڑے دل میں۔
          </div>
          <p style={{ fontFamily: 'Lora', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 380 }}>
            Twenty-five years of teaching in Rawalpindi. Daycare from six months. Kindergarten and Primary up to Grade 5. A campus with mountain views, a kitchen garden, and twelve teachers — seven of them with us a decade or more.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="gds-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PHOTOS.classroom})`, border: '6px solid var(--cream)', boxShadow: '0 18px 32px -16px rgba(74,19,19,.35)' }}></div>
          <div style={{ position: 'absolute', bottom: -14, right: -14, background: 'var(--gold)', padding: '12px 18px', fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 18, color: 'var(--maroon-deep)', fontStyle: 'italic', boxShadow: '0 12px 24px -10px rgba(74,19,19,.35)' }}>
            Est. 2001
          </div>
        </div>
      </div>

      <GoldRule style={{ margin: '8px 0 22px' }}/>

      {/* Six programs row */}
      <Eyebrow bookended style={{ alignSelf: 'flex-start', fontSize: 9, marginBottom: 18 }}>Six programs · One home</Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 }}>
        {[
          ['Daycare', '6 mo – 3 yrs', 'Two full years that turn play into learning.'],
          ['Kindergarten', 'KG1 & KG2', 'Ages four and five. Phonics, qaida, kitchen garden.'],
          ['Primary', 'Grades 1 – 5', "Pakistan's national curriculum, taught carefully."],
          ['Rehabilitation', 'All ages', 'Individual support for children who learn differently.'],
          ['Mother Training', '8 – 12 weeks', 'A cohort, a supervisor, and a certificate.'],
          ['Bus Service', '12 routes', 'A driver and a female caregiver in every bus.'],
        ].map(([t, m, b]) => (
          <div key={t} style={{ background: 'var(--cream-deep)', padding: 14, borderRadius: 6, borderLeft: '3px solid var(--maroon)' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 19, fontWeight: 600, color: 'var(--maroon-deep)', lineHeight: 1, marginBottom: 4 }}>{t}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold-deep,#B89651)', fontWeight: 600, marginBottom: 8 }}>{m}</div>
            <div style={{ fontFamily: 'Lora', fontSize: 11, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{b}</div>
          </div>
        ))}
      </div>

      {/* Stats band */}
      <div style={{ background: 'var(--maroon-deep)', color: 'var(--cream)', padding: '26px 28px', borderRadius: 10, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, position: 'relative', overflow: 'hidden', marginBottom: 26 }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, background: 'radial-gradient(circle,rgba(201,169,97,.22),transparent 60%)' }}></div>
        {[['25', 'years teaching'], ['12', 'teachers · 7 over a decade'], ['6', 'programs'], ['180', 'children, by choice']].map(([n, l]) => (
          <div key={l} style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 44, color: 'var(--gold)', fontWeight: 600, lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginTop: 6 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Visit invitation */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 18, alignItems: 'center', background: 'var(--cream-deep)', padding: 20, borderRadius: 8, border: '1px solid var(--line)', marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 24, fontWeight: 500, color: 'var(--maroon-deep)', lineHeight: 1.1, fontStyle: 'italic' }}>
            "Come walk the campus with us."
          </div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--ink-soft)', marginTop: 8, letterSpacing: '.02em' }}>
            Open Saturdays, 9 AM – 12 PM. Bring the child. Tea is served.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {Icon.qr(72)}
          <div style={{ fontFamily: 'DM Sans', fontSize: 8.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', maxWidth: 80, lineHeight: 1.5 }}>Scan to book a visit</div>
        </div>
      </div>

      {/* Contact footer */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--line)', paddingTop: 18 }}>
        <ContactStrip/>
      </div>
    </div>
  );
}

// ─── 2. DAYCARE FLYER — softer, mother-facing — 794 × 1123 ─────────────
function DaycareFlyer() {
  return (
    <div className="gds-paper cream-deep" style={{ width: 794, height: 1123, position: 'relative', overflow: 'hidden' }}>
      <BleedMarks/>
      {/* Top photo band */}
      <div style={{ height: 460, position: 'relative', overflow: 'hidden' }}>
        <div className="gds-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PHOTOS.daycare})` }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(74,19,19,.55) 0%,rgba(74,19,19,.05) 45%,rgba(74,19,19,.7) 100%)' }}></div>
        <div style={{ position: 'absolute', top: 40, left: 40, right: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup size={0.95} onDark/>
          <Eyebrow onDark style={{ fontSize: 9 }}>Daycare · 6 months – 3 years</Eyebrow>
        </div>
        <div style={{ position: 'absolute', bottom: 36, left: 40, right: 40, color: 'var(--cream)' }}>
          <div className="gds-urdu" style={{ fontSize: 24, color: 'var(--gold-soft)', marginBottom: 8 }}>
            دو سال جو کھیل کو تعلیم بناتے ہیں۔
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 56, lineHeight: 1, color: 'var(--cream)', letterSpacing: '-.01em' }}>
            Two full years <em style={{ color: 'var(--gold)' }}>that turn play</em><br/>into <em>learning.</em>
          </h1>
        </div>
      </div>

      <div style={{ padding: '40px 48px 48px' }}>
        <p style={{ fontFamily: 'Lora', fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 580, marginBottom: 26 }}>
          We have looked after babies since 2001. The same teachers come back morning after morning. Two adults to ten little ones. Warm meals from the kitchen. A nap room with cotton sheets. A garden, when the weather is kind.
        </p>

        {/* What's in the day */}
        <Eyebrow bookended style={{ fontSize: 9, marginBottom: 16 }}>What is in the day</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, border: '1px solid var(--line)', borderRadius: 8, background: 'var(--cream)', overflow: 'hidden', marginBottom: 28 }}>
          {[
            ['08:00', 'Drop-off, warm milk, settle in'],
            ['09:30', 'Songs · stories · finger play'],
            ['10:30', 'Garden time, weather permitting'],
            ['11:30', 'Lunch from the school kitchen'],
            ['12:30', 'Cotton-sheet nap room'],
            ['15:00', 'Snack and pickup'],
          ].map(([t, w], i) => (
            <div key={t} style={{ padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'baseline', borderBottom: i < 4 ? '1px solid var(--line)' : 'none', borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 12, color: 'var(--maroon)', letterSpacing: '.02em', fontFeatureSettings: '"tnum"', minWidth: 42 }}>{t}</div>
              <div style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--ink)' }}>{w}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center', paddingTop: 22, borderTop: '1px solid var(--line)' }}>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 26, fontWeight: 500, fontStyle: 'italic', color: 'var(--maroon-deep)', lineHeight: 1.15 }}>
              Eight openings for the<br/>Autumn cohort.
            </div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--ink-soft)', marginTop: 8 }}>Visit Saturdays · or WhatsApp +92 300 555 0001</div>
          </div>
          <CTAPill gold>Book a visit {Icon.arrow(14, 'currentColor')}</CTAPill>
        </div>
      </div>
    </div>
  );
}

// ─── 3. TRI-FOLD BROCHURE OUTSIDE — 1123 × 794 ─────────────────────────
function BrochureOutside() {
  const panelW = 1123 / 3;
  const panel = (style) => ({ width: panelW, height: 794, padding: 32, position: 'relative', borderRight: '1px dashed rgba(74,19,19,.18)', boxSizing: 'border-box', ...style });
  return (
    <div className="gds-paper" style={{ width: 1123, height: 794, display: 'flex', position: 'relative' }}>
      <BleedMarks/>
      {/* Back cover (left panel) */}
      <div style={panel({ background: 'var(--cream-deep)' })}>
        <Eyebrow style={{ fontSize: 9, marginBottom: 18 }}>Get in touch</Eyebrow>
        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 30, lineHeight: 1.1, color: 'var(--maroon-deep)', marginBottom: 22 }}>
          <em>Come walk</em><br/>the campus<br/><em>with us.</em>
        </div>
        <div style={{ background: 'var(--cream)', padding: 16, borderRadius: 6, border: '1px solid var(--line)', marginBottom: 18 }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 6 }}>Visit</div>
          <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink)', lineHeight: 1.55 }}>Farmhouse Campus<br/>Off Adyala Road, Rawalpindi</div>
        </div>
        <div style={{ background: 'var(--cream)', padding: 16, borderRadius: 6, border: '1px solid var(--line)', marginBottom: 18 }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 6 }}>Speak</div>
          <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink)', lineHeight: 1.6 }}>
            Office · +92 51 555 0001<br/>
            WhatsApp · +92 300 555 0001<br/>
            admissions@gooddayschool.pk
          </div>
        </div>
        <div style={{ background: 'var(--cream)', padding: 16, borderRadius: 6, border: '1px solid var(--line)', marginBottom: 22 }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 6 }}>Saturdays</div>
          <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink)' }}>9 AM – 12 PM · Bring the child.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          {Icon.qr(72)}
          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Scan to book a visit on WhatsApp</div>
        </div>
      </div>

      {/* Inside flap (centre when folded) */}
      <div style={panel({ background: 'var(--maroon-deep)', color: 'var(--cream)' })}>
        <Eyebrow onDark style={{ fontSize: 9, marginBottom: 18 }}>The school in a sentence</Eyebrow>
        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 34, lineHeight: 1.05, color: 'var(--cream)', marginBottom: 24, letterSpacing: '-.005em' }}>
          A small school. <em style={{ color: 'var(--gold)' }}>A long story.</em><br/>Twenty-five years and counting.
        </div>
        <div className="gds-urdu" style={{ fontSize: 18, color: 'var(--gold-soft)', marginBottom: 22 }}>
          ایک چھوٹا اسکول۔ ایک لمبی کہانی۔
        </div>
        <p style={{ fontFamily: 'Lora', fontSize: 12, lineHeight: 1.65, color: 'var(--gold-soft)', opacity: .9 }}>
          We are still small. We will stay small. Twelve teachers, six programs, one farmhouse on the edge of the city. Parents who came to us as children now bring children of their own.
        </p>
        <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32, paddingTop: 18, borderTop: '1px solid rgba(201,169,97,.25)' }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 8.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Inside · the six programs we teach</div>
        </div>
      </div>

      {/* Front cover (right panel when folded) */}
      <div style={panel({ background: 'var(--cream)', borderRight: 'none', display: 'flex', flexDirection: 'column' })}>
        <div style={{ flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden', marginBottom: 20 }}>
          <div className="gds-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PHOTOS.campus})` }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(74,19,19,.15) 0%,rgba(74,19,19,.85) 100%)' }}></div>
          <div style={{ position: 'absolute', top: 24, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <LockupStacked size={0.85} onDark/>
            <Eyebrow onDark style={{ fontSize: 8 }}>Prospectus · 2026–27</Eyebrow>
          </div>
          <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24, color: 'var(--cream)' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 42, lineHeight: 0.95, letterSpacing: '-.01em' }}>
              Where<br/><em style={{ color: 'var(--gold)' }}>small minds</em><br/>grow into<br/><em>great hearts.</em>
            </div>
            <div className="gds-urdu" style={{ fontSize: 18, color: 'var(--gold-soft)', marginTop: 16 }}>
              چھوٹے ذہن، بڑے دل۔
            </div>
          </div>
        </div>
        <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--maroon)', textAlign: 'center', fontWeight: 600 }}>
          Good Day School &nbsp;·&nbsp; Rawalpindi &nbsp;·&nbsp; Est. 2001
        </div>
      </div>
    </div>
  );
}

// ─── 4. TRI-FOLD BROCHURE INSIDE — 1123 × 794 ──────────────────────────
function BrochureInside() {
  const panelW = 1123 / 3;
  const panel = (style) => ({ width: panelW, height: 794, padding: 30, position: 'relative', borderRight: '1px dashed rgba(74,19,19,.18)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', ...style });
  const Program = ({ num, title, urdu, meta, body }) => (
    <div style={{ marginBottom: 18, paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
        <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 18, color: 'var(--gold-deep,#B89651)', fontStyle: 'italic', fontWeight: 500 }}>{num}</div>
        <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, fontWeight: 600, color: 'var(--maroon-deep)', lineHeight: 1 }}>{title}</div>
      </div>
      <div className="gds-urdu" style={{ fontSize: 13, color: 'var(--maroon)', marginBottom: 6 }}>{urdu}</div>
      <div style={{ fontFamily: 'DM Sans', fontSize: 8.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 8, fontWeight: 600 }}>{meta}</div>
      <p style={{ fontFamily: 'Lora', fontSize: 11, lineHeight: 1.55, color: 'var(--ink)' }}>{body}</p>
    </div>
  );
  return (
    <div className="gds-paper" style={{ width: 1123, height: 794, display: 'flex', position: 'relative' }}>
      <BleedMarks/>
      <div style={panel()}>
        <Eyebrow style={{ fontSize: 9, marginBottom: 14 }}>The early years</Eyebrow>
        <Program num="01" title="Daycare" urdu="ڈے کیئر" meta="6 months – 3 years · all-day" body="The same teachers come back morning after morning. Two adults to ten little ones, warm meals from the kitchen, a nap room with cotton sheets."/>
        <Program num="02" title="Kindergarten" urdu="کنڈر گارٹن" meta="KG1 & KG2 · ages 4–5" body="Phonics and qaida together. Counting in the garden. The five-year-olds plant and water the same beds the eight-year-olds harvest from."/>
        <Program num="03" title="Primary School" urdu="بنیادی اسکول" meta="Grades 1 – 5 · ages 6–10" body="Pakistan's national curriculum, taught conventionally and unconventionally. Handwriting and storytelling, multiplication tables and a kitchen garden."/>
      </div>
      <div style={panel({ background: 'var(--cream-deep)' })}>
        <Eyebrow style={{ fontSize: 9, marginBottom: 14 }}>For those who need more</Eyebrow>
        <Program num="04" title="Learning Rehabilitation" urdu="تعلیمی بحالی" meta="All ages · 3–5 sessions/week" body="For any child who learns differently. Quiet rooms, specialist teachers, and a calm pace. Tied to mother training so the work continues at home."/>
        <Program num="05" title="Mother Training" urdu="ماؤں کی تربیت" meta="8 – 12 weeks · cohorts of 10–15" body="A weekly two-hour cohort for mothers. Child development, reading at home, emotional regulation. A supervisor on WhatsApp. A certificate at the end."/>
        <Program num="06" title="AI Companion" urdu="اے آئی ساتھی" meta="Grade 1 – 5 · internal only" body="A curriculum-locked tutor in English, Urdu, and Arabic. Used carefully, never instead of the teacher. Class teacher reviews every conversation."/>
      </div>
      <div style={panel({ background: 'var(--maroon-deep)', color: 'var(--cream)', borderRight: 'none' })}>
        <Eyebrow onDark style={{ fontSize: 9, marginBottom: 14 }}>Practical matters</Eyebrow>

        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 22, color: 'var(--gold)', marginBottom: 14, fontStyle: 'italic' }}>
          Fees, in plain numbers.
        </div>
        <table style={{ width: '100%', fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gold-soft)', borderCollapse: 'collapse', marginBottom: 22 }}>
          <thead>
            <tr style={{ color: 'var(--gold)', textAlign: 'left' }}>
              <th style={{ padding: '6px 0', borderBottom: '1px solid rgba(201,169,97,.3)', fontWeight: 600, letterSpacing: '.08em' }}>Programme</th>
              <th style={{ padding: '6px 0', borderBottom: '1px solid rgba(201,169,97,.3)', fontWeight: 600, letterSpacing: '.08em', textAlign: 'right' }}>Monthly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Daycare', 'PKR 12,500'],
              ['Kindergarten', 'PKR 14,000'],
              ['Primary 1 – 5', 'PKR 16,500'],
              ['Rehabilitation', 'From PKR 9,000'],
              ['Mother Training', 'Sliding scale'],
              ['Bus Service', 'PKR 1,500'],
            ].map(([p, f]) => (
              <tr key={p}>
                <td style={{ padding: '7px 0', borderBottom: '1px dotted rgba(201,169,97,.18)', color: 'var(--cream)' }}>{p}</td>
                <td style={{ padding: '7px 0', borderBottom: '1px dotted rgba(201,169,97,.18)', textAlign: 'right', fontFeatureSettings: '"tnum"' }}>{f}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 18, color: 'var(--gold)', marginBottom: 8, fontStyle: 'italic' }}>
          When to apply.
        </div>
        <ul style={{ paddingLeft: 16, fontFamily: 'Lora', fontSize: 11, color: 'var(--gold-soft)', lineHeight: 1.65, marginBottom: 22 }}>
          <li>Autumn intake — applications close 30 June</li>
          <li>Spring intake — applications close 15 December</li>
          <li>Mother Training — rolling, every quarter</li>
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px solid rgba(201,169,97,.25)', fontFamily: 'DM Sans', fontSize: 9, color: 'var(--gold)', letterSpacing: '.08em', lineHeight: 1.7 }}>
          gooddayschool.pk · admissions@gooddayschool.pk<br/>
          WhatsApp +92 300 555 0001
        </div>
      </div>
    </div>
  );
}

// ─── 5. SOCIAL SQUARE — ADMISSIONS — 1080 × 1080 ──────────────────────
function SocialAdmissions() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--cream)', position: 'relative', overflow: 'hidden', padding: 64, display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 700, height: 700, background: 'radial-gradient(circle,rgba(201,169,97,.35),transparent 60%)' }}></div>
      <div style={{ position: 'absolute', bottom: -240, left: -200, width: 600, height: 600, background: 'radial-gradient(circle,rgba(74,19,19,.18),transparent 65%)' }}></div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1, marginBottom: 60 }}>
        <Lockup size={1.6}/>
        <Eyebrow style={{ fontSize: 14 }}>Admissions · 2026–27</Eyebrow>
      </div>

      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 130, lineHeight: 0.94, color: 'var(--maroon-deep)', letterSpacing: '-.015em', marginBottom: 28 }}>
          Where<br/><em style={{ color: 'var(--maroon)' }}>small minds</em><br/>grow into<br/><span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic' }}>great hearts.</span>
        </h1>
        <div className="gds-urdu" style={{ fontSize: 36, color: 'var(--maroon-deep)', maxWidth: 700 }}>
          چھوٹے ذہن، بڑے دل۔
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--line)', paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 14, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 600 }}>Applications open</div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 32, color: 'var(--maroon-deep)', fontWeight: 500, marginTop: 4 }}>Until 30 June</div>
        </div>
        <CTAPill style={{ fontSize: 18, padding: '18px 32px' }}>gooddayschool.pk &nbsp;{Icon.arrow(18, 'currentColor')}</CTAPill>
      </div>
    </div>
  );
}

// ─── 6. SOCIAL SQUARE — VISIT CAMPUS — 1080 × 1080 ────────────────────
function SocialVisit() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--maroon-deep)', position: 'relative', overflow: 'hidden', color: 'var(--cream)' }}>
      <div className="gds-photo" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 580, backgroundImage: `url(${PHOTOS.campus})` }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 580, background: 'linear-gradient(180deg,rgba(74,19,19,.1) 0%,rgba(74,19,19,.95) 100%)' }}></div>

      <div style={{ position: 'absolute', top: 56, left: 64, right: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={1.4} onDark/>
        <Eyebrow onDark style={{ fontSize: 14 }}>Open Saturdays</Eyebrow>
      </div>

      <div style={{ position: 'absolute', top: 360, left: 64, right: 64 }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 110, lineHeight: 0.95, color: 'var(--cream)', letterSpacing: '-.015em' }}>
          Come walk<br/>the campus<br/><em style={{ color: 'var(--gold)' }}>with us.</em>
        </h1>
      </div>

      <div style={{ position: 'absolute', bottom: 64, left: 64, right: 64, display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'center' }}>
        <div style={{ background: 'var(--cream)', padding: 16, borderRadius: 8 }}>{Icon.qr(120)}</div>
        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 13, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 8 }}>Every Saturday</div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 38, color: 'var(--cream)', lineHeight: 1.1, fontWeight: 500 }}>
            9 AM – 12 PM<br/>
            <span style={{ color: 'var(--gold-soft)', fontSize: 24 }}>Bring the child. Tea is served.</span>
          </div>
        </div>
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'DM Sans', fontSize: 13, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase' }}>
          gooddayschool.pk
        </div>
      </div>
    </div>
  );
}

// ─── 7. SOCIAL STORY — DAYCARE — 1080 × 1920 ──────────────────────────
function SocialStory() {
  return (
    <div style={{ width: 1080, height: 1920, background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <div className="gds-photo" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1100, backgroundImage: `url(${PHOTOS.daycare})` }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1100, background: 'linear-gradient(180deg,rgba(74,19,19,.45) 0%,rgba(74,19,19,.1) 45%,rgba(250,246,238,1) 100%)' }}></div>

      <div style={{ position: 'absolute', top: 80, left: 64, right: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={1.4} onDark/>
        <Eyebrow onDark style={{ fontSize: 13 }}>Daycare</Eyebrow>
      </div>

      <div style={{ position: 'absolute', top: 1140, left: 64, right: 64, bottom: 64, display: 'flex', flexDirection: 'column' }}>
        <div className="gds-urdu" style={{ fontSize: 32, color: 'var(--maroon-deep)', marginBottom: 18 }}>
          چھ ماہ سے تین سال تک۔
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 118, lineHeight: 0.94, color: 'var(--maroon-deep)', letterSpacing: '-.015em', marginBottom: 36 }}>
          Two years<br/>that turn<br/><em style={{ color: 'var(--maroon)' }}>play into</em><br/><span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic' }}>learning.</span>
        </h1>
        <p style={{ fontFamily: 'Lora', fontSize: 28, lineHeight: 1.5, color: 'var(--ink-soft)', maxWidth: 760, marginBottom: 'auto' }}>
          Six months to three years. Two adults to ten little ones. Warm meals, a nap room, a garden.
        </p>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 14, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700 }}>Autumn cohort</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 38, color: 'var(--maroon-deep)', fontWeight: 500, marginTop: 4 }}>Eight openings left</div>
          </div>
          <div style={{ background: 'var(--gold)', padding: 14, borderRadius: 8 }}>{Icon.qr(110)}</div>
        </div>
      </div>
    </div>
  );
}

// ─── 8. NEWSPAPER QUARTER-PAGE AD — 1240 × 880 ────────────────────────
function NewspaperAd() {
  return (
    <div style={{ width: 1240, height: 880, background: '#FBF6EC', border: '2px solid var(--ink)', padding: 36, position: 'relative', boxSizing: 'border-box', fontFamily: 'Lora' }}>
      <div style={{ position: 'absolute', top: 14, left: 14, right: 14, height: 4, borderTop: '2px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Lockup size={1.25}/>
            <div style={{ marginTop: 24, fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700 }}>
              ━━━&nbsp;&nbsp;Admissions Notice · 2026–27&nbsp;&nbsp;━━━
            </div>
          </div>
          <div>
            <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 72, lineHeight: 0.95, color: 'var(--ink)', letterSpacing: '-.02em', marginBottom: 18 }}>
              Twenty-five<br/>years of teaching <em>Rawalpindi.</em>
            </h1>
            <div style={{ fontFamily: 'Lora', fontSize: 16, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 460 }}>
              Daycare, kindergarten, and primary school up to Grade 5. Learning rehabilitation and a mother training programme. A farmhouse campus on the edge of the city, with mountain views and a kitchen garden.
            </div>
          </div>
          <div>
            <div style={{ borderTop: '1px solid var(--ink)', paddingTop: 14, fontFamily: 'DM Sans', fontSize: 12, color: 'var(--ink)', lineHeight: 1.6 }}>
              <b style={{ letterSpacing: '.08em' }}>FARMHOUSE CAMPUS</b>&nbsp;·&nbsp;Off Adyala Road, Rawalpindi<br/>
              <b style={{ letterSpacing: '.08em' }}>OFFICE</b>&nbsp;·&nbsp;051 555 0001 &nbsp;·&nbsp;
              <b style={{ letterSpacing: '.08em' }}>WHATSAPP</b>&nbsp;·&nbsp;0300 555 0001<br/>
              <b style={{ letterSpacing: '.08em' }}>ONLINE</b>&nbsp;·&nbsp;gooddayschool.pk
            </div>
          </div>
        </div>

        <div style={{ borderLeft: '1px solid var(--ink)', paddingLeft: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 14 }}>
            "We are still small. We will stay small."
          </div>
          <div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Programmes accepting applications</div>
            <table style={{ width: '100%', fontFamily: 'Lora', fontSize: 13, borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['Daycare', '6 mo – 3 yrs', '8 openings'],
                  ['Kindergarten', 'KG1 · KG2', '12 openings'],
                  ['Primary, Grades 1–3', 'ages 6 – 8', '6 openings'],
                  ['Primary, Grades 4–5', 'ages 9 – 10', '4 openings'],
                  ['Learning Rehabilitation', 'all ages', 'rolling'],
                  ['Mother Training', '8 – 12 weeks', 'next cohort 15 Sep'],
                ].map(([a, b, c], i) => (
                  <tr key={a} style={{ borderBottom: '1px dotted rgba(42,26,26,.3)' }}>
                    <td style={{ padding: '8px 0', fontWeight: 600 }}>{a}</td>
                    <td style={{ padding: '8px 0', fontFamily: 'DM Sans', fontSize: 11, color: 'var(--ink-soft)' }}>{b}</td>
                    <td style={{ padding: '8px 0', fontFamily: 'DM Sans', fontSize: 11, textAlign: 'right', fontStyle: 'italic', color: 'var(--maroon)' }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 16, paddingTop: 14, borderTop: '1px solid var(--ink)' }}>
            {Icon.qr(82)}
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.2 }}>
              Visit us, any Saturday<br/>
              <span style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontStyle: 'normal', color: 'var(--ink-soft)' }}>9 AM – 12 PM &nbsp;·&nbsp; tea served</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 9. ROADSIDE BILLBOARD — 2400 × 800 (3:1) ─────────────────────────
function Billboard() {
  return (
    <div style={{ width: 2400, height: 800, background: 'var(--maroon-deep)', color: 'var(--cream)', position: 'relative', overflow: 'hidden', display: 'flex' }}>
      {/* Left photo block */}
      <div style={{ width: 900, position: 'relative' }}>
        <div className="gds-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PHOTOS.classroom})` }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(74,19,19,.25) 0%,rgba(74,19,19,.95) 100%)' }}></div>
      </div>
      {/* Decorative golden glow */}
      <div style={{ position: 'absolute', top: -200, right: -200, width: 900, height: 900, background: 'radial-gradient(circle,rgba(201,169,97,.22),transparent 65%)' }}></div>

      <div style={{ flex: 1, padding: '70px 90px 70px 70px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Lockup size={2.2} onDark/>
          <Eyebrow onDark style={{ fontSize: 18 }}>Est. 2001 · Rawalpindi</Eyebrow>
        </div>

        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 180, lineHeight: 0.92, color: 'var(--cream)', letterSpacing: '-.02em' }}>
            Where <em style={{ color: 'var(--gold)' }}>small minds</em><br/>grow into <em>great hearts.</em>
          </h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(201,169,97,.3)', paddingTop: 28 }}>
          <div className="gds-urdu" style={{ fontSize: 48, color: 'var(--gold-soft)' }}>
            چھوٹے ذہن، بڑے دل۔
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 22, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Admissions open</div>
              <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 48, color: 'var(--cream)', fontWeight: 500, marginTop: 6 }}>gooddayschool.pk</div>
            </div>
            <div style={{ background: 'var(--cream)', padding: 14, borderRadius: 10 }}>{Icon.qr(150)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdmissionsFlyer, DaycareFlyer, BrochureOutside, BrochureInside, SocialAdmissions, SocialVisit, SocialStory, NewspaperAd, Billboard });
