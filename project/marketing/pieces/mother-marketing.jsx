// Mother Training marketing pack — flyer, social, tear-off poster, newspaper ad.
// Voice: warmer, intimate. Mother-facing. Strong Urdu presence.

// ─── 1. MOTHER TRAINING A4 FLYER — 794 × 1123 ──────────────────────────
function MotherFlyer() {
  return (
    <div className="gds-paper" style={{ width: 794, height: 1123, position: 'relative', overflow: 'hidden' }}>
      <BleedMarks/>
      {/* Top: cream half with portrait */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 540 }}>
        <div style={{ padding: 40, background: 'var(--cream)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          <Lockup size={1}/>
          <div>
            <Eyebrow style={{ fontSize: 10, marginBottom: 14 }}>Mother Training · Cohort 12</Eyebrow>
            <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 58, lineHeight: 0.95, color: 'var(--maroon-deep)', letterSpacing: '-.015em', marginBottom: 12 }}>
              The mother<br/>is every<br/>child's <em style={{ color: 'var(--maroon)' }}>first</em><br/><span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic' }}>teacher.</span>
            </h1>
            <div className="gds-urdu" style={{ fontSize: 24, color: 'var(--maroon-deep)', lineHeight: 1.9 }}>
              ماں ہر بچّے کی پہلی استاد ہے۔
            </div>
          </div>
        </div>
        <div className="gds-photo" style={{ backgroundImage: `url(${PHOTOS.motherChild})`, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(74,19,19,.05) 0%,rgba(74,19,19,.55) 100%)' }}></div>
          <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28, color: 'var(--cream)' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 26, fontWeight: 500, lineHeight: 1.15 }}>
              "I left understanding<br/>my own son for the<br/>first time."
            </div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 12, fontWeight: 600 }}>Ayesha Rashid · Trainee 2024</div>
          </div>
        </div>
      </div>

      {/* Mid: program quick facts band */}
      <div style={{ background: 'var(--maroon-deep)', color: 'var(--cream)', padding: '24px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, position: 'relative' }}>
        {[
          ['8 – 12', 'WEEKS'],
          ['1', 'SUPERVISOR'],
          ['10 – 15', 'MOTHERS / COHORT'],
          ['SLIDING', 'SCALE COST'],
        ].map(([n, l]) => (
          <div key={l} style={{ borderLeft: '2px solid var(--gold)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 32, color: 'var(--gold)', fontWeight: 600, lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9.5, letterSpacing: '.18em', color: 'var(--gold-soft)', marginTop: 6, fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Bottom: curriculum + footer */}
      <div style={{ padding: '34px 40px 40px' }}>
        <Eyebrow style={{ fontSize: 9, marginBottom: 18 }}>Twelve weeks of curriculum</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px', marginBottom: 28 }}>
          {[
            ['Child development', 'بچّے کی نشوونما — what is normal, what is not'],
            ['Reading at home', 'گھر میں مطالعہ — routines, books, read-aloud'],
            ['Health & nutrition', 'صحت اور غذائیت — sleep, food, screen time'],
            ['Emotional regulation', 'جذباتی توازن — for the child, for the mother'],
            ['Financial literacy', 'گھریلو معاشیات — basic home economics'],
            ['Working with the school', 'اسکول کے ساتھ — what to ask, when to ask'],
          ].map(([h, u], i) => (
            <div key={h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', paddingBottom: 10, borderBottom: i < 4 ? '1px dotted var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, color: 'var(--gold-deep,#B89651)', minWidth: 24, fontWeight: 500 }}>0{i + 1}</div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 17, fontWeight: 600, color: 'var(--maroon-deep)', lineHeight: 1.1, marginBottom: 4 }}>{h}</div>
                <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink-soft)', lineHeight: 1.45 }}>{u}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--cream-deep)', border: '1px solid var(--line)', borderRadius: 8, padding: 22, display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 24, alignItems: 'center', marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, fontWeight: 500, color: 'var(--maroon-deep)', lineHeight: 1.2 }}>
              Next cohort begins<br/><span style={{ color: 'var(--maroon)' }}>Monday, 15 September.</span>
            </div>
            <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink-soft)', marginTop: 8 }}>Hybrid · Mondays 10 AM – noon · Online catch-up if you can't come.</div>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--line)' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {Icon.qr(72)}
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--ink-soft)', letterSpacing: '.14em', textTransform: 'uppercase', lineHeight: 1.5, maxWidth: 70 }}>WhatsApp Sister Nadia</div>
          </div>
        </div>

        <div style={{ paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--ink-soft)', letterSpacing: '.06em' }}>
            <b style={{ color: 'var(--maroon)' }}>WhatsApp</b> +92 300 555 0001 &nbsp;·&nbsp; gooddayschool.pk/mother-training
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-soft)' }}>Good Day School · Rawalpindi · Est. 2001</div>
        </div>
      </div>
    </div>
  );
}

