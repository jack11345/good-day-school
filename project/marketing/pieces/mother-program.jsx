// Mother Training program surfaces — Landing page + Parent app enrollment flow

// ─── LANDING PAGE — 1280 × ~2400 inside browser chrome ────────────────
function MotherLandingPage() {
  const W = 1280;
  return (
    <ChromeWindow tabs={[{ title: 'Mother Training · Good Day School', active: true }]} url="gooddayschool.pk/mother-training" width={W} height={1800}>
      <div style={{ background: 'var(--cream)', fontFamily: 'Lora', color: 'var(--ink)' }}>
        {/* Site header */}
        <div style={{ background: 'rgba(74,19,19,.96)', padding: '14px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,169,97,.22)' }}>
          <Lockup size={0.85} onDark/>
          <nav style={{ display: 'flex', gap: 6, fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '.06em' }}>
            {['About', 'Programs', 'Mother Training', 'Bus', 'Apply', 'اردو'].map((n, i) => (
              <span key={n} style={{ padding: '7px 12px', color: i === 2 ? 'var(--cream)' : 'var(--gold-soft)', background: i === 2 ? 'rgba(201,169,97,.18)' : 'transparent', borderRadius: 6 }}>{n}</span>
            ))}
          </nav>
          <CTAPill gold style={{ fontSize: 11, padding: '8px 16px' }}>Apply now →</CTAPill>
        </div>

        {/* HERO */}
        <section style={{ padding: '76px 56px 60px', background: 'var(--cream-deep)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -150, right: -150, width: 500, height: 500, background: 'radial-gradient(circle,rgba(201,169,97,.35),transparent 60%)' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center', position: 'relative' }}>
            <div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 10 }}>Home / Programs / <b style={{ color: 'var(--maroon)' }}>Mother Training</b></div>
              <Eyebrow style={{ fontSize: 11, marginBottom: 18 }}>Cohort 12 · Begins 15 September</Eyebrow>
              <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 76, lineHeight: 0.96, color: 'var(--maroon-deep)', letterSpacing: '-.015em', marginBottom: 22 }}>
                The mother is every<br/>child's <em style={{ color: 'var(--maroon)' }}>first teacher.</em>
              </h1>
              <div className="gds-urdu" style={{ fontSize: 26, color: 'var(--maroon-deep)', marginBottom: 22 }}>
                ماں ہر بچّے کی پہلی استاد ہے۔
              </div>
              <p style={{ fontFamily: 'Lora', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 540, marginBottom: 28 }}>
                Twelve weeks. One supervisor. Real change in the house, not just in the school. An evidence-based cohort for mothers of children aged zero to ten — especially mothers of children in our rehabilitation programme.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <CTAPill>Apply to Cohort 12 →</CTAPill>
                <CTAPill gold>Read the curriculum →</CTAPill>
              </div>
            </div>
            <div style={{ position: 'relative', height: 480 }}>
              <div className="gds-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PHOTOS.motherChild})`, border: '8px solid var(--cream)', boxShadow: '0 24px 48px -20px rgba(74,19,19,.4)' }}></div>
              <div style={{ position: 'absolute', bottom: -16, left: -16, background: 'var(--maroon-deep)', color: 'var(--gold)', padding: '14px 22px', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, fontWeight: 500 }}>
                "Twelve weeks that<br/>changed our home."
              </div>
            </div>
          </div>

          {/* fact strip */}
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
            {[
              ['8 – 12', 'WEEKS LONG'],
              ['10 – 15', 'MOTHERS / COHORT'],
              ['1', 'SUPERVISOR ON WHATSAPP'],
              ['SLIDING', 'SCALE COST'],
              ['80%', 'EARNS A CERTIFICATE'],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 38, color: 'var(--maroon)', fontWeight: 600, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: 6, fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CURRICULUM */}
        <section style={{ padding: '80px 56px', background: 'var(--cream)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 36, marginBottom: 48 }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 68, color: 'var(--gold-deep,#B89651)', fontStyle: 'italic', fontWeight: 300, lineHeight: 0.85 }}>01</div>
            <div>
              <Eyebrow style={{ fontSize: 10, marginBottom: 12 }}>The curriculum</Eyebrow>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 42, fontWeight: 500, color: 'var(--maroon-deep)', maxWidth: 720, lineHeight: 1.1 }}>
                Six themes. Twelve weeks. Real homework — the kind that changes a kitchen, not just a notebook.
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 56 }}>
            {[
              ['Child development', 'Weeks 1 – 2', 'What is normal at age two. At age five. At age eight. When to be worried — and when not to.', 'بچّے کی نشوونما'],
              ['Reading at home', 'Weeks 3 – 4', 'Books in Urdu, English, and any other tongue you speak. Read-aloud, lap-reading, and the daily 15-minute habit.', 'گھر میں مطالعہ'],
              ['Health & nutrition', 'Weeks 5 – 6', 'Sleep schedules. Real food on small budgets. The screen-time conversation, honestly.', 'صحت اور غذائیت'],
              ['Emotional regulation', 'Weeks 7 – 8', "Naming feelings. The mother's own breath. What to do when a small body is having a big feeling.", 'جذباتی توازن'],
              ['Financial literacy', 'Weeks 9 – 10', 'Household budgets, saving for school, and how to teach a child the value of money without shame.', 'گھریلو معاشیات'],
              ['Working with the school', 'Weeks 11 – 12', "Who to call, what to say, when to ask. The school is not an opponent. Your child's teacher is a friend.", 'اسکول کے ساتھ'],
            ].map(([t, w, b, u]) => (
              <div key={t} className="lift" style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 10, padding: 28 }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold-deep,#B89651)', fontWeight: 700, marginBottom: 10 }}>{w}</div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 26, fontWeight: 600, color: 'var(--maroon-deep)', lineHeight: 1.1, marginBottom: 6 }}>{t}</div>
                <div className="gds-urdu" style={{ fontSize: 16, color: 'var(--maroon)', marginBottom: 12 }}>{u}</div>
                <p style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS — dark */}
        <section style={{ padding: '80px 56px', background: 'var(--maroon-deep)', color: 'var(--cream)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 36, marginBottom: 48 }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 68, color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300, opacity: .9, lineHeight: 0.85 }}>02</div>
            <div>
              <Eyebrow onDark style={{ fontSize: 10, marginBottom: 12 }}>How it works</Eyebrow>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 42, fontWeight: 500, color: 'var(--cream)', maxWidth: 760, lineHeight: 1.1 }}>
                A weekly two-hour cohort. A supervisor on WhatsApp. A graduation, with paper.
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            {[
              ['Monday mornings', 'A two-hour session at the school — small group, tea, kids welcome.'],
              ['Online catch-up', "Can't come Monday? Watch the recording. The supervisor checks in."],
              ['Your supervisor', "One of our senior teachers, reachable on WhatsApp during school hours."],
              ['Monthly report', 'A written report on your child at home — quietly assisted by our internal AI.'],
            ].map(([h, b], i) => (
              <div key={h} style={{ borderTop: '2px solid var(--gold)', paddingTop: 16 }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', color: 'var(--gold)', fontWeight: 700, marginBottom: 6 }}>STEP 0{i + 1}</div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, fontWeight: 600, color: 'var(--cream)', marginBottom: 8 }}>{h}</div>
                <p style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--gold-soft)', lineHeight: 1.55, opacity: .9 }}>{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR + TESTIMONY */}
        <section style={{ padding: '80px 56px', background: 'var(--cream)', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56 }}>
          <div>
            <Eyebrow style={{ fontSize: 10, marginBottom: 12 }}>Who it is for</Eyebrow>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 42, fontWeight: 500, color: 'var(--maroon-deep)', maxWidth: 580, lineHeight: 1.1, marginBottom: 24 }}>
              Any mother of a child between zero and ten.
            </h2>
            <p style={{ fontFamily: 'Lora', fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 20 }}>
              You do not need a child at Good Day School. You do not need any prior schooling. You do not need to speak English. The course runs in Urdu and English, side by side. We do not turn a mother away over fees.
            </p>
            <ul style={{ paddingLeft: 0, listStyle: 'none', fontFamily: 'Lora', fontSize: 14, color: 'var(--ink)', lineHeight: 2 }}>
              {['Mothers of children in our Rehabilitation programme — priority seats', 'First-time mothers', 'Mothers re-entering work or running home tuition', 'Grandmothers and aunts raising a child'].map(l => (
                <li key={l} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span style={{ color: 'var(--gold-deep,#B89651)', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 20 }}>·</span>{l}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ background: 'var(--maroon-deep)', color: 'var(--cream)', padding: 36, borderRadius: 14, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -50, right: -50, fontFamily: 'Cormorant Garamond', fontSize: 240, color: 'rgba(201,169,97,.15)', lineHeight: 1, fontWeight: 600 }}>"</div>
              <Eyebrow onDark style={{ fontSize: 9, marginBottom: 18 }}>Cohort 9 · 2024</Eyebrow>
              <blockquote style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 26, fontWeight: 500, color: 'var(--cream)', lineHeight: 1.35, marginBottom: 18 }}>
                "The mother training course was hard, honest, and the most useful twelve weeks of my life. I left understanding my own son for the first time."
              </blockquote>
              <div className="gds-urdu" style={{ fontSize: 18, color: 'var(--gold-soft)', marginBottom: 18 }}>
                یہ کورس میری زندگی کے سب سے قیمتی ۱۲ ہفتے تھے۔
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid rgba(201,169,97,.2)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--gold-soft)', color: 'var(--maroon-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 16 }}>AR</div>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 18, fontWeight: 600, color: 'var(--cream)' }}>Ayesha Rashid</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', color: 'var(--gold)', textTransform: 'uppercase' }}>Mother · Pindora, Rawalpindi</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEES + FAQ + APPLY */}
        <section style={{ padding: '80px 56px', background: 'var(--cream-deep)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
            <div>
              <Eyebrow style={{ fontSize: 10, marginBottom: 12 }}>The cost</Eyebrow>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 38, fontWeight: 500, color: 'var(--maroon-deep)', lineHeight: 1.1, marginBottom: 18 }}>
                Sliding scale — set in conversation, not on a price list.
              </h2>
              <p style={{ fontFamily: 'Lora', fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 22 }}>
                Most mothers pay PKR 4,000 – 8,000 for the full course. Some pay more. Some pay nothing. We do not publish a fixed fee because we have never wanted a mother to feel priced out of her own child's life.
              </p>
              <div style={{ background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: 10, padding: 22 }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 8 }}>What is included</div>
                <ul style={{ paddingLeft: 18, fontFamily: 'Lora', fontSize: 13, color: 'var(--ink)', lineHeight: 1.8 }}>
                  <li>The printed Mother Training workbook</li>
                  <li>Weekly handouts (Urdu &amp; English)</li>
                  <li>Tea, lunch, and child-minding on session days</li>
                  <li>WhatsApp access to your supervisor</li>
                  <li>Monthly written report on your child</li>
                  <li>Certificate on graduation</li>
                </ul>
              </div>
            </div>

            <div>
              <Eyebrow style={{ fontSize: 10, marginBottom: 12 }}>Honest answers</Eyebrow>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 38, fontWeight: 500, color: 'var(--maroon-deep)', lineHeight: 1.1, marginBottom: 24 }}>The questions mothers ask first.</h2>
              {[
                ['Do I need to bring my child?', 'You may. We have a quiet room with two daycare aunties on session mornings — no extra charge.'],
                ["What if I can't make a Monday?", "Watch the recording on your phone. WhatsApp your supervisor with one question — she'll catch you up."],
                ['Is this only for Muslims?', 'No. The school is Pakistani and Muslim by community, but the cohort welcomes any mother. Curriculum is non-denominational.'],
                ['My child does not attend Good Day School. Can I still join?', 'Yes. About a third of our mothers are not Good Day parents — they come because of word of mouth.'],
              ].map(([q, a]) => (
                <details key={q} style={{ borderTop: '1px solid var(--line)', padding: '18px 0' }}>
                  <summary style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, fontWeight: 600, color: 'var(--maroon-deep)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {q}<span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond', fontSize: 26 }}>+</span>
                  </summary>
                  <p style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.65, marginTop: 8 }}>{a}</p>
                </details>
              ))}
              <details open style={{ borderTop: '1px solid var(--line)', padding: '18px 0', borderBottom: '1px solid var(--line)' }}>
                <summary style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, fontWeight: 600, color: 'var(--maroon)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                  When is the next intake?<span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond', fontSize: 26 }}>−</span>
                </summary>
                <p style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.65, marginTop: 8 }}>
                  <b style={{ color: 'var(--maroon)' }}>Cohort 12</b> begins Monday, 15 September 2026. Applications close 1 September. We accept 10 to 15 mothers. Priority to mothers of rehabilitation-programme children, then to first-time applicants.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* APPLY — dark */}
        <section style={{ padding: '80px 56px', background: 'var(--maroon-deep)', color: 'var(--cream)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%,rgba(201,169,97,.18),transparent 60%)' }}></div>
          <Eyebrow onDark style={{ fontSize: 10, marginBottom: 18, position: 'relative' }}>Cohort 12 · 15 September</Eyebrow>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 64, lineHeight: 1, color: 'var(--cream)', marginBottom: 18, position: 'relative' }}>
            Twelve weeks <em style={{ color: 'var(--gold)' }}>begin</em><br/>with one message.
          </h2>
          <p style={{ fontFamily: 'Lora', fontSize: 16, color: 'var(--gold-soft)', maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.6, position: 'relative' }}>
            Tap below to apply through the parent app, or WhatsApp Sister Nadia. She replies the same day.
          </p>
          <div style={{ display: 'inline-flex', gap: 14, position: 'relative' }}>
            <CTAPill gold style={{ fontSize: 14, padding: '16px 28px' }}>Apply in the parent app →</CTAPill>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 28px', borderRadius: 6, background: 'transparent', border: '1px solid var(--gold-soft)', color: 'var(--gold-soft)', fontFamily: 'DM Sans', fontSize: 14, fontWeight: 600, letterSpacing: '.05em' }}>
              {Icon.whatsapp(16, '#25D366')} WhatsApp Sister Nadia
            </span>
          </div>
        </section>

        {/* Site footer */}
        <footer style={{ padding: '40px 56px', background: '#3A0F0F', color: 'var(--gold-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup size={0.75} onDark/>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.08em', color: 'var(--gold)' }}>© 2026 Good Day School · Rawalpindi · Est. 2001</div>
        </footer>
      </div>
    </ChromeWindow>
  );
}

