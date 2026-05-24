// at-shared.jsx v3 — SharedNav (hamburger), SharedFooter, PageHero, Reveal, Label
// + useIsMobile hook + MobileCtx
const { useState:_us, useEffect:_ue, useRef:_ur, useContext:_uc, createContext:_cc } = React;

// ── Responsive ────────────────────────────────────────────────────────────────
function useIsMobile(bp = 768) {
  const [m, setM] = _us(() => window.innerWidth < bp);
  _ue(() => {
    const fn = () => setM(window.innerWidth < bp);
    window.addEventListener('resize', fn, { passive:true });
    return () => window.removeEventListener('resize', fn);
  }, [bp]);
  return m;
}
const MobileCtx = React.createContext(false);
function useMobile() { return React.useContext(MobileCtx); }

// ── Reveal ────────────────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = _ur(null);
  const [v, setV] = _us(false);
  _ue(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}
function Reveal({ children, delay=0, y=26 }) {
  const [ref, v] = useReveal();
  return (
    <div ref={ref} style={{ opacity:v?1:0, transform:v?'none':`translateY(${y}px)`,
      transition:`opacity .7s ${delay}s cubic-bezier(.22,1,.36,1), transform .7s ${delay}s cubic-bezier(.22,1,.36,1)` }}>
      {children}
    </div>
  );
}
function Label({ children, color='var(--amber)' }) {
  return (
    <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase',
      fontFamily:'DM Sans, sans-serif', fontWeight:500, color, marginBottom:16 }}>
      {children}
    </div>
  );
}