// ─── 2. MOTHER TRAINING SOCIAL SQUARE — 1080 × 1080 ───────────────────
function MotherSocial() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--cream-deep)', position: 'relative', overflow: 'hidden' }}>
      <div className="gds-photo" style={{ position: 'absolute', top: 0, right: 0, width: 580, height: 1080, backgroundImage: `url(${PHOTOS.motherChild})` }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 580, height: 1080, background: 'linear-gradient(270deg,rgba(74,19,19,.05) 0%,rgba(242,235,219,.95) 100%)' }}></div>

      <div style={{ position: 'absolute', top: 64, left: 64, right: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Lockup size={1.5}/>
        <Eyebrow style={{ fontSize: 14 }}>Mother Training</Eyebrow>
      </div>

      <div style={{ position: 'absolute', top: 240, left: 64, right: 64 }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 120, lineHeight: 0.94, color: 'var(--maroon-deep)', letterSpacing: '-.015em', maxWidth: 880 }}>
          The mother is<br/>every child's<br/><em style={{ color: 'var(--maroon)' }}>first</em><br/><span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic' }}>teacher.</span>
        </h1>
        <div className="gds-urdu" style={{ fontSize: 44, color: 'var(--maroon-deep)', marginTop: 28, maxWidth: 600 }}>
          ماں ہر بچّے کی پہلی استاد ہے۔
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 64, left: 64, right: 64, background: 'var(--maroon-deep)', color: 'var(--cream)', borderRadius: 12, padding: '28px 36px', display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 24, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 13, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 4 }}>Cohort 12 · begins</div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 38, fontWeight: 500 }}>Monday, 15 September</div>
        </div>
        <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(201,169,97,.3)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ background: 'var(--cream)', padding: 10, borderRadius: 8 }}>{Icon.qr(96)}</div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 20, color: 'var(--gold-soft)', lineHeight: 1.25, maxWidth: 130 }}>
            Scan to<br/>WhatsApp us
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 3. TEAR-OFF WALL POSTER (clinic / mosque) — 794 × 1123 ───────────
function TearOffPoster() {
  const tabs = Array.from({ length: 10 });
  return (
    <div className="gds-paper" style={{ width: 794, height: 1123, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <BleedMarks/>
      {/* big serif statement, top 70% */}
      <div style={{ flex: 1, padding: '48px 50px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup size={1.05}/>
          <Eyebrow bookended style={{ fontSize: 11 }}>For mothers</Eyebrow>
        </div>

        <div>
          <div className="gds-urdu" style={{ fontSize: 36, color: 'var(--maroon)', marginBottom: 18, lineHeight: 1.7 }}>
            ماؤں کی تربیت کا<br/>۱۲ ہفتے کا کورس۔
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 86, lineHeight: 0.94, color: 'var(--maroon-deep)', letterSpacing: '-.02em' }}>
            Twelve weeks.<br/><em style={{ color: 'var(--maroon)' }}>One supervisor.</em><br/><span style={{ color: 'var(--gold-deep,#B89651)', fontStyle: 'italic' }}>Real change in the house</span>—<br/>not just in the school.
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div style={{ background: 'var(--cream-deep)', padding: 18, borderRadius: 6, borderLeft: '3px solid var(--gold)' }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 4 }}>Cost</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, color: 'var(--maroon-deep)', fontWeight: 500 }}>Sliding scale</div>
            <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink-soft)', marginTop: 4 }}>If you can pay, you do. If you can't, you don't. We never turn a mother away.</div>
          </div>
          <div style={{ background: 'var(--cream-deep)', padding: 18, borderRadius: 6, borderLeft: '3px solid var(--gold)' }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 4 }}>Certificate</div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, color: 'var(--maroon-deep)', fontWeight: 500 }}>From the school</div>
            <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink-soft)', marginTop: 4 }}>Complete 80% of sessions and you graduate with paper in your hand.</div>
          </div>
        </div>

        <div style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '.04em', color: 'var(--ink-soft)', marginTop: 4 }}>
          <b style={{ color: 'var(--maroon)', fontFamily: 'DM Sans', letterSpacing: '.14em' }}>NEXT COHORT</b> &nbsp;·&nbsp; Monday, 15 September &nbsp;·&nbsp; Hybrid &nbsp;·&nbsp; 10 AM – 12 noon
        </div>
      </div>

      {/* Tear-off strip */}
      <div style={{ borderTop: '2px dashed var(--maroon)', background: 'var(--cream-deep)', padding: '14px 18px 18px' }}>
        <div style={{ textAlign: 'center', fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.4em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 12 }}>
          ✁ &nbsp; Tear a tab. WhatsApp us. &nbsp; ✁
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gap: 4 }}>
          {tabs.map((_, i) => (
            <div key={i} style={{ background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: 4, padding: '10px 4px', textAlign: 'center', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                <span style={{ width: 18, height: 18, borderRadius: 4, background: '#25D366', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  {Icon.whatsapp(12, '#fff')}
                </span>
              </div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--maroon-deep)', fontWeight: 600, lineHeight: 1.3, fontFeatureSettings: '"tnum"' }}>
                +92 300<br/>555 0001
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 9, fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 3 }}>Mother Training</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 4. MOTHER TRAINING NEWSPAPER AD — 1240 × 600 ─────────────────────
function MotherNewspaperAd() {
  return (
    <div style={{ width: 1240, height: 600, background: '#FBF6EC', border: '2px solid var(--ink)', padding: 30, position: 'relative', boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: 12, left: 12, right: 12, height: 4, borderTop: '2px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32, height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Lockup size={1}/>
            <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700 }}>
              Mother Training · Cohort 12
            </div>
          </div>

          <div>
            <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 56, lineHeight: 0.95, color: 'var(--ink)', letterSpacing: '-.015em', marginBottom: 12 }}>
              The mother is every<br/>child's <em>first teacher.</em>
            </h1>
            <div className="gds-urdu" style={{ fontSize: 22, color: 'var(--ink)', marginBottom: 16 }}>
              ماں ہر بچّے کی پہلی استاد ہے۔
            </div>
            <p style={{ fontFamily: 'Lora', fontSize: 14, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 520 }}>
              An 8 – 12 week cohort for mothers of children aged 0 – 10. Child development, reading at home, health and nutrition, emotional regulation. A supervisor on WhatsApp. Sliding-scale cost. Certificate from the school.
            </p>
          </div>

          <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--ink)', borderTop: '1px solid var(--ink)', paddingTop: 12, lineHeight: 1.6 }}>
            <b style={{ letterSpacing: '.1em' }}>NEXT COHORT</b> &nbsp;·&nbsp; Monday, 15 September &nbsp;·&nbsp;
            <b style={{ letterSpacing: '.1em' }}>WHATSAPP</b> &nbsp;·&nbsp; 0300 555 0001 &nbsp;·&nbsp;
            <b style={{ letterSpacing: '.1em' }}>ONLINE</b> &nbsp;·&nbsp; gooddayschool.pk/mother-training
          </div>
        </div>

        <div style={{ borderLeft: '1px solid var(--ink)', paddingLeft: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 10, lineHeight: 1.35 }}>
            "Hard, honest, and the most useful twelve weeks of my life."
          </div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 600 }}>
            — Ayesha Rashid, mother &amp; trainee 2024
          </div>

          <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700, marginTop: 6 }}>What you'll learn</div>
          <ul style={{ paddingLeft: 16, fontFamily: 'Lora', fontSize: 12, color: 'var(--ink)', lineHeight: 1.7, margin: 0 }}>
            <li>Child development from 0 – 10</li>
            <li>Reading at home, the read-aloud habit</li>
            <li>Health, nutrition, sleep, screen time</li>
            <li>Emotional regulation — for both of you</li>
            <li>Working with your child's school</li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--ink)' }}>
            {Icon.qr(72)}
            <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', lineHeight: 1.2 }}>
              Join the next cohort<br/>
              <span style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontStyle: 'normal', color: 'var(--ink-soft)' }}>Scan or WhatsApp Sister Nadia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MotherFlyer, MotherSocial, TearOffPoster, MotherNewspaperAd });
