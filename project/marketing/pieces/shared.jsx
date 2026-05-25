// Shared atoms: school logo, lockup, eyebrow, photo, contact strip.
// Used across all marketing & mother training pieces.

// Path relative to the marketing HTML file (marketing/ directory)
const SCHOOL_LOGO = '../assets/logo-photo.png';

const PHOTOS = {
  motherChild: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
  classroom:   'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  reading:     'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  garden:      'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?auto=format&fit=crop&w=1200&q=80',
  bus:         'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80',
  daycare:     'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=1200&q=80',
  kg:          'https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=1200&q=80',
  campus:      'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&w=1600&q=80',
  motherClass: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80',
  read:        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
};

// G medallion — `size` is overall diameter.
function GMedal({ size = 80, variant = 'maroon', showStar = true, showTicks = true, style }) {
  const cls = 'gds-medallion' + (variant === 'gold' ? ' gold-on-dark' : variant === 'outline' ? ' outline' : '');
  return (
    <div className={cls} style={{ width: size, height: size, fontSize: size * 0.58, ...style }}>
      {showStar && <span className="gds-star">★</span>}
      G
      {showTicks && <span className="gds-ticks">··</span>}
    </div>
  );
}

// Horizontal wordmark lockup — uses the actual school logo photo (with children iconography)
function Lockup({ size = 1, onDark = false, showEst = true, style }) {
  const logoSize = 64 * size;
  return (
    <div className={'gds-lockup' + (onDark ? ' on-dark' : '')} style={style}>
      <img src={SCHOOL_LOGO} alt="Good Day School"
        style={{ width: logoSize, height: logoSize, objectFit: 'contain', flexShrink: 0,
          filter: onDark ? 'drop-shadow(0 2px 6px rgba(0,0,0,.45))' : 'none' }} />
      <div className="gds-words">
        <div className="gds-name" style={{ fontSize: 22 * size }}>GOOD DAY</div>
        <div className="gds-div" style={{ width: 70 * size }}></div>
        <div className="gds-school" style={{ fontSize: 9 * size }}>SCHOOL</div>
        {showEst && <div className="gds-est" style={{ fontSize: 7 * size }}>EST · 2001 · RAWALPINDI</div>}
      </div>
    </div>
  );
}

// Stacked vertical wordmark (for narrow places) — uses the actual school logo photo
function LockupStacked({ size = 1, onDark = false }) {
  const logoSize = 80 * size;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: onDark ? 'var(--cream)' : 'var(--maroon-deep)' }}>
      <img src={SCHOOL_LOGO} alt="Good Day School"
        style={{ width: logoSize, height: logoSize, objectFit: 'contain',
          filter: onDark ? 'drop-shadow(0 2px 8px rgba(0,0,0,.5))' : 'none' }} />
      <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 24 * size, fontWeight: 600, letterSpacing: '.04em', marginTop: 14 * size, lineHeight: 1 }}>GOOD DAY</div>
      <div style={{ height: 1, background: 'var(--gold)', width: 60 * size, margin: `${6 * size}px 0` }}></div>
      <div style={{ fontFamily: 'DM Sans', fontSize: 10 * size, letterSpacing: '.4em', color: onDark ? 'var(--gold-soft)' : 'var(--ink-soft)' }}>SCHOOL</div>
    </div>
  );
}

// Eyebrow ("THE COLOUR OF…")
function Eyebrow({ children, onDark = false, bookended = false, style }) {
  return <div className={'gds-eyebrow' + (onDark ? ' on-dark' : '') + (bookended ? ' bookended' : '')} style={style}>{children}</div>;
}

// CTA pill / arrow
function CTAPill({ children, gold = false, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '12px 22px', borderRadius: 6,
      background: gold ? 'var(--gold)' : 'var(--maroon)',
      color: gold ? 'var(--maroon-deep)' : 'var(--cream)',
      fontFamily: 'DM Sans', fontSize: 13, fontWeight: 600, letterSpacing: '.05em',
      ...style,
    }}>{children}</span>
  );
}

