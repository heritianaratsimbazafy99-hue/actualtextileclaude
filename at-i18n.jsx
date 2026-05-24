// at-i18n.jsx — Translations EN/FR + React language context
const LangCtx = React.createContext('en');
function useLang() { return React.useContext(LangCtx); }
function useT() { const l = useLang(); return T[l] || T.en; }

const T = {
  en: {
    nav: { about:'About', production:'Production', sustainability:'Sustainability',
           certifications:'Certifications', news:'News', contact:'Get in touch' },
    hero: {
      taglines: ['Fashion Creator','Malagasy Know-How','Responsible Company'],
      line1:'Excellence', line2:'in every stitch,', line3:'from Madagascar',
      sub:'Innovative leader in garment and accessories design and manufacturing — supplying top fashion brands in Europe, the UK, North America, and South Africa.',
      cta1:'Discover our story', cta2:'Our production',
    },
    stats: [
      { n:'2002', label:'Founded in Antananarivo' },
      { n:'100%', label:'Solar-Powered Factory' },
      { n:'20+',  label:'Years of Excellence' },
      { n:'4',    label:'Export Continents' },
    ],
    about: {
      label:'Who we are',
      title1:'Craftsmanship', titleItalic:'rooted in', title2:'Madagascar',
      p1:"Since 2002, Actual Textiles has upheld Madagascar's rich tradition in garment manufacturing — renowned for its expertise in producing high-quality apparel for the world's most demanding fashion brands.",
      p2:'Strategically located in a free zone in Antananarivo, we leverage preferential trade agreements including GSP EUR1 SADC and AGOA — delivering duty-free, premium-quality garments to partners across Europe, the UK, North America and South Africa.',
      trusted:'Trusted by', cta1:'Our Production', cta2:'Sustainability',
    },
    production: {
      label:'How we work', title1:'From concept', titleItalic:'to delivery', stepLabel:'Step',
      steps:[
        { num:'01', title:'Product Development', desc:'From initial concept to technical specification. Our team uses the state-of-the-art LECTRA system to generate precise patterns and prototypes.' },
        { num:'02', title:'Sampling', desc:'We provide a professional sampling service — prototypes, size sets, SMS and pre-production samples — crafted with our in-house sample makers and pattern team.' },
        { num:'03', title:'Cutting', desc:'Our cutting room strictly adheres to all pattern specifications, ensuring precision at every phase of garment construction.' },
        { num:'04', title:'Sewing', desc:'Working with AQL 1.0 quality standards, our skilled sewers handle a wide variety of garment styles and materials with meticulous attention.' },
        { num:'05', title:'Finishing & QC', desc:'100% comprehensive inspection of all production. Garments are fully screened, pressed, labeled and packaged to exact client specifications.' },
        { num:'06', title:'Logistics', desc:'We coordinate prompt FOB or CIF/LDP dispatch, including competitive air freight options. All garments ship with the SGP EUR1 form.' },
      ],
    },
    sustainability: {
      label:'Our commitments', title1:'Responsible', titleItalic:'by design',
      intro:"Sustainability isn't a label at Actual Textiles — it's woven into our operations, our culture, and our relationships with the people and land of Madagascar.",
      pillars:[
        { label:'Environment', headline:'100% Solar Energy', icon:'☀',
          body:'Our entire factory runs on solar power, eliminating carbon emissions. We partner with local organisations to recycle and upcycle production waste, maintain green spaces and vegetable gardens, and actively participate in reforestation programmes across Madagascar.' },
        { label:'Health & Safety', headline:'Caring for Every Worker', icon:'⊕',
          body:'Our on-site medical team provides free consultations, dental care, vision check-ups and medications to all employees. First-aid personnel are present in every department with regular health workshops on nutrition and disease prevention.' },
        { label:'Social Impact', headline:'Investing in People', icon:'◇',
          body:"We champion fair trade practices and invest in the local Malagasy community. From supporting women entrepreneurs to organising awareness campaigns and biodiversity programmes — social responsibility is at the heart of everything we do." },
      ],
    },
    certs: {
      label:'Standards & certifications', title1:'Quality', titleItalic:'you can trust',
      body:'Our certifications are renewed annually, reflecting our consistent top-tier scores and commitment to the highest international standards.',
    },
    news: {
      label:'Latest updates', title:'Newsroom', all:'All articles',
      items:[
        { date:'2 June 2025', title:'World No Tobacco Day: A Powerful Message for Employee Health',
          excerpt:'Actual Textiles launched a unique initiative to raise awareness among employees about the dangers of tobacco and to promote a healthier work environment.',
          href:'https://www.actualtextiles.com/textile-madagascar-actual-textiles-celebrates-world-no-tobacco-day-with-a-powerful-message-for-employee-health/' },
        { date:'26 May 2025', title:'Committing to Biodiversity and the Planet',
          excerpt:"On the International Day for Biological Diversity, Actual Textiles reaffirms its environmental and social commitments to protect Madagascar\u2019s unique ecosystem.",
          href:'https://www.actualtextiles.com/textile-in-madagascar-actual-textiles-commits-to-biodiversity-and-the-planetmay-22-2025-antananarivo-madagascar/' },
        { date:'19 May 2025', title:'Together for a Sustainable and Responsible Textile Future',
          excerpt:"Celebrating World Fair Trade Day by reaffirming our commitment to sustainable, humane practices across Madagascar\u2019s textile sector.",
          href:'https://www.actualtextiles.com/together-lets-grow-a-more-responsible-future-for-a-more-sustainable-malagasy-textile-industry-celebrating-world-fair-trade-day/' },
      ],
    },
    cta: {
      label:'Partner with us', title1:'Ready to bring your', titleItalic:'collection to life?',
      body:"Whether you need sampling, full production runs, or a complete design-to-delivery solution — our team is ready to exceed your expectations.",
      btn:'Get in touch',
    },
    footer: {
      tagline:"A leading garment manufacturer in Madagascar's free zone, supplying premium fashion brands worldwide since 2002.",
      copyright:'© 2025 Actual Textiles Madagascar. All rights reserved.',
      cols:[
        { title:'About', links:[{label:'Overview',href:'./about.html'},{label:'Madagascar',href:'./about.html#madagascar'},{label:'Factory & Team',href:'./about.html#factory'},{label:'Careers',href:'https://www.actualtextiles.com/talents/'}] },
        { title:'Production', links:[{label:'Our Products',href:'./production.html'},{label:'Quality Control',href:'./production.html#qc'},{label:'Technology',href:'./production.html#technology'},{label:'Logistics',href:'./production.html#logistics'}] },
        { title:'Sustainability', links:[{label:'Environment',href:'./sustainability.html#environment'},{label:'Health & Safety',href:'./sustainability.html#health'},{label:'Social Projects',href:'./sustainability.html#social'},{label:'Certifications',href:'./sustainability.html#certifications'}] },
        { title:'Contact', links:[{label:'Get in Touch',href:'mailto:info@actualtextiles.com'},{label:'Press / Media',href:'https://www.actualtextiles.com/news/'},{label:'Legal Notice',href:'https://www.actualtextiles.com/legal-notice/'},{label:'Privacy Policy',href:'https://www.actualtextiles.com/privacy-policy/'}] },
      ],
    },
  },

  fr: {
    nav: { about:'\u00c0 propos', production:'Production', sustainability:'Durabilit\u00e9',
           certifications:'Certifications', news:'Actualit\u00e9s', contact:'Nous contacter' },
    hero: {
      taglines: ['Cr\u00e9ateur de mode','Savoir-faire Malgache','Entreprise responsable'],
      line1:"L'excellence", line2:'\u00e0 chaque point,', line3:'depuis Madagascar',
      sub:"Leader innovant dans la conception et fabrication de v\u00eatements et accessoires \u2014 fournisseur de grandes marques de mode en Europe, au Royaume-Uni, en Am\u00e9rique du Nord et en Afrique du Sud.",
      cta1:'Notre histoire', cta2:'Notre production',
    },
    stats: [
      { n:'2002', label:'\u00c0 Antananarivo depuis' },
      { n:'100%', label:'\u00c9nergie solaire' },
      { n:'20+',  label:"Ann\u00e9es d'excellence" },
      { n:'4',    label:'Continents exportateurs' },
    ],
    about: {
      label:'Qui sommes-nous',
      title1:"L'artisanat", titleItalic:'ancr\u00e9 \u00e0', title2:'Madagascar',
      p1:"Depuis 2002, Actual Textiles perp\u00e9tue la riche tradition malgache en mati\u00e8re de fabrication textile \u2014 reconnue pour son savoir-faire dans la production de v\u00eatements de haute qualit\u00e9 pour les marques de mode les plus exigeantes.",
      p2:"Strat\u00e9giquement situ\u00e9s en zone franche \u00e0 Antananarivo, nous b\u00e9n\u00e9ficions d'accords commerciaux pr\u00e9f\u00e9rentiels (GSP EUR1 SADC et AGOA) permettant l'exportation en franchise de droits vers l'Europe, le Royaume-Uni, l'Am\u00e9rique du Nord et l'Afrique du Sud.",
      trusted:'Confiance de', cta1:'Notre production', cta2:'Durabilit\u00e9',
    },
    production: {
      label:'Notre processus', title1:'Du concept', titleItalic:'\u00e0 la livraison', stepLabel:'\u00c9tape',
      steps:[
        { num:'01', title:'D\u00e9veloppement produit', desc:"Du concept initial aux sp\u00e9cifications techniques. Notre \u00e9quipe utilise le syst\u00e8me LECTRA de pointe pour g\u00e9n\u00e9rer des patrons et prototypes pr\u00e9cis." },
        { num:'02', title:'\u00c9chantillonnage', desc:"Nous proposons un service d'\u00e9chantillonnage professionnel\u00a0: prototypes, gradations, \u00e9chantillons SMS et de pr\u00e9-production." },
        { num:'03', title:'Coupe', desc:"Notre atelier de coupe respecte scrupuleusement toutes les sp\u00e9cifications de patrons, garantissant la pr\u00e9cision \u00e0 chaque phase de la confection." },
        { num:'04', title:'Couture', desc:"Travaillant selon les normes qualit\u00e9 AQL\u00a01.0, nos couturi\u00e8res qualifi\u00e9es traitent une grande vari\u00e9t\u00e9 de styles et de mati\u00e8res avec une attention m\u00e9ticuleuse." },
        { num:'05', title:'Finition & Contr\u00f4le', desc:"Inspection compl\u00e8te \u00e0 100\u00a0% de toute la production. Les v\u00eatements sont int\u00e9gralement v\u00e9rifi\u00e9s, repass\u00e9s, \u00e9tiquet\u00e9s et conditionn\u00e9s selon les sp\u00e9cifications exactes." },
        { num:'06', title:'Logistique', desc:"Nous coordonnons l'exp\u00e9dition rapide en FOB ou CIF/LDP, avec des options de fret a\u00e9rien comp\u00e9titives. Tous les v\u00eatements sont livr\u00e9s avec le formulaire SGP EUR1." },
      ],
    },
    sustainability: {
      label:'Nos engagements', title1:'Responsable', titleItalic:'par nature',
      intro:"La durabilit\u00e9 n'est pas un label pour Actual Textiles \u2014 elle est tiss\u00e9e dans nos op\u00e9rations, notre culture et nos relations avec les habitants et la terre de Madagascar.",
      pillars:[
        { label:'Environnement', headline:'100\u00a0% \u00c9nergie solaire', icon:'☀',
          body:"Notre usine fonctionne enti\u00e8rement \u00e0 l'\u00e9nergie solaire. Nous collaborons avec des organisations locales pour recycler nos d\u00e9chets, entretenons des espaces verts et potagers sur site, et participons activement aux programmes de reforestation \u00e0 Madagascar." },
        { label:'Sant\u00e9 & S\u00e9curit\u00e9', headline:'Prendre soin de chaque employ\u00e9', icon:'⊕',
          body:"Notre \u00e9quipe m\u00e9dicale sur site offre des consultations gratuites, des soins dentaires, des contr\u00f4les de la vue et des m\u00e9dicaments \u00e0 tous les employ\u00e9s. Des secouristes sont pr\u00e9sents dans chaque d\u00e9partement avec des ateliers r\u00e9guliers sur la sant\u00e9." },
        { label:'Impact social', headline:"Investir dans les personnes", icon:'◇',
          body:"Nous d\u00e9fendons le commerce \u00e9quitable et investissons dans la communaut\u00e9 malgache locale. Du soutien aux femmes entrepreneures aux campagnes de sensibilisation \u2014 la responsabilit\u00e9 sociale est au c\u0153ur de tout ce que nous faisons." },
      ],
    },
    certs: {
      label:'Normes & certifications', title1:'Une qualit\u00e9', titleItalic:'certifi\u00e9e',
      body:"Nos certifications sont renouvel\u00e9es annuellement, refl\u00e9tant notre excellence constante et notre engagement envers les plus hauts standards internationaux.",
    },
    news: {
      label:'Derni\u00e8res actualit\u00e9s', title:'Actualit\u00e9s', all:'Tous les articles',
      items:[
        { date:'2 juin 2025', title:'Journ\u00e9e mondiale sans tabac\u00a0: un message fort pour la sant\u00e9',
          excerpt:"Actual Textiles a lanc\u00e9 une initiative unique pour sensibiliser ses employ\u00e9s aux dangers du tabac et promouvoir un environnement de travail plus sain.",
          href:'https://www.actualtextiles.com/textile-madagascar-actual-textiles-celebrates-world-no-tobacco-day-with-a-powerful-message-for-employee-health/' },
        { date:'26 mai 2025', title:'Engag\u00e9s pour la biodiversit\u00e9 et la plan\u00e8te',
          excerpt:"\u00c0 l'occasion de la Journ\u00e9e internationale de la diversit\u00e9 biologique, Actual Textiles r\u00e9affirme ses engagements environnementaux et sociaux pour prot\u00e9ger l'\u00e9cosyst\u00e8me unique de Madagascar.",
          href:'https://www.actualtextiles.com/textile-in-madagascar-actual-textiles-commits-to-biodiversity-and-the-planetmay-22-2025-antananarivo-madagascar/' },
        { date:'19 mai 2025', title:'Ensemble pour un avenir textile durable et responsable',
          excerpt:"\u00c0 l'occasion de la Journ\u00e9e mondiale du commerce \u00e9quitable, nous r\u00e9affirmons notre engagement envers des pratiques durables et humaines.",
          href:'https://www.actualtextiles.com/together-lets-grow-a-more-responsible-future-for-a-more-sustainable-malagasy-textile-industry-celebrating-world-fair-trade-day/' },
      ],
    },
    cta: {
      label:'Partenaires', title1:'Pr\u00eats \u00e0 donner vie \u00e0', titleItalic:'votre collection\u00a0?',
      body:"Que vous ayez besoin d'\u00e9chantillons, de productions compl\u00e8tes ou d'une solution design-to-delivery \u2014 notre \u00e9quipe est pr\u00eate \u00e0 d\u00e9passer vos attentes.",
      btn:'Nous contacter',
    },
    footer: {
      tagline:"Un fabricant de v\u00eatements de premier plan en zone franche de Madagascar, fournisseur de grandes marques mondiales depuis 2002.",
      copyright:'© 2025 Actual Textiles Madagascar. Tous droits r\u00e9serv\u00e9s.',
      cols:[
        { title:'\u00c0 propos', links:[{label:'Aper\u00e7u',href:'./about.html'},{label:'Madagascar',href:'./about.html#madagascar'},{label:'Usine & \u00c9quipe',href:'./about.html#factory'},{label:'Carri\u00e8res',href:'https://www.actualtextiles.com/talents/'}] },
        { title:'Production', links:[{label:'Nos produits',href:'./production.html'},{label:'Contr\u00f4le qualit\u00e9',href:'./production.html#qc'},{label:'Technologie',href:'./production.html#technology'},{label:'Logistique',href:'./production.html#logistics'}] },
        { title:'Durabilit\u00e9', links:[{label:'Environnement',href:'./sustainability.html#environment'},{label:'Sant\u00e9 & S\u00e9curit\u00e9',href:'./sustainability.html#health'},{label:'Projets sociaux',href:'./sustainability.html#social'},{label:'Certifications',href:'./sustainability.html#certifications'}] },
        { title:'Contact', links:[{label:'Nous contacter',href:'mailto:info@actualtextiles.com'},{label:'Presse / M\u00e9dias',href:'https://www.actualtextiles.com/news/'},{label:'Mentions l\u00e9gales',href:'https://www.actualtextiles.com/legal-notice/'},{label:'Confidentialit\u00e9',href:'https://www.actualtextiles.com/privacy-policy/'}] },
      ],
    },
  },
};

Object.assign(window, { T, LangCtx, useLang, useT });