// ─── PARENT APP — ENROLLMENT FLOW (3 screens) ─────────────────────────
function EnrollScreen1() {
  return (
    <IOSDevice width={402} height={874} title="">
      <div style={{ background: 'var(--cream)', minHeight: '100%', fontFamily: 'Lora' }}>
        {/* mini hero */}
        <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
          <div className="gds-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PHOTOS.motherChild})` }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(74,19,19,.45) 0%,rgba(74,19,19,.95) 100%)' }}></div>
          <div style={{ position: 'absolute', top: 64, left: 20, right: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,.3)', border: '1px solid rgba(255,255,255,.3)', color: 'var(--cream)', fontFamily: 'serif', fontSize: 20 }}>‹</button>
            <div style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.2em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>Programs / Mother Training</div>
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, color: 'var(--cream)' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 30, fontWeight: 400, lineHeight: 1, letterSpacing: '-.01em' }}>
              The mother is<br/>every child's<br/><em style={{ color: 'var(--gold)' }}>first teacher.</em>
            </div>
          </div>
        </div>

        <div style={{ padding: '20px 20px 100px' }}>
          {/* meta strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 20 }}>
            {[['8–12 wk', 'Length'], ['Hybrid', 'Format'], ['Sliding', 'Cost']].map(([n, l]) => (
              <div key={l} style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 18, color: 'var(--maroon)', fontWeight: 600, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.16em', color: 'var(--ink-soft)', marginTop: 4, textTransform: 'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--gold-soft)', color: 'var(--maroon-deep)', padding: 14, borderRadius: 8, marginBottom: 20 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>Cohort 12 · Begins 15 Sep</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, fontWeight: 500 }}>9 of 15 seats left.</div>
          </div>

          <p style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 16 }}>
            A weekly two-hour cohort for mothers of children aged zero to ten. Curriculum, supervisor on WhatsApp, monthly progress report.
          </p>

          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 10 }}>What you will learn</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['01', 'Child development from 0 to 10'],
              ['02', 'Reading at home — the daily 15 min habit'],
              ['03', 'Health, nutrition, sleep, screen time'],
              ['04', 'Emotional regulation, for both of you'],
              ['05', 'Basic financial literacy'],
              ['06', 'Working with the school'],
            ].map(([n, l]) => (
              <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '8px 12px', background: 'white', borderRadius: 6, border: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 14, color: 'var(--gold-deep,#B89651)', fontStyle: 'italic', fontWeight: 600 }}>{n}</div>
                <div style={{ fontFamily: 'Lora', fontSize: 12, color: 'var(--ink)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* sticky CTA */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 20px 34px', background: 'linear-gradient(180deg,rgba(250,246,238,0) 0%,var(--cream) 30%)', display: 'flex', gap: 10 }}>
          <button style={{ flex: 1, padding: '14px', background: 'var(--maroon)', color: 'var(--cream)', borderRadius: 8, fontFamily: 'DM Sans', fontSize: 14, fontWeight: 600, letterSpacing: '.04em', border: 'none' }}>
            Apply to Cohort 12 →
          </button>
          <button style={{ width: 50, height: 50, background: 'var(--gold)', borderRadius: 8, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.whatsapp(22, 'var(--maroon-deep)')}
          </button>
        </div>
      </div>
    </IOSDevice>
  );
}

function EnrollScreen2() {
  const Field = ({ label, value, hint, urdu, type = 'text' }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 700 }}>{label}</div>
        {urdu && <div className="gds-urdu" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{urdu}</div>}
      </div>
      <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 6, padding: '11px 14px', fontFamily: 'Lora', fontSize: 14, color: 'var(--ink)' }}>
        {value || <span style={{ color: 'var(--muted,#8A7A6A)' }}>{hint}</span>}
      </div>
    </div>
  );
  return (
    <IOSDevice width={402} height={874} title="">
      <div style={{ background: 'var(--cream)', minHeight: '100%', fontFamily: 'Lora', paddingBottom: 100 }}>
        <div style={{ padding: '64px 20px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <button style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--cream-deep)', color: 'var(--maroon)', fontFamily: 'serif', fontSize: 18, border: 'none' }}>‹</button>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.16em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Application · Cohort 12</div>
        </div>

        {/* progress */}
        <div style={{ padding: '0 20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 6 }}>
            <span>Step 2 of 3</span>
            <span style={{ color: 'var(--maroon)', fontWeight: 600 }}>About you</span>
          </div>
          <div style={{ height: 4, background: 'var(--cream-deep)', borderRadius: 2 }}>
            <div style={{ height: 4, background: 'var(--maroon)', borderRadius: 2, width: '66%' }}></div>
          </div>
        </div>

        <div style={{ padding: '8px 20px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 26, fontWeight: 500, color: 'var(--maroon-deep)', lineHeight: 1.15, marginBottom: 14 }}>
            Tell us about <em>you</em> and your child.
          </h1>

          <Field label="Your name" urdu="آپ کا نام" value="Sadia Khan"/>
          <Field label="WhatsApp number" urdu="واٹس ایپ" value="+92 300 234 5678"/>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 700, marginBottom: 8 }}>Preferred language for sessions</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Urdu', 'English', 'Both'].map((l, i) => (
                <button key={l} style={{ flex: 1, padding: '10px', borderRadius: 6, border: `1px solid ${i === 2 ? 'var(--maroon)' : 'var(--line)'}`, background: i === 2 ? 'var(--maroon)' : 'white', color: i === 2 ? 'var(--cream)' : 'var(--ink)', fontFamily: 'DM Sans', fontSize: 12, fontWeight: i === 2 ? 600 : 400 }}>{l}</button>
              ))}
            </div>
          </div>

          <Field label="Child's name & age" urdu="بچّے کا نام، عمر" value="Hamza Khan · 6 years"/>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 700, marginBottom: 8 }}>Is your child in our school?</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[['Yes — Grade 1', true], ['Yes — Rehab', false], ['No', false]].map(([l, sel], i) => (
                <button key={l} style={{ flex: 1, padding: '10px', borderRadius: 6, border: `1px solid ${sel ? 'var(--maroon)' : 'var(--line)'}`, background: sel ? 'var(--maroon)' : 'white', color: sel ? 'var(--cream)' : 'var(--ink)', fontFamily: 'DM Sans', fontSize: 11, fontWeight: sel ? 600 : 400 }}>{l}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 700, marginBottom: 6 }}>What you hope to learn (optional)</div>
            <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 6, padding: '12px 14px', fontFamily: 'Lora', fontSize: 13, color: 'var(--ink-soft)', minHeight: 70, lineHeight: 1.5, fontStyle: 'italic' }}>
              Hamza is bright but very anxious about reading. I want to help him at home without putting more pressure.
            </div>
          </div>

          <div style={{ background: 'var(--cream-deep)', borderRadius: 8, padding: 14, border: '1px solid var(--line)' }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 6 }}>Set your own fee</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 15, color: 'var(--ink-soft)', marginBottom: 10 }}>
              Pay what feels right. The school decides nothing here.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, height: 6, background: 'var(--line)', borderRadius: 3, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: 6, background: 'var(--maroon)', borderRadius: 3, width: '50%' }}></div>
                <div style={{ position: 'absolute', left: 'calc(50% - 10px)', top: -6, width: 20, height: 20, borderRadius: '50%', background: 'var(--gold)', border: '3px solid var(--cream)', boxShadow: '0 4px 8px rgba(74,19,19,.3)' }}></div>
              </div>
              <div style={{ fontFamily: 'DM Sans', fontWeight: 700, color: 'var(--maroon-deep)', fontFeatureSettings: '"tnum"', fontSize: 14 }}>PKR 6,000</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Sans', fontSize: 9, color: 'var(--muted,#8A7A6A)', marginTop: 6, letterSpacing: '.06em' }}>
              <span>0</span><span>4,000</span><span>8,000</span><span>12,000+</span>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 20px 34px', background: 'var(--cream)', borderTop: '1px solid var(--line)', display: 'flex', gap: 10 }}>
          <button style={{ padding: '14px 18px', background: 'transparent', color: 'var(--maroon)', borderRadius: 8, fontFamily: 'DM Sans', fontSize: 13, fontWeight: 500, border: '1px solid var(--maroon)' }}>Back</button>
          <button style={{ flex: 1, padding: '14px', background: 'var(--maroon)', color: 'var(--cream)', borderRadius: 8, fontFamily: 'DM Sans', fontSize: 14, fontWeight: 600, letterSpacing: '.04em', border: 'none' }}>
            Review &amp; submit →
          </button>
        </div>
      </div>
    </IOSDevice>
  );
}