// Photo / placeholder pane
function Photo({ src, alt, ratio, caption, style, children }) {
  const bg = src ? `url(${src})` : 'linear-gradient(135deg,#8B6750,#4A1313 70%)';
  return (
    <div className="gds-photo" style={{ backgroundImage: bg, ...style }}>
      {caption && <div style={{ position: 'absolute', bottom: 10, left: 14, fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(232,217,181,.85)' }}>{caption}</div>}
      {children}
    </div>
  );
}

// Print bleed marks — 4 corners
function BleedMarks() {
  return (
    <>
      <span className="gds-bleed tl"></span>
      <span className="gds-bleed tr"></span>
      <span className="gds-bleed bl"></span>
      <span className="gds-bleed br"></span>
    </>
  );
}

// Footer contact strip
function ContactStrip({ onDark = false, compact = false, style }) {
  const c = onDark ? 'var(--gold-soft)' : 'var(--ink-soft)';
  const accent = onDark ? 'var(--gold)' : 'var(--maroon)';
  const items = [
    ['Visit',     'Farmhouse Campus,\nRawalpindi'],
    ['Call',      '+92 51 555 0001'],
    ['WhatsApp',  '+92 300 555 0001'],
    ['Online',    'gooddayschool.pk\nadmissions@gooddayschool.pk'],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: compact ? 12 : 20, ...style }}>
      {items.map(([k, v]) => (
        <div key={k}>
          <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.24em', textTransform: 'uppercase', color: accent, fontWeight: 600, marginBottom: 5 }}>{k}</div>
          <div style={{ fontFamily: 'DM Sans', fontSize: compact ? 10 : 11, color: c, lineHeight: 1.45, whiteSpace: 'pre-line' }}>{v}</div>
        </div>
      ))}
    </div>
  );
}

// Tiny inline icon set used across pieces
const Icon = {
  whatsapp: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01a9.84 9.84 0 0 0-7.01-2.92zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.55 3.71-8.25 8.27-8.25 2.21 0 4.28.86 5.84 2.42a8.22 8.22 0 0 1 2.42 5.83c0 4.56-3.71 8.26-8.27 8.26zm4.53-6.18c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.55.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.41-.42-.55-.42l-.47-.01a.91.91 0 0 0-.66.31c-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>
  ),
  phone: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
  ),
  pin: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  qr: (s = 64) => (
    <svg width={s} height={s} viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#fff"/>
      {Array.from({ length: 8 }).flatMap((_, r) =>
        Array.from({ length: 8 }).map((_, c) => {
          const pat = (r*7+c*3+r*c)%5===0 || (r<3&&c<3)||(r<3&&c>4)||(r>4&&c<3);
          return pat ? <rect key={r+'-'+c} x={c*8} y={r*8} width="7" height="7" fill="#2A1A1A"/> : null;
        })
      )}
      <rect x="0" y="0" width="23" height="23" fill="none" stroke="#2A1A1A" strokeWidth="3"/>
      <rect x="8" y="8" width="7" height="7" fill="#2A1A1A"/>
      <rect x="41" y="0" width="23" height="23" fill="none" stroke="#2A1A1A" strokeWidth="3"/>
      <rect x="49" y="8" width="7" height="7" fill="#2A1A1A"/>
      <rect x="0" y="41" width="23" height="23" fill="none" stroke="#2A1A1A" strokeWidth="3"/>
      <rect x="8" y="49" width="7" height="7" fill="#2A1A1A"/>
    </svg>
  ),
  arrow: (s = 14, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  ),
  star: (s = 14, c = 'var(--gold)') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,17 5.5,21 7.5,13.5 2,9 9,9"/></svg>
  ),
};

// Decorative arc (used as section divider on print)
function GoldRule({ style }) {
  return <div style={{ height: 1, background: 'linear-gradient(90deg,transparent 0%, var(--gold) 20%, var(--gold) 80%, transparent 100%)', ...style }}></div>;
}

Object.assign(window, { GMedal, Lockup, LockupStacked, Eyebrow, CTAPill, Photo, BleedMarks, ContactStrip, Icon, GoldRule, PHOTOS });