// ── Shared Nav ────────────────────────────────────────────────────────────────
function SharedNav({ lang, setLang, scrolled, activePage }) {
  const t = useT();
  const isMobile = useIsMobile();
  const [open, setOpen] = _us(false);

  const links = [
    { key:'about',          label:t.nav.about,         href:'./about.html' },
    { key:'production',     label:t.nav.production,    href:'./production.html' },
    { key:'sustainability', label:t.nav.sustainability, href:'./sustainability.html' },
    { key:'contact',        label:t.nav.contactPage,   href:'./contact.html' },
  ];

  const opaque = scrolled || open;
  const bg  = opaque ? 'rgba(248,245,240,0.97)' : 'transparent';
  const col = opaque ? 'var(--dark)' : 'white';
  const bdr = opaque ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.14)';

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:bg,
      borderBottom:bdr, backdropFilter:opaque?'blur(14px)':'none', transition:'background .3s, border-color .3s' }}>
      {/* Top bar */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${isMobile?'20px':'48px'}`,
        display:'flex', alignItems:'center', justifyContent:'space-between', height:isMobile?56:68 }}>
        <a href="./Actual Textiles Redesign.html" style={{ display:'flex', alignItems:'center' }}>
          <img src="https://www.actualtextiles.com/wp-content/uploads/2021/11/Actual-Textiles-LOGO.png"
            alt="Actual Textiles"
            style={{ height:isMobile?26:30, width:'auto',
              filter:opaque?'none':'brightness(0) invert(1)', transition:'filter .3s' }} />
        </a>

        {isMobile ? (
          <button onClick={() => setOpen(o => !o)} style={{ background:'none', border:'none',
            color:col, fontSize:20, cursor:'pointer', padding:'6px 8px', lineHeight:1, transition:'color .2s' }}>
            {open ? '✕' : '☰'}
          </button>
        ) : (
          <>
            <div style={{ display:'flex', gap:32, alignItems:'center' }}>
              {links.map(l => {
                const active = activePage === l.key;
                return (
                  <a key={l.key} href={l.href} style={{ fontSize:12, fontWeight:active?600:500,
                    letterSpacing:'0.09em', textTransform:'uppercase', color:col,
                    opacity:active?1:0.82, borderBottom:`1px solid ${active?(opaque?'var(--amber)':'rgba(255,255,255,.6)'):'transparent'}`,
                    paddingBottom:2, transition:'opacity .15s' }}
                    onMouseEnter={e=>e.currentTarget.style.opacity=1}
                    onMouseLeave={e=>e.currentTarget.style.opacity=active?1:0.82}
                  >{l.label}</a>
                );
              })}
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:22 }}>
              <div style={{ display:'flex', gap:10 }}>
                {['EN','FR'].map(lg => {
                  const active = (lang||'en').toUpperCase()===lg;
                  return (
                    <button key={lg} onClick={()=>setLang(lg.toLowerCase())} style={{ background:'none', border:'none',
                      cursor:'pointer', fontSize:11, fontWeight:active?600:400,
                      letterSpacing:'0.14em', color:col, opacity:active?1:0.4 }}>{lg}</button>
                  );
                })}
              </div>
              <a href="./contact.html" style={{ background:opaque?'var(--forest)':'rgba(255,255,255,.15)',
                border:opaque?'none':'1px solid rgba(255,255,255,.45)', color:'white',
                padding:'9px 20px', fontSize:11, fontWeight:600, letterSpacing:'0.12em',
                textTransform:'uppercase', transition:'all .2s', whiteSpace:'nowrap' }}>
                {t.nav.ctaBtn}
              </a>
            </div>
          </>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && open && (
        <div style={{ background:'var(--cream)', borderTop:'1px solid var(--border)',
          padding:'8px 20px 24px', animation:'fadeIn .2s ease' }}>
          {links.map(l => {
            const active = activePage === l.key;
            return (
              <a key={l.key} href={l.href} onClick={()=>setOpen(false)} style={{
                display:'flex', justifyContent:'space-between', alignItems:'center',
                padding:'15px 0', fontSize:16, fontWeight:active?600:400,
                color:active?'var(--amber)':'var(--dark)',
                borderBottom:'1px solid var(--border)' }}>
                {l.label}
                <span style={{ fontSize:14, opacity:.4 }}>→</span>
              </a>
            );
          })}
          <div style={{ marginTop:20, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ display:'flex', gap:18 }}>
              {['EN','FR'].map(lg => {
                const active = (lang||'en').toUpperCase()===lg;
                return (
                  <button key={lg} onClick={()=>{setLang(lg.toLowerCase());setOpen(false);}} style={{
                    background:'none', border:'none', cursor:'pointer', padding:0,
                    fontSize:13, fontWeight:active?700:400, color:'var(--dark)',
                    opacity:active?1:0.4, letterSpacing:'0.1em' }}>{lg}</button>
                );
              })}
            </div>
            <a href="./contact.html" onClick={()=>setOpen(false)} style={{ background:'var(--forest)',
              color:'white', padding:'11px 22px', fontSize:11, fontWeight:600,
              letterSpacing:'0.12em', textTransform:'uppercase' }}>{t.nav.ctaBtn}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Page Hero ─────────────────────────────────────────────────────────────────
function PageHero({ label, title, titleItalic, imgSrc, breadcrumb }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ position:'relative', height:isMobile?'45vh':'52vh', minHeight:isMobile?280:360, overflow:'hidden' }}>
      <img src={imgSrc} alt={title} style={{ position:'absolute', inset:0,
        width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%', filter:'brightness(.4)' }} />
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(160deg,rgba(14,26,18,.8) 0%,rgba(14,26,18,.38) 100%)' }} />
      <div style={{ position:'relative', zIndex:2, maxWidth:1280, margin:'0 auto',
        padding:`0 ${isMobile?'20px':'48px'}`, height:'100%',
        display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingBottom:isMobile?40:64 }}>
        {breadcrumb && (
          <div style={{ fontSize:10.5, letterSpacing:'0.15em', textTransform:'uppercase',
            color:'rgba(255,255,255,.42)', marginBottom:16 }}>{breadcrumb}</div>
        )}
        <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase',
          color:'var(--amber)', marginBottom:14, display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ width:24, height:1, background:'currentColor', display:'inline-block' }} />
          {label}
        </div>
        <h1 style={{ fontFamily:'Cormorant Garamond, serif',
          fontSize:`clamp(${isMobile?'34px':'42px'},5vw,72px)`,
          fontWeight:300, color:'white', lineHeight:1.05, letterSpacing:'-0.02em' }}>
          {title}{titleItalic && <><br /><em style={{ fontStyle:'italic' }}>{titleItalic}</em></>}
        </h1>
      </div>
    </div>
  );
}

// ── Shared Footer ─────────────────────────────────────────────────────────────
function SharedFooter() {
  const t = useT();
  const ft = t.footer;
  const m = useMobile();
  return (
    <footer style={{ background:'var(--dark)', color:'white', padding:m?'56px 0 32px':'72px 0 36px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${m?'20px':'48px'}` }}>
        <div style={{ display:'grid', gridTemplateColumns:m?'1fr':'1.4fr 1fr 1fr 1fr 1fr',
          gap:m?40:44, marginBottom:m?44:60 }}>
          <div>
            <img src="https://www.actualtextiles.com/wp-content/uploads/2021/11/Actual-Textiles-LOGO.png"
              alt="Actual Textiles"
              style={{ height:34, width:'auto', filter:'brightness(0) invert(1)', marginBottom:20 }} />
            <p style={{ fontSize:13, lineHeight:1.75, opacity:.5, marginBottom:20, maxWidth:240 }}>{ft.tagline}</p>
            <div style={{ fontSize:12.5, opacity:.42, lineHeight:2.1 }}>
              <div>Ambohipanja Ilafy, Tana 103</div>
              <div>Antananarivo, Madagascar</div>
              <div style={{ marginTop:4 }}>+261 20 23 277 66</div>
              <div>info@actualtextiles.com</div>
            </div>
          </div>
          {m ? (
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
              {ft.cols.map((col,i) => (
                <div key={i}>
                  <div style={{ fontSize:9.5, letterSpacing:'0.18em', textTransform:'uppercase', opacity:.35, marginBottom:14 }}>{col.title}</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                    {col.links.map((l,j) => (
                      <a key={j} href={l.href} style={{ fontSize:13, opacity:.6, color:'white', textDecoration:'none' }}>{l.label}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ft.cols.map((col,i) => (
              <div key={i}>
                <div style={{ fontSize:9.5, letterSpacing:'0.18em', textTransform:'uppercase', opacity:.35, marginBottom:18 }}>{col.title}</div>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {col.links.map((l,j) => (
                    <a key={j} href={l.href} style={{ fontSize:13, opacity:.6, color:'white', textDecoration:'none', transition:'opacity .15s' }}
                      onMouseEnter={e=>e.currentTarget.style.opacity=1}
                      onMouseLeave={e=>e.currentTarget.style.opacity=0.6}>{l.label}</a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,.1)', paddingTop:24,
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
          <div style={{ fontSize:11, opacity:.28 }}>{ft.copyright}</div>
          <div style={{ display:'flex', gap:18 }}>
            {['LinkedIn','Facebook'].map(s => (
              <a key={s} href="#" style={{ fontSize:11, opacity:.38, color:'white', textDecoration:'none' }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useIsMobile, MobileCtx, useMobile, useReveal, Reveal, Label, SharedNav, SharedFooter, PageHero });