function EnrollScreen3() {
  return (
    <IOSDevice width={402} height={874} title="">
      <div style={{ background: 'var(--cream)', minHeight: '100%', fontFamily: 'Lora', position: 'relative' }}>
        <div style={{ padding: '64px 20px 0' }}>
          {/* success seal */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'var(--cream-deep)', border: '2px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--maroon-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', color: 'var(--gold)' }}>{Icon.star(14)}</div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 56, color: 'var(--gold)', fontWeight: 600, lineHeight: 1 }}>✓</div>
              </div>
            </div>
          </div>

          <Eyebrow bookended style={{ fontSize: 9, justifyContent: 'center', display: 'flex', marginBottom: 12 }}>Application received</Eyebrow>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 32, color: 'var(--maroon-deep)', textAlign: 'center', lineHeight: 1.05, marginBottom: 10 }}>
            Welcome, <em>Sadia.</em>
          </h1>
          <div className="gds-urdu" style={{ fontSize: 18, color: 'var(--maroon-deep)', textAlign: 'center', marginBottom: 18 }}>
            خوش آمدید
          </div>
          <p style={{ fontFamily: 'Lora', fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.65, textAlign: 'center', maxWidth: 320, margin: '0 auto 24px' }}>
            Sister Nadia will WhatsApp you within one school day to confirm your seat and answer any first questions.
          </p>

          {/* Supervisor card */}
          <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 10, padding: 16, marginBottom: 14, display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#C9A961,#8B6A1F)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 22 }}>NH</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', color: 'var(--gold-deep,#B89651)', fontWeight: 700, textTransform: 'uppercase' }}>Your supervisor</div>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 19, color: 'var(--maroon-deep)', fontWeight: 600 }}>Nadia Habib</div>
              <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink-soft)' }}>Senior teacher · 18 years at Good Day</div>
            </div>
            <button style={{ width: 40, height: 40, background: '#25D366', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.whatsapp(20, '#fff')}</button>
          </div>

          {/* What's next */}
          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 10 }}>What is next</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, background: 'white', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            {[
              ['Today', "WhatsApp confirmation from Sister Nadia", true],
              ['1 Sep', 'Workbook + handouts delivered to your door', false],
              ['15 Sep', 'First session · 10 AM · Farmhouse Campus', false],
              ['18 Dec', 'Graduation & certificate', false],
            ].map(([d, w, done], i) => (
              <div key={d} style={{ display: 'flex', gap: 12, padding: 14, borderBottom: i < 3 ? '1px solid var(--line)' : 'none', alignItems: 'center' }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: done ? 'var(--maroon)' : 'var(--cream-deep)', color: done ? 'var(--gold)' : 'var(--ink-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontFamily: 'DM Sans', fontWeight: 700, border: done ? 'none' : '1px solid var(--line)' }}>{done ? '✓' : i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 600 }}>{d}</div>
                  <div style={{ fontFamily: 'Lora', fontSize: 13, color: 'var(--ink)' }}>{w}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--gold-soft)', color: 'var(--maroon-deep)', padding: 14, borderRadius: 8, fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 17, lineHeight: 1.3 }}>
            "We are happy you are here, Sadia. May Allah make these twelve weeks easy on you and Hamza."
            <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontStyle: 'normal', color: 'var(--maroon)', marginTop: 8, fontWeight: 700 }}>— Sister Nadia</div>
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}

Object.assign(window, { MotherLandingPage, EnrollScreen1, EnrollScreen2, EnrollScreen3 });
