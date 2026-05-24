// at-i18n.jsx v3 — EN + FR, includes contact page
const LangCtx = React.createContext('en');
function useLang() { return React.useContext(LangCtx); }
function useT()    { const l = useLang(); return T[l] || T.en; }

const T = {
  en: {
    nav: { about:'About', production:'Production', sustainability:'Sustainability',
           contactPage:'Contact', ctaBtn:'Get in touch' },
    stats: [
      { n:'2002', label:'Founded in Antananarivo' },
      { n:'100%', label:'Solar-Powered Factory' },
      { n:'20+',  label:'Years of Excellence' },
      { n:'4',    label:'Export Continents' },
    ],
    about: {
      label:'Who we are', title1:'Craftsmanship', titleItalic:'rooted in', title2:'Madagascar',
      p1:"Since 2002, Actual Textiles has upheld Madagascar's rich tradition in garment manufacturing — renowned for its expertise in producing high-quality apparel for the world's most demanding fashion brands.",
      p2:'Strategically located in a free zone in Antananarivo, we leverage GSP EUR1 SADC and AGOA trade agreements — delivering duty-free, premium-quality garments to partners across Europe, the UK, North America and South Africa.',
      trusted:'Trusted by', cta1:'Our Production', cta2:'Sustainability',
    },
    production: {
      label:'How we work', title1:'From concept', titleItalic:'to delivery', stepLabel:'Step',
      steps:[
        { num:'01', title:'Product Development', desc:'From concept to technical specification. Our team uses the LECTRA system to generate precise patterns and prototypes.' },
        { num:'02', title:'Sampling', desc:'Prototypes, size sets, SMS and pre-production samples — crafted with our in-house sample makers and pattern team.' },
        { num:'03', title:'Cutting', desc:'Our cutting room strictly adheres to all pattern specifications, ensuring precision at every phase of garment construction.' },
        { num:'04', title:'Sewing', desc:'Working with AQL 1.0 quality standards, our skilled sewers handle a wide variety of garment styles with meticulous attention.' },
        { num:'05', title:'Finishing & QC', desc:'100% comprehensive inspection. Garments are fully screened, pressed, labeled and packaged to exact client specifications.' },
        { num:'06', title:'Logistics', desc:'FOB or CIF/LDP dispatch with competitive air freight options. All garments ship with the SGP EUR1 form.' },
      ],
    },
    sustainability: {
      label:'Our commitments', title1:'Responsible', titleItalic:'by design',
      intro:"Sustainability isn't a label — it's woven into our operations, our culture, and our relationships with the people and land of Madagascar.",
      pillars:[
        { label:'Environment', headline:'100% Solar Energy', icon:'☀',
          body:'Our entire factory runs on solar power. We partner with local organisations to recycle production waste, maintain green spaces, and actively participate in reforestation programmes.' },
        { label:'Health & Safety', headline:'Caring for Every Worker', icon:'⊕',
          body:'Our on-site medical team provides free consultations, dental care, vision check-ups and medications. First-aid personnel are present in every department.' },
        { label:'Social Impact', headline:'Investing in People', icon:'◇',
          body:"We champion fair trade and invest in the Malagasy community — from supporting women entrepreneurs to organising biodiversity campaigns." },
      ],
    },
    certs: {
      label:'Standards & certifications', title1:'Quality', titleItalic:'you can trust',
      body:'Our certifications are renewed annually, reflecting our consistent top-tier scores and commitment to the highest international standards.',
    },
    cta: {
      label:'Partner with us', title1:'Ready to bring your', titleItalic:'collection to life?',
      body:"Whether you need sampling, full production runs, or a design-to-delivery solution — our team is ready to exceed your expectations.",
      btn:'Get in touch',
    },
    contact: {
      heroLabel:'Contact', heroTitle:'Let\'s build', heroItalic:'something great',
      breadcrumb:'Home → Contact',
      startLabel:'To speed up your response',
      startSub:'Choose the right starting point',
      starts:[
        { num:'01', title:'Production & Sampling',
          desc:'Product development, prototypes, SMS, full production runs and quality requirements.' },
        { num:'02', title:'Certifications',
          desc:'Audit requests, social standards, organic materials and quality documentation.' },
        { num:'03', title:'Logistics',
          desc:'FOB, CIF, LDP questions, air freight, export markets and EUR1 documents.' },
      ],
      formLabel:'Send us a message',
      namePh:'Full name *', emailPh:'Email address *', companyPh:'Company',
      subjectLabel:'Subject', subjectOpts:['Production & Sampling','Certifications','Logistics','Other inquiry'],
      messagePh:'Your message *', sendBtn:'Send message', sending:'Sending…',
      successTitle:'Message sent!', successBody:'Thank you for reaching out. We\'ll get back to you within 24 hours.',
      infoLabel:'Our details',
      locationLabel:'Location',
      locationTitle:'Antananarivo,\nMadagascar',
      locationDesc:'Our factory is located in a free zone, close to our development, production, quality control and logistics teams.',
      mapBtn:'Open map',
    },
    footer: {
      tagline:"A leading garment manufacturer in Madagascar's free zone, supplying premium fashion brands worldwide since 2002.",
      copyright:'© 2025 Actual Textiles Madagascar. All rights reserved.',
      cols:[
        { title:'Company', links:[{label:'About us',href:'./about.html'},{label:'Madagascar',href:'./about.html#madagascar'},{label:'Factory & Team',href:'./about.html#factory'},{label:'Careers',href:'https://www.actualtextiles.com/talents/'}] },
        { title:'Production', links:[{label:'Our Products',href:'./production.html'},{label:'Quality Control',href:'./production.html#qc'},{label:'Technology',href:'./production.html#technology'},{label:'Logistics',href:'./production.html#logistics'}] },
        { title:'Sustainability', links:[{label:'Environment',href:'./sustainability.html#environment'},{label:'Health & Safety',href:'./sustainability.html#health'},{label:'Social Projects',href:'./sustainability.html#social'},{label:'Certifications',href:'./sustainability.html#certifications'}] },
        { title:'Contact', links:[{label:'Contact us',href:'./contact.html'},{label:'Get in touch',href:'mailto:info@actualtextiles.com'},{label:'Legal Notice',href:'https://www.actualtextiles.com/legal-notice/'},{label:'Privacy Policy',href:'https://www.actualtextiles.com/privacy-policy/'}] },
      ],
    },
  },

  fr: {
    nav: { about:'\u00c0 propos', production:'Production', sustainability:'Durabilit\u00e9',
           contactPage:'Contact', ctaBtn:'Nous contacter' },
    stats: [
      { n:'2002', label:'\u00c0 Antananarivo depuis' },
      { n:'100%', label:'\u00c9nergie solaire' },
      { n:'20+',  label:"Ann\u00e9es d'excellence" },
      { n:'4',    label:'Continents exportateurs' },
    ],
    about: {
      label:'Qui sommes-nous', title1:"L'artisanat", titleItalic:'ancr\u00e9 \u00e0', title2:'Madagascar',
      p1:"Depuis 2002, Actual Textiles perp\u00e9tue la riche tradition malgache en mati\u00e8re de fabrication textile \u2014 reconnue pour son savoir-faire dans la production de v\u00eatements de haute qualit\u00e9.",
      p2:"Strat\u00e9giquement situ\u00e9s en zone franche \u00e0 Antananarivo, nous b\u00e9n\u00e9ficions des accords GSP EUR1 SADC et AGOA \u2014 permettant l'exportation en franchise de droits vers l'Europe, le Royaume-Uni, l'Am\u00e9rique du Nord et l'Afrique du Sud.",
      trusted:'Confiance de', cta1:'Notre production', cta2:'Durabilit\u00e9',
    },
    production: {
      label:'Notre processus', title1:'Du concept', titleItalic:'\u00e0 la livraison', stepLabel:'\u00c9tape',
      steps:[
        { num:'01', title:'D\u00e9veloppement produit', desc:"Du concept aux sp\u00e9cifications techniques. Notre \u00e9quipe utilise le syst\u00e8me LECTRA pour g\u00e9n\u00e9rer des patrons et prototypes pr\u00e9cis." },
        { num:'02', title:'\u00c9chantillonnage', desc:"Prototypes, gradations, \u00e9chantillons SMS et de pr\u00e9-production \u2014 r\u00e9alis\u00e9s par notre \u00e9quipe de mod\u00e9listes." },
        { num:'03', title:'Coupe', desc:"Notre atelier de coupe respecte scrupuleusement toutes les sp\u00e9cifications de patrons pour garantir la pr\u00e9cision." },
        { num:'04', title:'Couture', desc:"Travaillant selon les normes AQL\u00a01.0, nos couturi\u00e8res assemblent chaque pi\u00e8ce avec une attention m\u00e9ticuleuse." },
        { num:'05', title:'Finition & Contr\u00f4le', desc:"Inspection compl\u00e8te \u00e0 100\u00a0% \u2014 v\u00eatements v\u00e9rifi\u00e9s, repass\u00e9s, \u00e9tiquet\u00e9s et conditionn\u00e9s selon les exigences exactes." },
        { num:'06', title:'Logistique', desc:"Exp\u00e9dition FOB ou CIF/LDP avec fret a\u00e9rien comp\u00e9titif. Tous les v\u00eatements sont livr\u00e9s avec le formulaire SGP EUR1." },
      ],
    },
    sustainability: {
      label:'Nos engagements', title1:'Responsable', titleItalic:'par nature',
      intro:"La durabilit\u00e9 n'est pas un label \u2014 elle est tiss\u00e9e dans nos op\u00e9rations, notre culture et nos relations avec les habitants et la terre de Madagascar.",
      pillars:[
        { label:'Environnement', headline:'100\u00a0% \u00c9nergie solaire', icon:'☀',
          body:"Notre usine fonctionne enti\u00e8rement \u00e0 l'\u00e9nergie solaire. Nous collaborons avec des organisations locales pour recycler nos d\u00e9chets et participons aux programmes de reforestation." },
        { label:'Sant\u00e9 & S\u00e9curit\u00e9', headline:'Prendre soin de chaque employ\u00e9', icon:'⊕',
          body:"Notre \u00e9quipe m\u00e9dicale sur site offre des consultations, soins dentaires et m\u00e9dicaments gratuits. Des secouristes sont pr\u00e9sents dans chaque d\u00e9partement." },
        { label:'Impact social', headline:"Investir dans les personnes", icon:'◇',
          body:"Nous d\u00e9fendons le commerce \u00e9quitable et investissons dans la communaut\u00e9 malgache \u2014 du soutien aux femmes entrepreneures aux campagnes de biodiversit\u00e9." },
      ],
    },
    certs: {
      label:'Normes & certifications', title1:'Une qualit\u00e9', titleItalic:'certifi\u00e9e',
      body:"Nos certifications sont renouvel\u00e9es annuellement, refl\u00e9tant notre excellence constante et notre engagement envers les plus hauts standards internationaux.",
    },
    cta: {
      label:'Partenaires', title1:'Pr\u00eats \u00e0 donner vie \u00e0', titleItalic:'votre collection\u00a0?',
      body:"Que vous ayez besoin d'\u00e9chantillons, de productions compl\u00e8tes ou d'une solution design-to-delivery \u2014 notre \u00e9quipe est pr\u00eate.",
      btn:'Nous contacter',
    },
    contact: {
      heroLabel:'Contact', heroTitle:'Travaillons', heroItalic:'ensemble',
      breadcrumb:'Accueil → Contact',
      startLabel:'Pour acc\u00e9l\u00e9rer la r\u00e9ponse',
      startSub:'Choisissez le bon point de d\u00e9part',
      starts:[
        { num:'01', title:'Production & sampling',
          desc:"D\u00e9veloppement produit, prototypes, SMS, productions compl\u00e8tes et exigences de qualit\u00e9." },
        { num:'02', title:'Certifications',
          desc:"Demandes li\u00e9es aux audits, standards sociaux, mati\u00e8res organiques et documentation qualit\u00e9." },
        { num:'03', title:'Logistique',
          desc:"Questions FOB, CIF, LDP, fret a\u00e9rien, march\u00e9s d'exportation et documents EUR1." },
      ],
      formLabel:'Envoyez-nous un message',
      namePh:'Nom complet *', emailPh:'Adresse e-mail *', companyPh:'Entreprise',
      subjectLabel:'Sujet', subjectOpts:['Production & Sampling','Certifications','Logistique','Autre demande'],
      messagePh:'Votre message *', sendBtn:'Envoyer le message', sending:'Envoi en cours\u2026',
      successTitle:'Message envoy\u00e9\u00a0!', successBody:"Merci pour votre message. Nous vous r\u00e9pondrons dans les 24 heures.",
      infoLabel:'Nos coordonn\u00e9es',
      locationLabel:'Localisation',
      locationTitle:'Antananarivo,\nMadagascar',
      locationDesc:"Notre usine est implant\u00e9e en zone franche, \u00e0 proximit\u00e9 des \u00e9quipes de d\u00e9veloppement, production, contr\u00f4le qualit\u00e9 et logistique.",
      mapBtn:'Ouvrir la carte',
    },
    footer: {
      tagline:"Un fabricant de v\u00eatements de premier plan en zone franche de Madagascar, fournisseur de grandes marques mondiales depuis 2002.",
      copyright:'© 2025 Actual Textiles Madagascar. Tous droits r\u00e9serv\u00e9s.',
      cols:[
        { title:'\u00c0 propos', links:[{label:'Qui sommes-nous',href:'./about.html'},{label:'Madagascar',href:'./about.html#madagascar'},{label:'Usine & \u00c9quipe',href:'./about.html#factory'},{label:'Carri\u00e8res',href:'https://www.actualtextiles.com/talents/'}] },
        { title:'Production', links:[{label:'Nos produits',href:'./production.html'},{label:'Contr\u00f4le qualit\u00e9',href:'./production.html#qc'},{label:'Technologie',href:'./production.html#technology'},{label:'Logistique',href:'./production.html#logistics'}] },
        { title:'Durabilit\u00e9', links:[{label:'Environnement',href:'./sustainability.html#environment'},{label:'Sant\u00e9 & S\u00e9curit\u00e9',href:'./sustainability.html#health'},{label:'Projets sociaux',href:'./sustainability.html#social'},{label:'Certifications',href:'./sustainability.html#certifications'}] },
        { title:'Contact', links:[{label:'Nous contacter',href:'./contact.html'},{label:'Envoyer un e-mail',href:'mailto:info@actualtextiles.com'},{label:'Mentions l\u00e9gales',href:'https://www.actualtextiles.com/legal-notice/'},{label:'Confidentialit\u00e9',href:'https://www.actualtextiles.com/privacy-policy/'}] },
      ],
    },
  },
};

Object.assign(window, { T, LangCtx, useLang, useT });
