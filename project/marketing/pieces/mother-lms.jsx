// LMS — Mother Training cohort management screen (desktop)
// Used by the Mother Training programme lead to manage cohorts, mothers, supervisors.

function CohortManager() {
  const sidebar = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '14px 0', fontFamily: 'DM Sans' }}>
      <div style={{ padding: '0 14px 14px', borderBottom: '1px solid rgba(201,169,97,.18)' }}>
        <Lockup size={0.7} onDark/>
        <div style={{ marginTop: 14, fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>Ms. Nadia Habib</div>
        <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--gold-soft)', opacity: .8 }}>Mother Training Lead</div>
      </div>
      <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          ['Dashboard', false], ['Students', false], ['Classes', false], ['Attendance', false],
          ['Mother Training', true], ['Rehabilitation', false], ['Daily notes', false], ['Reports', false], ['Fees', false],
        ].map(([n, sel]) => (
          <div key={n} style={{
            padding: '8px 10px', borderRadius: 6, fontSize: 12, letterSpacing: '.02em',
            color: sel ? 'var(--gold)' : 'var(--gold-soft)',
            background: sel ? 'rgba(201,169,97,.14)' : 'transparent',
            borderLeft: sel ? '2px solid var(--gold)' : '2px solid transparent',
            fontWeight: sel ? 600 : 400,
          }}>{n}</div>
        ))}
      </div>
      <div style={{ padding: '14px', marginTop: 'auto', fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gold)', letterSpacing: '.08em' }}>
        <div style={{ opacity: .7 }}>LMS · v1.2</div>
      </div>
    </div>
  );

  return (
    <MacWindow width={1280} height={820} title="Mother Training · Cohort Manager" sidebar={sidebar}>
      <div style={{ background: 'var(--cream)', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: 'Lora' }}>
        {/* Top bar */}
        <div style={{ padding: '18px 26px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--cream)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 6 }}>
              Mother Training <span style={{ color: 'var(--gold)' }}>/</span> <b style={{ color: 'var(--maroon)' }}>Cohort 12</b> <span style={{ color: 'var(--line)' }}>·</span> <span style={{ background: 'var(--gold-soft)', color: 'var(--maroon-deep)', padding: '2px 8px', borderRadius: 999, fontSize: 9, fontWeight: 700, letterSpacing: '.08em' }}>RUNNING · WEEK 4 of 12</span>
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 30, fontWeight: 500, color: 'var(--maroon-deep)', lineHeight: 1 }}>Autumn 2026 · <em style={{ color: 'var(--maroon)' }}>14 mothers, 1 supervisor.</em></h1>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <select style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 6, padding: '8px 14px', fontFamily: 'DM Sans', fontSize: 12, color: 'var(--ink)' }}>
              <option>Cohort 12 · Aug – Dec 2026</option>
              <option>Cohort 11 · Apr – Jul 2026</option>
              <option>Cohort 10 · Sep – Dec 2025</option>
            </select>
            <button style={{ background: 'var(--maroon)', color: 'var(--cream)', border: 'none', padding: '9px 16px', borderRadius: 6, fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600, letterSpacing: '.04em' }}>+ Add mother</button>
            <button style={{ background: 'var(--gold)', color: 'var(--maroon-deep)', border: 'none', padding: '9px 16px', borderRadius: 6, fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600 }}>Open next session →</button>
          </div>
        </div>

        {/* Metric strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, background: 'var(--cream-deep)', borderBottom: '1px solid var(--line)' }}>
          {[
            ['14', 'enrolled', null],
            ['12', 'on track', 'var(--green)'],
            ['1', 'falling behind', 'var(--amber)'],
            ['1', 'paused', 'var(--ink-soft)'],
            ['88%', 'attendance week 4', 'var(--maroon)'],
          ].map(([n, l, c], i) => (
            <div key={l} style={{ padding: '18px 20px', borderRight: i < 4 ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 30, color: c || 'var(--maroon-deep)', fontWeight: 600, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: 5, fontWeight: 600 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* main body — 2 col */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr', overflow: 'hidden' }}>
          {/* roster */}
          <div style={{ borderRight: '1px solid var(--line)', overflow: 'auto' }}>
            <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700 }}>Roster · 14 mothers</div>
              <div style={{ display: 'flex', gap: 6, fontFamily: 'DM Sans', fontSize: 11 }}>
                {['All', 'Rehab', 'External', 'Paused'].map((t, i) => (
                  <button key={t} style={{ padding: '4px 10px', borderRadius: 999, border: '1px solid var(--line)', background: i === 0 ? 'var(--maroon)' : 'white', color: i === 0 ? 'var(--cream)' : 'var(--ink-soft)', fontWeight: i === 0 ? 600 : 400, letterSpacing: '.02em' }}>{t}</button>
                ))}
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans', fontSize: 12 }}>
              <thead>
                <tr style={{ background: 'var(--cream-deep)', textAlign: 'left' }}>
                  {['Mother', 'Child', 'Fee', 'Attendance', 'Homework', 'Status'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 700, borderBottom: '1px solid var(--line)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sadia Khan', 'SK', 'Hamza · 6 · Grade 1', 'PKR 6,000', 4, 3, 'on'],
                  ['Ayesha Rashid', 'AR', 'Yusuf · 7 · Rehab', 'PKR 0 · scholar.', 4, 4, 'on'],
                  ['Fatima Aslam', 'FA', 'Zoya · 8 · Grade 3', 'PKR 4,000', 4, 4, 'on'],
                  ['Maria Iqbal', 'MI', 'Daniyal · 5 · KG2', 'PKR 8,000', 3, 2, 'behind'],
                  ['Sana Yousuf', 'SY', "Ali · 4 · Rehab", 'PKR 0', 4, 3, 'on'],
                  ['Bushra Akhtar', 'BA', "Eman · 6 · External", 'PKR 5,000', 4, 4, 'on'],
                  ['Hina Mahmood', 'HM', "Ibrahim · 3 · Daycare", 'PKR 2,500', 4, 3, 'on'],
                  ['Nazia Riaz', 'NR', "Amna · 9 · Grade 4", 'PKR 7,000', 2, 1, 'paused'],
                  ['Rabia Khalil', 'RK', "Hassan · 5 · KG2", 'PKR 4,000', 4, 4, 'on'],
                  ['Tahira Bibi', 'TB', "Layla · 2 · Daycare", 'PKR 0', 4, 4, 'on'],
                ].map(([n, ini, ch, fee, att, hw, st]) => {
                  const stylesBy = {
                    on: { bg: '#E8F5EC', c: 'var(--green)', label: 'On track' },
                    behind: { bg: '#FEF6E0', c: 'var(--amber)', label: 'Falling behind' },
                    paused: { bg: '#F0F0F4', c: 'var(--ink-soft)', label: 'Paused' },
                  }[st];
                  return (
                    <tr key={n} style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--gold-soft)', color: 'var(--maroon-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 13 }}>{ini}</div>
                          <div>
                            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 14, fontWeight: 600, color: 'var(--maroon-deep)' }}>{n}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '10px 14px', fontSize: 11, color: 'var(--ink-soft)' }}>{ch}</td>
                      <td style={{ padding: '10px 14px', fontFeatureSettings: '"tnum"', color: 'var(--ink)', fontSize: 11 }}>{fee}</td>
                      <td style={{ padding: '10px 14px' }}>
                        <div style={{ display: 'flex', gap: 3 }}>
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} style={{ width: 14, height: 8, borderRadius: 2, background: i < att ? 'var(--maroon)' : 'var(--cream-deep)', border: '1px solid var(--line)' }}></div>
                          ))}
                          <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--ink-soft)', marginLeft: 6, fontFeatureSettings: '"tnum"' }}>{att}/4</span>
                        </div>
                      </td>
                      <td style={{ padding: '10px 14px' }}>
                        <div style={{ display: 'flex', gap: 3 }}>
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} style={{ width: 14, height: 8, borderRadius: 2, background: i < hw ? 'var(--gold)' : 'var(--cream-deep)', border: '1px solid var(--line)' }}></div>
                          ))}
                          <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--ink-soft)', marginLeft: 6, fontFeatureSettings: '"tnum"' }}>{hw}/4</span>
                        </div>
                      </td>
                      <td style={{ padding: '10px 14px' }}>
                        <span style={{ background: stylesBy.bg, color: stylesBy.c, padding: '3px 10px', borderRadius: 999, fontFamily: 'DM Sans', fontSize: 10, fontWeight: 600, letterSpacing: '.04em', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>{stylesBy.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* right column — schedule + selected mother */}
          <div style={{ overflow: 'auto' }}>
            {/* Week schedule */}
            <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 14 }}>Week 4 · 5 – 11 Oct</div>
              <div style={{ background: 'var(--maroon-deep)', color: 'var(--cream)', borderRadius: 8, padding: 16, marginBottom: 10 }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.16em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>Mon 6 Oct · 10 AM – Noon</div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, fontWeight: 500, color: 'var(--cream)', marginBottom: 8 }}>Reading at home — the read-aloud habit</div>
                <div style={{ fontFamily: 'Lora', fontSize: 12, color: 'var(--gold-soft)', lineHeight: 1.5, opacity: .9 }}>
                  Session 4 of 12 · Reading corner, Block B · Childcare available
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                  <button style={{ background: 'var(--gold)', color: 'var(--maroon-deep)', border: 'none', padding: '7px 12px', borderRadius: 6, fontFamily: 'DM Sans', fontSize: 11, fontWeight: 600 }}>Mark attendance</button>
                  <button style={{ background: 'transparent', color: 'var(--gold-soft)', border: '1px solid rgba(201,169,97,.4)', padding: '7px 12px', borderRadius: 6, fontFamily: 'DM Sans', fontSize: 11 }}>Upload handout</button>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  ['Wed', 'Optional book-club drop-in · 4 PM', false],
                  ['Fri', 'Supervisor 1:1s · WhatsApp', false],
                  ['Sun', 'Homework due · Lap-read log', true],
                ].map(([d, l, due]) => (
                  <div key={l} style={{ display: 'grid', gridTemplateColumns: '36px 1fr auto', gap: 10, padding: '8px 0', alignItems: 'center' }}>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', color: 'var(--gold-deep,#B89651)', fontWeight: 700, textTransform: 'uppercase' }}>{d}</div>
                    <div style={{ fontFamily: 'Lora', fontSize: 12, color: 'var(--ink)' }}>{l}</div>
                    {due && <span style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--amber)', letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700 }}>DUE</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected mother card */}
            <div style={{ padding: '18px 22px' }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 14 }}>Focus · Maria Iqbal</div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,#8B6A1F,#C9A961)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 20 }}>MI</div>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 19, fontWeight: 600, color: 'var(--maroon-deep)' }}>Maria Iqbal</div>
                  <div style={{ fontFamily: 'Lora', fontSize: 11, color: 'var(--ink-soft)' }}>Mother of Daniyal · age 5 · KG2</div>
                </div>
                <span style={{ marginLeft: 'auto', background: '#FEF6E0', color: 'var(--amber)', padding: '3px 10px', borderRadius: 999, fontFamily: 'DM Sans', fontSize: 10, fontWeight: 600 }}>● Falling behind</span>
              </div>

              <div style={{ background: 'var(--cream-deep)', borderRadius: 8, padding: 14, marginBottom: 12, borderLeft: '3px solid var(--gold)' }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--maroon)', fontWeight: 700, marginBottom: 4 }}>Supervisor note · 3 Oct</div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 15, color: 'var(--maroon-deep)', lineHeight: 1.45 }}>
                  Maria missed week 3. Husband's mother is unwell — she's the primary caregiver right now. I sent her the recording; she replied she'll watch tonight.
                </div>
              </div>

              <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 700, marginBottom: 8 }}>This week's actions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  ['Send week 4 handout via WhatsApp', false],
                  ['Schedule a phone call before Friday', false],
                  ['Reduce homework load — short version', true],
                ].map(([l, done]) => (
                  <div key={l} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0' }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid var(--line)', background: done ? 'var(--maroon)' : 'white', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{done ? '✓' : ''}</div>
                    <div style={{ fontFamily: 'Lora', fontSize: 12, color: done ? 'var(--ink-soft)' : 'var(--ink)', textDecoration: done ? 'line-through' : 'none' }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, padding: '9px', background: 'var(--maroon)', color: 'var(--cream)', border: 'none', borderRadius: 6, fontFamily: 'DM Sans', fontSize: 11, fontWeight: 600, letterSpacing: '.04em' }}>Open full profile →</button>
                <button style={{ width: 38, height: 38, background: '#25D366', borderRadius: 6, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.whatsapp(16, '#fff')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

Object.assign(window, { CohortManager });
