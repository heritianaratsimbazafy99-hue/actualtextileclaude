// at-shared.jsx — SharedNav, SharedFooter, Reveal, Label, useReveal
// Requires: at-i18n.jsx loaded first (provides LangCtx, useT)

const { useState: _useState, useEffect: _useEffect, useRef: _useRef } = React;

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = _useRef(null);
  const [visible, setVisible] = _useState(false);
  _useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, y = 28 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity .75s ${delay}s cubic-bezier(.22,1,.36,1), transform .75s ${delay}s cubic-bezier(.22,1,.36,1)`,
    }}>{children}</div>
  );
}

function Label({ children, color = 'var(--amber)' }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
      fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color, marginBottom: 18 }}>
      {children}
    </div>
  );
}

// ── Shared Nav ────────────────────────────────────────────────────────────────
function SharedNav({ lang, setLang, scrolled, activePage }) {
  const t = useT();
  const [mobileOpen, setMobileOpen] = _useState(false);
  const navLinks = [
    { key: 'about',          label: t.nav.about,          href: './about.html' },
    { key: 'production',     label: t.nav.production,     href: './production.html' },
    { key: 'sustainability', label: t.nav.sustainability,  href: './sustainability.html' },
    { key: 'news',           label: t.nav.news,            href: 'https://www.actualtextiles.com/news/' },
  ];

  _useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navSolid = scrolled || mobileOpen;
  const bg     = navSolid ? 'rgba(248,245,240,0.97)' : 'transparent';
  const border = navSolid ? '1px solid var(--border)'  : '1px solid rgba(255,255,255,0.15)';
  const col    = navSolid ? 'var(--dark)' : 'white';

  return (
    <nav className={`at-nav ${mobileOpen ? 'is-open' : ''}`} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: bg, borderBottom: border,
      backdropFilter: navSolid ? 'blur(12px)' : 'none',
      transition: 'background .35s, border-color .35s',
    }}>
      <div className="at-nav-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a className="at-nav-logo" href="./index.html" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://www.actualtextiles.com/wp-content/uploads/2021/11/Actual-Textiles-LOGO.png"
            alt="Actual Textiles"
            style={{ height: 30, width: 'auto', filter: navSolid ? 'none' : 'brightness(0) invert(1)', transition: 'filter .35s' }}
          />
        </a>

        {/* Links */}
        <div className="at-nav-links" style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
          {navLinks.map(l => {
            const isActive = activePage === l.key;
            return (
              <a key={l.key} href={l.href} style={{
                fontSize: 12, fontWeight: isActive ? 600 : 500,
                letterSpacing: '0.09em', textTransform: 'uppercase',
                color: col, opacity: isActive ? 1 : 0.8,
                borderBottom: isActive ? `1px solid ${scrolled ? 'var(--amber)' : 'rgba(255,255,255,0.7)'}` : '1px solid transparent',
                paddingBottom: 2, transition: 'opacity .15s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = isActive ? 1 : 0.8}
              >{l.label}</a>
            );
          })}
        </div>

        {/* Lang + CTA */}
        <div className="at-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div className="at-lang-switch" style={{ display: 'flex', gap: 10 }}>
            {['EN','FR'].map(lg => {
              const isActive = (lang || 'en').toUpperCase() === lg;
              return (
                <button key={lg} onClick={() => setLang(lg.toLowerCase())} style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  fontSize: 11, fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.14em', color: col, opacity: isActive ? 1 : 0.4,
                }}>{lg}</button>
              );
            })}
          </div>
          <a className="at-nav-contact" href="mailto:info@actualtextiles.com" style={{
            background: scrolled ? 'var(--forest)' : 'rgba(255,255,255,0.15)',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.5)',
            color: 'white', padding: '9px 20px',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            transition: 'all .25s', whiteSpace: 'nowrap',
          }}>{t.nav.contact}</a>
        </div>

        <button
          className="at-nav-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
          style={{
            display: 'none',
            width: 42,
            height: 42,
            border: '1px solid rgba(255,255,255,0.45)',
            background: 'rgba(255,255,255,0.12)',
            color: col,
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={{ width: 18, height: 1, background: 'currentColor', display: 'block', transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none', transition: 'transform .2s' }} />
          <span style={{ width: 18, height: 1, background: 'currentColor', display: 'block', opacity: mobileOpen ? 0 : 1, transition: 'opacity .2s' }} />
          <span style={{ width: 18, height: 1, background: 'currentColor', display: 'block', transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transition: 'transform .2s' }} />
        </button>
      </div>
      <div className="at-nav-mobile-panel" hidden={!mobileOpen}>
        {navLinks.map(l => {
          const isActive = activePage === l.key;
          return (
            <a key={l.key} href={l.href} onClick={() => setMobileOpen(false)}
              className={isActive ? 'is-active' : ''}>{l.label}</a>
          );
        })}
        <div className="at-nav-mobile-tools">
          {['EN','FR'].map(lg => {
            const isActive = (lang || 'en').toUpperCase() === lg;
            return (
              <button key={lg} type="button" className={isActive ? 'is-active' : ''}
                onClick={() => { setLang(lg.toLowerCase()); setMobileOpen(false); }}>{lg}</button>
            );
          })}
          <a href="mailto:info@actualtextiles.com" onClick={() => setMobileOpen(false)}>{t.nav.contact}</a>
        </div>
      </div>
    </nav>
  );
}

// ── Page Hero (internal pages) ────────────────────────────────────────────────
function PageHero({ label, title, titleItalic, imgSrc, breadcrumb }) {
  return (
    <div className="at-page-hero" style={{ position: 'relative', height: '52vh', minHeight: 380, overflow: 'hidden' }}>
      <img src={imgSrc} alt={title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 40%', filter: 'brightness(0.42)' }}
      />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg,rgba(14,26,18,.78) 0%,rgba(14,26,18,.4) 100%)' }} />
      <div className="at-page-hero-inner" style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto',
        padding: '0 48px', height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', paddingBottom: 64 }}>
        {breadcrumb && (
          <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>{breadcrumb}</div>
        )}
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--amber)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 28, height: 1, background: 'currentColor', display: 'inline-block' }} />
          {label}
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px,5vw,72px)',
          fontWeight: 300, color: 'white', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          {title}{titleItalic && <><br /><em style={{ fontStyle: 'italic' }}>{titleItalic}</em></>}
        </h1>
      </div>
    </div>
  );
}

// ── Shared Footer ─────────────────────────────────────────────────────────────
function SharedFooter() {
  const t = useT();
  const ft = t.footer;
  return (
    <footer className="at-footer" style={{ background: 'var(--dark)', color: 'white', padding: '72px 0 36px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <div className="at-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 44, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <img src="https://www.actualtextiles.com/wp-content/uploads/2021/11/Actual-Textiles-LOGO.png"
              alt="Actual Textiles"
              style={{ height: 36, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 22 }}
            />
            <p style={{ fontSize: 13.5, lineHeight: 1.75, opacity: 0.5, marginBottom: 22, maxWidth: 230 }}>{ft.tagline}</p>
            <div style={{ fontSize: 13, opacity: 0.45, lineHeight: 2.1 }}>
              <div>Ambohipanja Ilafy, Tana 103</div>
              <div>Antananarivo, Madagascar</div>
              <div style={{ marginTop: 6 }}>+261 20 23 277 66</div>
              <div>info@actualtextiles.com</div>
            </div>
          </div>
          {ft.cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                opacity: 0.38, marginBottom: 18 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((l, j) => (
                  <a key={j} href={l.href} style={{ fontSize: 13.5, opacity: 0.6, color: 'white',
                    textDecoration: 'none', transition: 'opacity .15s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 26,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: 11.5, opacity: 0.3 }}>{ft.copyright}</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="https://www.linkedin.com/company/actual-textiles" style={{ fontSize: 11, opacity: 0.4, color: 'white', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://www.facebook.com" style={{ fontSize: 11, opacity: 0.4, color: 'white', textDecoration: 'none' }}>Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useReveal, Reveal, Label, SharedNav, SharedFooter, PageHero });
