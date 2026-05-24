// at-sections.jsx v3 — Home sections, bilingual + responsive via useMobile()

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const t = useT(); const m = useMobile();
  return (
    <div style={{ background:'var(--forest)', color:'white' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${m?'20px':'48px'}`,
        display:'grid', gridTemplateColumns:m?'1fr 1fr':'repeat(4,1fr)' }}>
        {t.stats.map((s,i) => (
          <div key={i} style={{ textAlign:'center', padding:m?'28px 0':'36px 0',
            borderRight:(!m&&i<3)?'1px solid rgba(255,255,255,.12)':'none',
            borderBottom:(m&&i<2)?'1px solid rgba(255,255,255,.12)':'none' }}>
            <div style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?38:50,
              fontWeight:300, lineHeight:1, letterSpacing:'-0.02em' }}>{s.n}</div>
            <div style={{ fontSize:10, fontWeight:500, letterSpacing:'0.14em',
              textTransform:'uppercase', marginTop:6, opacity:.55 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  const t = useT(); const a = t.about; const m = useMobile();
  return (
    <section id="about" style={{ padding:`${m?'70px':'120px'} 0`, background:'var(--cream)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${m?'20px':'48px'}`,
        display:'grid', gridTemplateColumns:m?'1fr':'1fr 1fr', gap:m?48:96, alignItems:'center' }}>
        <Reveal>
          <div style={{ position:'relative' }}>
            <img src="https://www.actualtextiles.com/wp-content/uploads/2021/11/Madagascar_actual_textiles-min.jpg"
              alt="Madagascar" style={{ width:'100%', height:m?300:560, objectFit:'cover', objectPosition:'center 32%' }} />
            <div style={{ position:'absolute', bottom:m?-18:-26, right:m?-10:-26,
              background:'var(--amber)', color:'white', padding:m?'14px 18px':'20px 28px', zIndex:2 }}>
              <div style={{ fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', opacity:.78, marginBottom:3 }}>Est.</div>
              <div style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?28:38, fontWeight:300, lineHeight:1 }}>2002</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={m?0:0.14}>
          <div>
            <Label>{a.label}</Label>
            <h2 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?36:52,
              fontWeight:400, lineHeight:1.08, marginBottom:24, letterSpacing:'-0.01em' }}>
              {a.title1}<br /><em>{a.titleItalic}</em><br />{a.title2}
            </h2>
            <p style={{ fontSize:15, lineHeight:1.78, color:'var(--mid)', marginBottom:16 }}>{a.p1}</p>
            <p style={{ fontSize:15, lineHeight:1.78, color:'var(--mid)', marginBottom:28 }}>{a.p2}</p>
            <div style={{ borderTop:'1px solid var(--border)', paddingTop:22, marginBottom:28 }}>
              <div style={{ fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase',
                color:'var(--mid)', marginBottom:10 }}>{a.trusted}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px 16px' }}>
                {['Petit Bateau','Jacadi','Etam','Princesse Tam Tam','Obaibi','Truworths','Natalys'].map(b => (
                  <span key={b} style={{ fontFamily:'Cormorant Garamond, serif', fontSize:16,
                    fontWeight:500, letterSpacing:'0.04em', color:'var(--dark)' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="./production.html" style={{ background:'var(--dark)', color:'white',
                padding:'12px 24px', fontSize:11, fontWeight:500, letterSpacing:'0.1em',
                textTransform:'uppercase', display:'inline-block' }}>{a.cta1}</a>
              <a href="./sustainability.html" style={{ border:'1px solid var(--dark)', color:'var(--dark)',
                padding:'12px 24px', fontSize:11, fontWeight:500, letterSpacing:'0.1em',
                textTransform:'uppercase', display:'inline-block' }}>{a.cta2}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Production Section ────────────────────────────────────────────────────────
const PROD_IMGS = [
  'https://www.actualtextiles.com/wp-content/uploads/2021/11/developpement_produits.jpg',
  'https://www.actualtextiles.com/wp-content/uploads/2021/11/confection_vetements.jpg',
  'https://www.actualtextiles.com/wp-content/uploads/2021/11/departement-de_coupe.jpg',
  'https://www.actualtextiles.com/wp-content/uploads/2021/11/departement_couture.jpg',
  'https://www.actualtextiles.com/wp-content/uploads/2021/11/controle_qualite-min.jpg',
  'https://www.actualtextiles.com/wp-content/uploads/2021/11/departement_logistique.jpg',
];

function ProductionSection() {
  const t = useT(); const p = t.production; const m = useMobile();
  const [active, setActive] = React.useState(0);
  return (
    <section id="production" style={{ background:'var(--stone)', padding:`${m?'70px':'120px'} 0` }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${m?'20px':'48px'}` }}>
        <Reveal>
          <Label>{p.label}</Label>
          <h2 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?34:52,
            fontWeight:400, lineHeight:1.08, marginBottom:m?36:60, letterSpacing:'-0.01em', maxWidth:460 }}>
            {p.title1}<br /><em>{p.titleItalic}</em>
          </h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:m?'1fr':'1fr 1.1fr', gap:m?32:64, alignItems:'start' }}>
          <div style={{ display:'flex', flexDirection:m?'row':'column', flexWrap:m?'wrap':'nowrap', gap:m?2:0 }}>
            {p.steps.map((s,i) => (
              <button key={i} onClick={()=>setActive(i)} style={{
                background:active===i?'white':'none', border:'none', cursor:'pointer',
                textAlign:'left', padding:m?'12px 14px':'19px 22px',
                borderLeft:m?'none':`3px solid ${active===i?'var(--amber)':'transparent'}`,
                borderBottom:m?`2px solid ${active===i?'var(--amber)':'transparent'}`:'none',
                transition:'all .2s', display:'flex', alignItems:'center', gap:14,
                flex:m?'1 1 calc(33% - 2px)':'none', minWidth:m?0:'auto',
              }}>
                <span style={{ fontFamily:'Cormorant Garamond, serif', fontSize:18, fontWeight:300,
                  color:active===i?'var(--amber)':'var(--mid)', minWidth:26 }}>{s.num}</span>
                <span style={{ fontSize:13, fontWeight:active===i?500:400,
                  color:active===i?'var(--dark)':'var(--mid)', letterSpacing:'0.01em', lineHeight:1.3 }}>{s.title}</span>
              </button>
            ))}
          </div>
          <div key={active} style={{ animation:'fadeIn .35s ease' }}>
            <img src={PROD_IMGS[active]} alt={p.steps[active].title} loading="lazy"
              style={{ width:'100%', height:m?220:300, objectFit:'cover', marginBottom:22 }} />
            <div style={{ fontSize:10.5, letterSpacing:'0.17em', textTransform:'uppercase',
              color:'var(--amber)', marginBottom:8 }}>{p.stepLabel} {p.steps[active].num}</div>
            <h3 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?24:30,
              fontWeight:400, marginBottom:12 }}>{p.steps[active].title}</h3>
            <p style={{ fontSize:14.5, lineHeight:1.75, color:'var(--mid)', marginBottom:20 }}>{p.steps[active].desc}</p>
            <a href="./production.html" style={{ fontSize:12, fontWeight:500, letterSpacing:'0.1em',
              textTransform:'uppercase', color:'var(--forest)',
              borderBottom:'1px solid var(--forest)', paddingBottom:2 }}>
              {useLang()==='fr'?'Voir toute la production →':'Full production details →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sustainability Section ────────────────────────────────────────────────────
function SustainabilitySection() {
  const t = useT(); const s = t.sustainability; const m = useMobile();
  const [hov, setHov] = React.useState(null);
  const imgs = [
    'https://www.actualtextiles.com/wp-content/uploads/2021/11/Environnement-5.jpg',
    'https://www.actualtextiles.com/wp-content/uploads/2022/07/RAF_2e-114-copie-scaled.jpg',
    'https://www.actualtextiles.com/wp-content/uploads/2021/11/Sociale-chez-Actual-textiles.jpg',
  ];
  return (
    <section id="sustainability" style={{ background:'var(--forest)', color:'white', padding:`${m?'70px':'120px'} 0` }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${m?'20px':'48px'}` }}>
        <Reveal>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
            marginBottom:m?44:68, flexWrap:'wrap', gap:20 }}>
            <div>
              <Label color="rgba(255,255,255,.45)">{s.label}</Label>
              <h2 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?34:52,
                fontWeight:400, lineHeight:1.08, letterSpacing:'-0.01em' }}>
                {s.title1}<br /><em>{s.titleItalic}</em>
              </h2>
            </div>
            {!m && <p style={{ maxWidth:360, fontSize:14.5, lineHeight:1.78, opacity:.65 }}>{s.intro}</p>}
          </div>
          {m && <p style={{ fontSize:14.5, lineHeight:1.75, opacity:.65, marginBottom:36 }}>{s.intro}</p>}
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:m?'1fr':'repeat(3,1fr)', gap:m?16:3 }}>
          {s.pillars.map((p,i) => (
            <Reveal key={i} delay={m?0:i*.1}>
              <div onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
                style={{ position:'relative', overflow:'hidden' }}>
                <img src={imgs[i]} alt={p.label} loading="lazy"
                  style={{ width:'100%', height:m?280:400, objectFit:'cover', display:'block',
                    filter:`brightness(${m?0.45:0.38})`, transition:'filter .4s, transform .6s',
                    transform:(!m&&hov===i)?'scale(1.04)':'scale(1)' }} />
                <div style={{ position:'absolute', inset:0, padding:m?'24px 20px':32,
                  display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ fontSize:24, marginBottom:8 }}>{p.icon}</div>
                  <div style={{ fontSize:9.5, letterSpacing:'0.2em', textTransform:'uppercase',
                    marginBottom:8, opacity:.6 }}>{p.label}</div>
                  <h3 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?22:25,
                    fontWeight:400, marginBottom:10, lineHeight:1.2 }}>{p.headline}</h3>
                  <p style={{ fontSize:13.5, lineHeight:1.68,
                    opacity:(m||hov===i)?0.82:0,
                    transform:(m||hov===i)?'none':'translateY(10px)',
                    transition:'opacity .3s, transform .3s' }}>{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div style={{ textAlign:'center', marginTop:m?36:44 }}>
            <a href="./sustainability.html" style={{ display:'inline-block',
              border:'1px solid rgba(255,255,255,.35)', color:'white',
              padding:'12px 30px', fontSize:11, fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              {useLang()==='fr'?'Voir tous nos engagements →':'See all commitments →'}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Certifications ────────────────────────────────────────────────────────────
const CERTS = [
  { name:'GOTS', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/LOGO-GOTS-A-JOUR-1024x1015.png' },
  { name:'OCS Ecocert', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/Organic-100.png' },
  { name:'WRAP', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/wrap_logo.jpg' },
  { name:'amfori BSCI', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/Business-Social-Compliance.png' },
  { name:'SMETA/Sedex', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/SMETA.png' },
  { name:'GSV Intertek', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/Global-security-verification.png' },
  { name:'ICS', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/ICS.png' },
  { name:'AGOA', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/agoa_logo.jpg' },
  { name:'Disney', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/Authorized-Disney.png' },
  { name:'Lectra', src:'https://www.actualtextiles.com/wp-content/uploads/2024/10/Lectra.png' },
];

function CertificationsSection() {
  const t = useT(); const c = t.certs; const m = useMobile();
  return (
    <section id="certifications" style={{ background:'var(--cream)', padding:`${m?'70px':'100px'} 0` }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:`0 ${m?'20px':'48px'}` }}>
        <Reveal>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
            marginBottom:m?36:52, flexWrap:'wrap', gap:20 }}>
            <div>
              <Label>{c.label}</Label>
              <h2 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?34:52,
                fontWeight:400, lineHeight:1.08, letterSpacing:'-0.01em' }}>
                {c.title1}<br /><em>{c.titleItalic}</em>
              </h2>
            </div>
            {!m && <p style={{ maxWidth:320, fontSize:14.5, lineHeight:1.75, color:'var(--mid)' }}>{c.body}</p>}
          </div>
          {m && <p style={{ fontSize:14.5, lineHeight:1.75, color:'var(--mid)', marginBottom:28 }}>{c.body}</p>}
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:m?'1fr 1fr 1fr':'repeat(5,1fr)', gap:2 }}>
          {CERTS.map((cert,i) => (
            <Reveal key={i} delay={i*.04}>
              <div style={{ background:'white', padding:m?'18px 12px':'26px 18px',
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                gap:10, minHeight:m?90:112 }}>
                <img src={cert.src} alt={cert.name} loading="lazy"
                  style={{ height:m?36:46, width:'auto', maxWidth:m?70:88, objectFit:'contain' }}
                  onError={e=>{e.target.style.display='none';}} />
                <span style={{ fontSize:9, letterSpacing:'0.13em', textTransform:'uppercase',
                  color:'var(--mid)', textAlign:'center', lineHeight:1.3 }}>{cert.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  const t = useT(); const c = t.cta; const m = useMobile();
  return (
    <section style={{ background:'var(--amber)', color:'white',
      padding:m?'64px 20px':'80px 48px', textAlign:'center' }}>
      <Reveal>
        <div style={{ maxWidth:640, margin:'0 auto' }}>
          <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase',
            marginBottom:16, opacity:.7 }}>{c.label}</div>
          <h2 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:m?34:50,
            fontWeight:400, lineHeight:1.1, marginBottom:22, letterSpacing:'-0.01em' }}>
            {c.title1}<br /><em>{c.titleItalic}</em>
          </h2>
          <p style={{ fontSize:15, lineHeight:1.75, marginBottom:32, opacity:.85 }}>{c.body}</p>
          <a href="./contact.html" style={{ background:'white', color:'var(--amber)',
            padding:'14px 38px', fontSize:11, fontWeight:600,
            letterSpacing:'0.12em', textTransform:'uppercase', display:'inline-block' }}>{c.btn}</a>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { StatsBar, AboutSection, ProductionSection, SustainabilitySection, CertificationsSection, CTABanner });
