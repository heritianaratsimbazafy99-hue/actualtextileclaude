// at-sections.jsx v2 — Home page sections, bilingual via useT()
// Requires: at-i18n.jsx + at-shared.jsx loaded first

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const t = useT();
  return (
    <div style={{ background: 'var(--forest)', color: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px',
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {t.stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '36px 0',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 50,
              fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.n}</div>
            <div style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: '0.15em',
              textTransform: 'uppercase', marginTop: 8, opacity: 0.6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  const t = useT();
  const a = t.about;
  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
        <Reveal>
          <div style={{ position: 'relative' }}>
            <img
              src="https://www.actualtextiles.com/wp-content/uploads/2021/11/Madagascar_actual_textiles-min.jpg"
              alt="Madagascar"
              style={{ width: '100%', height: 580, objectFit: 'cover', objectPosition: 'center 30%' }}
              loading="lazy"
            />
            <div style={{ position: 'absolute', bottom: -28, right: -28, background: 'var(--amber)',
              color: 'white', padding: '22px 30px', zIndex: 2 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                marginBottom: 5, opacity: 0.8 }}>Est.</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 40,
                fontWeight: 300, lineHeight: 1 }}>2002</div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                marginTop: 8, opacity: 0.75 }}>Antananarivo</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <Label>{a.label}</Label>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 54,
              fontWeight: 400, lineHeight: 1.08, marginBottom: 32, letterSpacing: '-0.01em' }}>
              {a.title1}<br /><em>{a.titleItalic}</em><br />{a.title2}
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: 'var(--mid)', marginBottom: 18 }}>{a.p1}</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: 'var(--mid)', marginBottom: 32 }}>{a.p2}</p>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 26, marginBottom: 32 }}>
              <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--mid)', marginBottom: 12 }}>{a.trusted}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 18px' }}>
                {['Petit Bateau','Jacadi','Etam','Princesse Tam Tam','Obaibi','Truworths','Natalys'].map(b => (
                  <span key={b} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17,
                    fontWeight: 500, letterSpacing: '0.04em', color: 'var(--dark)' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="./production.html" style={{ background: 'var(--dark)', color: 'white',
                padding: '13px 28px', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
                textTransform: 'uppercase', display: 'inline-block' }}>{a.cta1}</a>
              <a href="./sustainability.html" style={{ border: '1px solid var(--dark)', color: 'var(--dark)',
                padding: '13px 28px', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
                textTransform: 'uppercase', display: 'inline-block' }}>{a.cta2}</a>
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
  const t = useT();
  const p = t.production;
  const [active, setActive] = React.useState(0);
  return (
    <section id="production" style={{ background: 'var(--stone)', padding: '120px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <Reveal>
          <Label>{p.label}</Label>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 54,
            fontWeight: 400, lineHeight: 1.08, marginBottom: 64, letterSpacing: '-0.01em', maxWidth: 480 }}>
            {p.title1}<br /><em>{p.titleItalic}</em>
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {p.steps.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                background: active===i ? 'white' : 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', padding: '20px 24px',
                borderLeft: `3px solid ${active===i ? 'var(--amber)' : 'transparent'}`,
                transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 20,
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 300,
                  color: active===i ? 'var(--amber)' : 'var(--mid)', minWidth: 30 }}>{s.num}</span>
                <span style={{ fontSize: 14.5, fontWeight: active===i ? 500 : 400,
                  color: active===i ? 'var(--dark)' : 'var(--mid)', letterSpacing: '0.01em' }}>{s.title}</span>
              </button>
            ))}
          </div>
          <div key={`${active}-${useLang()}`} style={{ animation: 'fadeIn .4s ease' }}>
            <img src={PROD_IMGS[active]} alt={p.steps[active].title}
              style={{ width: '100%', height: 320, objectFit: 'cover', marginBottom: 26 }}
              loading="lazy"
            />
            <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--amber)', marginBottom: 10 }}>{p.stepLabel} {p.steps[active].num}</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30,
              fontWeight: 400, marginBottom: 14 }}>{p.steps[active].title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--mid)' }}>{p.steps[active].desc}</p>
            <a href="./production.html" style={{ display: 'inline-block', marginTop: 24, fontSize: 12,
              fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--forest)', borderBottom: '1px solid var(--forest)', paddingBottom: 2 }}>
              {useLang() === 'fr' ? 'Voir toute la production →' : 'Full production details →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sustainability Section ────────────────────────────────────────────────────
function SustainabilitySection() {
  const t = useT();
  const s = t.sustainability;
  const [hov, setHov] = React.useState(null);
  const pillarImgs = [
    'https://www.actualtextiles.com/wp-content/uploads/2021/11/Environnement-5.jpg',
    'https://www.actualtextiles.com/wp-content/uploads/2022/07/RAF_2e-114-copie-scaled.jpg',
    'https://www.actualtextiles.com/wp-content/uploads/2021/11/Sociale-chez-Actual-textiles.jpg',
  ];
  return (
    <section id="sustainability" style={{ background: 'var(--forest)', color: 'white', padding: '120px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 72, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <Label color="rgba(255,255,255,0.45)">{s.label}</Label>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 54,
                fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em' }}>
                {s.title1}<br /><em>{s.titleItalic}</em>
              </h2>
            </div>
            <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.78, opacity: 0.65 }}>{s.intro}</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
          {s.pillars.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'default' }}>
                <img src={pillarImgs[i]} alt={p.label}
                  style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block',
                    filter: 'brightness(0.4)', transition: 'filter .4s, transform .6s',
                    transform: hov===i ? 'scale(1.04)' : 'scale(1)' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, padding: 34,
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{p.icon}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                    marginBottom: 10, opacity: 0.6 }}>{p.label}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26,
                    fontWeight: 400, marginBottom: 14, lineHeight: 1.2 }}>{p.headline}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.7,
                    opacity: hov===i ? 0.85 : 0,
                    transform: hov===i ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity .3s, transform .3s' }}>{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="./sustainability.html" style={{ display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.35)', color: 'white',
              padding: '13px 32px', fontSize: 12, fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase' }}>
              {useLang()==='fr' ? 'Voir nos engagements complets →' : 'See all commitments →'}
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
  const t = useT();
  const c = t.certs;
  return (
    <section id="certifications" style={{ background: 'var(--cream)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <Label>{c.label}</Label>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 54,
                fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em' }}>
                {c.title1}<br /><em>{c.titleItalic}</em>
              </h2>
            </div>
            <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.75, color: 'var(--mid)' }}>{c.body}</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 2 }}>
          {CERTS.map((cert, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div style={{ background: 'white', padding: '28px 20px', display: 'flex',
                flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 12, minHeight: 120 }}>
                <img src={cert.src} alt={cert.name}
                  style={{ height: 48, width: 'auto', maxWidth: 90, objectFit: 'contain' }}
                  loading="lazy"
                  onError={e => { e.target.style.display='none'; }}
                />
                <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--mid)', textAlign: 'center' }}>{cert.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── News Section ──────────────────────────────────────────────────────────────
function NewsSection() {
  const t = useT();
  const n = t.news;
  const [hov, setHov] = React.useState(null);
  return (
    <section id="news" style={{ background: 'var(--stone)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 52, flexWrap: 'wrap', gap: 18 }}>
            <div>
              <Label>{n.label}</Label>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 54,
                fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em' }}>{n.title}</h2>
            </div>
            <a href="https://www.actualtextiles.com/news/" target="_blank" rel="noreferrer"
              style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--dark)',
                borderBottom: '1px solid var(--dark)', paddingBottom: 2 }}>
              {n.all} →
            </a>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {n.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <a href={item.href} target="_blank" rel="noreferrer"
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                style={{ background: 'white', display: 'block', padding: '34px 30px',
                  textDecoration: 'none', color: 'inherit',
                  transition: 'transform .25s, box-shadow .25s',
                  transform: hov===i ? 'translateY(-4px)' : 'none',
                  boxShadow: hov===i ? '0 12px 36px rgba(0,0,0,0.07)' : 'none' }}>
                <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--amber)', marginBottom: 14 }}>{item.date}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 23,
                  fontWeight: 400, lineHeight: 1.25, marginBottom: 14, letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.72, color: 'var(--mid)' }}>{item.excerpt}</p>
                <div style={{ marginTop: 22, fontSize: 11.5, fontWeight: 500, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--forest)', display: 'flex',
                  alignItems: 'center', gap: 6 }}>
                  {useLang()==='fr' ? 'Lire la suite' : 'Read more'}
                  <span style={{ transition: 'transform .2s', transform: hov===i ? 'translateX(4px)' : 'none' }}>→</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  const t = useT();
  const c = t.cta;
  return (
    <section style={{ background: 'var(--amber)', color: 'white', padding: '80px 48px', textAlign: 'center' }}>
      <Reveal>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 18, opacity: 0.72 }}>{c.label}</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 52,
            fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.01em' }}>
            {c.title1}<br /><em>{c.titleItalic}</em>
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, marginBottom: 36, opacity: 0.85 }}>{c.body}</p>
          <a href="mailto:info@actualtextiles.com"
            style={{ background: 'white', color: 'var(--amber)', padding: '15px 40px',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', display: 'inline-block' }}>{c.btn}</a>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { StatsBar, AboutSection, ProductionSection, SustainabilitySection, CertificationsSection, NewsSection, CTABanner });
