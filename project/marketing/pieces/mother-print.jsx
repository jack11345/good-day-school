// Mother Training printables — workbook cover + weekly handout sample.

// ─── WORKBOOK COVER (A4 portrait) — 794 × 1123 ─────────────────────────
function WorkbookCover() {
  return (
    <div className="gds-paper maroon" style={{ width: 794, height: 1123, position: 'relative', overflow: 'hidden', padding: 56, display: 'flex', flexDirection: 'column' }}>
      <BleedMarks/>
      {/* Decorative arches */}
      <svg style={{ position: 'absolute', top: 56, left: '50%', transform: 'translateX(-50%)', opacity: .12 }} width="600" height="600" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="260" fill="none" stroke="var(--gold)" strokeWidth="1"/>
        <circle cx="300" cy="300" r="220" fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="3 6"/>
        <circle cx="300" cy="300" r="180" fill="none" stroke="var(--gold)" strokeWidth="1"/>
      </svg>

      {/* Top: lockup */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
        <Lockup size={1.05} onDark/>
        <Eyebrow onDark style={{ fontSize: 10 }}>Volume I · ed. 2026</Eyebrow>
      </div>

      {/* Center: medallion + title */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', gap: 32 }}>
        <div style={{ position: 'relative' }}>
          <GMedal size={160} variant="gold"/>
          <div style={{ position: 'absolute', inset: -22, borderRadius: '50%', border: '1px solid var(--gold)', opacity: .35 }}></div>
          <div style={{ position: 'absolute', inset: -38, borderRadius: '50%', border: '1px dashed var(--gold)', opacity: .25 }}></div>
        </div>

        <Eyebrow onDark bookended style={{ fontSize: 11 }}>The Mother Training Workbook</Eyebrow>

        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 78, lineHeight: 0.94, color: 'var(--cream)', letterSpacing: '-.015em' }}>
            The mother<br/>is every child's<br/><em style={{ color: 'var(--gold)' }}>first teacher.</em>
          </h1>
          <div className="gds-urdu" style={{ fontSize: 30, color: 'var(--gold-soft)', marginTop: 24 }}>
            ماں ہر بچّے کی پہلی استاد ہے۔
          </div>
        </div>

        <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, color: 'var(--gold-soft)', maxWidth: 480, lineHeight: 1.4 }}>
          A workbook in twelve weeks — to be carried, written in,<br/>and brought back to every Monday's session.
        </div>
      </div>

      {/* Bottom: meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, paddingTop: 22, borderTop: '1px solid rgba(201,169,97,.3)', position: 'relative' }}>
        {[['Belongs to', '________________________'], ['Cohort', 'Twelve · Autumn 2026'], ['Supervisor', 'Ms. Nadia Habib']].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>{k}</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 17, color: 'var(--cream)', marginTop: 6, fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── WEEK 4 HANDOUT (A4 portrait) — 794 × 1123 ─────────────────────────
function WeeklyHandout() {
  return (
    <div className="gds-paper" style={{ width: 794, height: 1123, position: 'relative', overflow: 'hidden' }}>
      <BleedMarks/>
      {/* Top bar — gold */}
      <div style={{ background: 'var(--maroon-deep)', color: 'var(--cream)', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={0.78} onDark showEst={false}/>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.24em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>Mother Training · Cohort 12</div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, color: 'var(--gold-soft)' }}>Handout · Week 4 of 12</div>
        </div>
      </div>

      <div style={{ padding: '36px 48px 30px' }}>
        {/* Title */}
        <Eyebrow style={{ fontSize: 10, marginBottom: 12 }}>Week 4 · 6 October 2026</Eyebrow>
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 50, lineHeight: 0.96, color: 'var(--maroon-deep)', letterSpacing: '-.015em', marginBottom: 10 }}>
          Reading at home —<br/><em style={{ color: 'var(--maroon)' }}>the read-aloud habit.</em>
        </h1>
        <div className="gds-urdu" style={{ fontSize: 26, color: 'var(--maroon-deep)', marginBottom: 22 }}>
          گھر میں مطالعہ — اونچی آواز سے پڑھنے کی عادت۔
        </div>

        <GoldRule style={{ margin: '0 0 22px' }}/>

        {/* What we will talk about */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32, marginBottom: 26 }}>
          <div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 10 }}>What we'll talk about today</div>
            <ul style={{ paddingLeft: 18, fontFamily: 'Lora', fontSize: 12.5, color: 'var(--ink)', lineHeight: 1.85, margin: 0 }}>
              <li>Why fifteen minutes of reading aloud each day, every day, beats one long Sunday hour.</li>
              <li>Lap-reading from age zero — the cuddle is the lesson.</li>
              <li>Choosing books your child can almost read on their own (but not quite).</li>
              <li>What to do when the child resists. Hint: you do not push.</li>
              <li>Reading in Urdu and English, side by side — not switching, not translating.</li>
            </ul>
          </div>
          <div style={{ background: 'var(--cream-deep)', border: '1px solid var(--line)', borderRadius: 8, padding: 18 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 8 }}>One sentence to remember</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, color: 'var(--maroon-deep)', lineHeight: 1.25, fontWeight: 500, marginBottom: 14 }}>
              "Reading aloud is not a literacy lesson. It is a love letter the child receives, daily."
            </div>
            <div className="gds-urdu" style={{ fontSize: 16, color: 'var(--maroon)', lineHeight: 1.85 }}>
              اونچی آواز سے پڑھنا — بچّے کے لیے روزانہ کا محبت نامہ۔
            </div>
          </div>
        </div>

        {/* Homework block */}
        <div style={{ background: 'var(--maroon-deep)', color: 'var(--cream)', borderRadius: 10, padding: '22px 26px', marginBottom: 26, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -50, right: -50, width: 180, height: 180, background: 'radial-gradient(circle,rgba(201,169,97,.22),transparent 60%)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, position: 'relative' }}>
            <div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.24em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>This week's homework</div>
              <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 24, fontWeight: 500 }}>The 15-minute lap-read.</div>
            </div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.14em', color: 'var(--gold)', textTransform: 'uppercase', background: 'rgba(201,169,97,.18)', padding: '5px 12px', borderRadius: 999, fontWeight: 600 }}>Due Sun 11 Oct</div>
          </div>
          <p style={{ fontFamily: 'Lora', fontSize: 12.5, color: 'var(--gold-soft)', lineHeight: 1.65, marginBottom: 14, opacity: .92, position: 'relative' }}>
            Read aloud to your child for fifteen minutes, every day this week. Any book. Any language. Sit close. Mark the small chart below — one tick per day. Bring it back on Monday.
          </p>

          {/* tick chart */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, position: 'relative' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
              <div key={d} style={{ background: 'rgba(250,246,238,.07)', border: '1px solid rgba(201,169,97,.3)', borderRadius: 6, padding: 10, textAlign: 'center' }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.16em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>{d}</div>
                <div style={{ height: 1, background: 'rgba(201,169,97,.25)', margin: '8px 0' }}></div>
                <div style={{ height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', color: 'var(--gold-soft)', fontSize: 12, opacity: .5 }}>
                  {i < 2 ? '✓' : ''}
                </div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 8.5, color: 'var(--gold-soft)', opacity: .6 }}>Book: ____</div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested books */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 10 }}>If you don't have a book at home — pick any of these</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {[
              ['Aalam mein gum ho gaye', 'Urdu picture · age 3 – 6', 'var(--gold)'],
              ["Goodnight Moon", 'English bedtime · age 0 – 4', 'var(--maroon)'],
              ['Sohni Dharti', 'Urdu rhyme · age 4 – 7', 'var(--sage)'],
              ['Where the Wild Things Are', 'English · age 4 – 8', 'var(--maroon-soft)'],
            ].map(([t, m, c]) => (
              <div key={t} style={{ background: 'var(--cream-deep)', borderRadius: 6, border: '1px solid var(--line)', padding: 14, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: 4, background: c }}></div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 14, fontWeight: 600, color: 'var(--maroon-deep)', lineHeight: 1.1, marginBottom: 4 }}>{t}</div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.08em', color: 'var(--ink-soft)' }}>{m}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-soft)' }}>
            Questions? WhatsApp Sister Nadia · 0300 555 0001
          </div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', color: 'var(--ink-soft)', textTransform: 'uppercase', fontWeight: 600 }}>
            Good Day School · Page 4 of 12
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WorkbookCover, WeeklyHandout });
