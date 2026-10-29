// Contenu de la page JCIA 2023 — sources :
//  • affiche officielle de la 1re édition (public/Nouveau_média/cameroun-connecte.jpg.jpeg) ;
//  • « Rapport IAC — Année 1 » (rapport d'activités de l'IAC, première année) ;
//  • « Rapport officiel JCIA 2025 » (mention de la « première édition fondatrice »).
// Si un rapport dédié aux JCIA 2023 est disponible, il suffit de compléter ce fichier.
import {
  LuCalendarDays, LuMapPin, LuBadgeCheck, LuPresentation, LuHandshake, LuTv,
  LuMicVocal, LuGlobe, LuBuilding2, LuSparkles, LuSchool, LuArrowRightLeft,
} from 'react-icons/lu';

const IMG = (name) => `/Nouveau_média/${name}.jpg.jpeg`;

export const hero = {
  year: '2023',
  edition: '1re édition · Édition fondatrice',
  theme: "Le Cameroun à l'ère de l'Intelligence Artificielle",
  image: IMG('brainstorming-iac'),
  meta: [
    { icon: LuCalendarDays, text: '19 — 20 décembre 2023' },
    { icon: LuMapPin, text: 'IRIC · ENSPY — Yaoundé' },
    { icon: LuBuilding2, text: "Organisé par l'IAC" },
  ],
};

export const report = {
  href: '/rapports/rapport-iac-annee-1.pdf',
  label: 'Télécharger le rapport Année 1',
  meta: 'PDF · 37 pages · 195 Ko',
};

export const poster = IMG('cameroun-connecte');

export const keyFacts = [
  { icon: LuCalendarDays, value: 2, label: 'Journées de rencontres' },
  { icon: LuSchool, value: 2, label: 'Sites : IRIC et ENSPY' },
  { icon: LuBadgeCheck, value: 49, label: 'Attestations délivrées' },
  { icon: LuHandshake, value: 16, label: 'Partenaires & soutiens' },
];

export const sponsorship = [
  { role: 'Co-patronage', names: ['MINPOSTEL', 'MINJEC'] },
  { role: 'Co-parrainage', names: ['Université Bordeaux Montaigne (France)', 'Human AI (France)'] },
  { role: 'Sponsor officiel', names: ['Atos'] },
];

export const supporters = [
  'Huawei', 'Agence Universitaire de la Francophonie (AUF)', "Ambassade d'Espagne au Cameroun",
  'GUCE', 'ACADYS', 'CONIA', 'CSIANA', 'Faraday', 'Media Intelligence',
  'Institut Universitaire Saint Jean', 'Kolo Magazine',
];

export const foundingStory = [
  "Les 19 et 20 décembre 2023, l'Association Intelligence Artificielle Cameroun a lancé la première édition des Journées Camerounaises de l'Intelligence Artificielle, sur le thème « Le Cameroun à l'ère de l'Intelligence Artificielle ».",
  "Accueillies à l'Institut des Relations Internationales du Cameroun (IRIC) et à l'École Nationale Supérieure Polytechnique de Yaoundé (ENSPY), ces journées ont réuni chercheurs, étudiants et professionnels autour des avancées technologiques et de la place du Cameroun dans la révolution de l'IA.",
  "Cette édition fondatrice a posé les bases d'un rendez-vous annuel. Elle a ouvert la voie à la deuxième édition, conçue en 2025 comme un véritable événement d'écosystème.",
];

export const outcomes = [
  {
    icon: LuBadgeCheck,
    date: '15 janvier 2024',
    title: 'Attestations de participation',
    text: "Les attestations, signées par le Professeur Alain Kiyindou, Directeur de l'Agence Universitaire de la Francophonie, ont été mises à la disposition des 49 participants dans les locaux de l'IAC.",
  },
  {
    icon: LuArrowRightLeft,
    date: '27 janvier 2024',
    title: 'Un écho jusqu\'à Douala',
    text: "Suite au succès des JCIA à Yaoundé, les étudiants de l'Université de Douala ont organisé le Microsoft Building Day, consacré à l'IA, avec la participation de l'IAC, du GUCE et du Port Autonome de Kribi.",
  },
  {
    icon: LuSparkles,
    date: '2024',
    title: 'Une dynamique nationale',
    text: "Dans le sillage des JCIA, l'IAC a multiplié conférences, ateliers, participations institutionnelles et partenariats — jusqu'au lancement de Dastudy, IA générative 100 % camerounaise.",
  },
];

// ── Rapport Année 1 : activités menées dans le sillage de la 1re édition ────
export const categories = [
  { key: 'organisees', label: 'Activités organisées', icon: LuPresentation },
  { key: 'participations', label: 'Participations', icon: LuGlobe },
  { key: 'medias', label: 'Médias', icon: LuTv },
  { key: 'partenariats', label: 'Partenariats & audiences', icon: LuHandshake },
];

export const activities = [
  // ── Activités organisées ──
  {
    cat: 'organisees',
    type: 'Conférence',
    title: "L'IA et les métiers de la gestion d'entreprise : quel avenir ?",
    date: '10 janvier 2024',
    place: "Université Catholique d'Afrique Centrale — Coron-Ayéné",
    image: IMG('conference-universite-catholique'),
    text: "Les impacts de l'IA sur les professions de la gestion, avec Frédéric Ngaba (OSIA, membre IAC), André Hot (Campus Métiers) et Carine Dikambi. Serge Nama (Salem High Tech) y a présenté des solutions IA contre les délestages.",
  },
  {
    cat: 'organisees',
    type: 'Atelier',
    title: "L'intelligence artificielle générative",
    date: '25 mai 2024',
    place: 'IRIC — Yaoundé',
    image: IMG('iac-iric'),
    text: "Avec le réseau RECAPI, un atelier hybride pour maîtriser les outils d'IA dans la recherche et la carrière, animé par Alex Bruno Kenfack Anafack, Bigi Ransom Bunyui et Habib Iya.",
  },
  {
    cat: 'organisees',
    type: 'Séminaire',
    title: "L'intelligence artificielle et les données",
    date: '7 juin 2024',
    place: "Ambassade d'Espagne — Yaoundé",
    image: IMG('ia-donnees'),
    stat: '298 participants sur place · 98 en ligne',
    text: "Les défis et opportunités de l'IA et des données dans la santé, l'agriculture et la gestion des villes, avec le soutien de l'Ambassade d'Espagne au Cameroun.",
  },
  {
    cat: 'organisees',
    type: 'Lancement',
    title: 'Dastudy, IA générative 100 % camerounaise',
    date: '18 juillet 2024',
    place: 'Yaoundé',
    image: IMG('dastudy'),
    text: "Conférence de presse avec la Commission nationale pour l'UNESCO : lancement de Dastudy, portée par David Kenfack, et de son assistant Tsaf, entraîné sur des données locales.",
  },

  // ── Participations ──
  {
    cat: 'participations',
    type: 'Sommet international',
    title: "Sommet international sur l'IA et les médias",
    date: '4 mars 2024',
    place: 'Palais des Congrès — Yaoundé',
    image: IMG('ia-industrie-medias'),
    text: "Organisé par l'UAR et l'UNESCO. Le stand de l'IAC, obtenu grâce au MINPOSTEL, a reçu la visite de plusieurs ministres et du Directeur général de l'UAR.",
  },
  {
    cat: 'participations',
    type: 'Concertations nationales',
    title: "Concertations Nationales sur l'IA (CONIA)",
    date: '25 — 26 juin 2024',
    place: 'Hilton Hôtel — Yaoundé',
    image: IMG('iac-conia'),
    text: "Partenaire de l'organisation, l'IAC y a mobilisé ses membres comme experts-intervenants pour contribuer à l'élaboration d'une stratégie nationale de l'IA.",
  },
  {
    cat: 'participations',
    type: 'Réunion UNESCO',
    title: "Évaluation de la préparation du Cameroun à l'IA",
    date: '2 juillet 2024',
    place: "Commission nationale de l'UNESCO — Yaoundé",
    image: IMG('evaluation-ia-cameroun'),
    text: "Discours d'ouverture de l'IAC sur l'état de l'IA au Cameroun : réalités, freins à l'adoption, besoins de formation et apport des startups locales.",
  },
  {
    cat: 'participations',
    type: 'Forum africain',
    title: "7e Journées africaines de l'intelligence économique",
    date: '30 — 31 mai 2024',
    place: 'Yaoundé',
    image: IMG('journees-africaines-ie'),
    text: "Sur invitation du CAVIE, l'IAC a présenté ses initiatives, dont l'ambition d'une première plateforme open source de données camerounaises, et plaidé pour une régulation de l'IA.",
  },
  {
    cat: 'participations',
    type: 'International',
    title: "Assemblée du Global AI Network (GAIN)",
    date: '15 mai 2024',
    place: 'Riyad — Arabie saoudite',
    image: IMG('gain-riyad'),
    text: "À l'invitation de la SDAIA, aux côtés de l'ICESCO et du Conseil consultatif de l'ONU sur l'IA, pour une approche mondiale concertée de l'intelligence artificielle.",
  },
  {
    cat: 'participations',
    type: 'Rencontre académique',
    title: 'Rencontre avec le Professeur Ransome Bawack',
    date: '27 décembre 2023',
    place: 'Advanced School of Mass Communication (ASMAC)',
    image: IMG('ransome-bawack-asmac'),
    text: "Sur invitation de l'IAC, le professeur d'IA à Audencia (France) a échangé avec les étudiants en publicité sur les applications de l'IA dans leur secteur.",
  },
  {
    cat: 'participations',
    type: 'Université',
    title: "Polytechnique de Douala se connecte à l'IAC",
    date: '27 février 2024',
    place: 'École Polytechnique — Douala',
    image: IMG('iac-universite-douala'),
    text: "Une délégation de cinq membres de l'IAC a échangé plus de deux heures avec enseignants, chercheurs et étudiants, avec à la clé l'accord pour une conférence à Douala.",
  },
  {
    cat: 'participations',
    type: 'Université',
    title: "L'Université de Douala répond à l'appel de l'IA",
    date: '27 janvier 2024',
    place: 'Université de Douala — Faculté des sciences',
    image: IMG('universite-douala-ia'),
    text: "Le Microsoft Building Day, initiative étudiante née du succès des JCIA, a positionné Douala comme futur pôle technologique.",
  },
  {
    cat: 'participations',
    type: 'Université',
    title: "19e Journées Universitaires de l'Informatique",
    date: '13 — 17 mai 2024',
    place: 'Université de Yaoundé I',
    image: IMG('ia-etudiant'),
    text: "Sur le thème « L'IA et l'étudiant informaticien » : conférence de Bruno Kenfack et Sage Destin, et cinq tentes d'exposition d'outils d'IA supervisées par Andréa Kofane.",
  },

  // ── Médias ──
  {
    cat: 'medias',
    type: 'Canal 2 International',
    title: 'Interview de Bruno Kenfack',
    date: '31 juillet 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('canal2-iac'),
    text: "Le Secrétaire général adjoint de l'IAC et promoteur d'AITEC évoque les applications, les défis et le potentiel de l'IA pour l'Afrique.",
  },
  {
    cat: 'medias',
    type: 'CRTVweb',
    title: 'Interview de Vincess Dongmo',
    date: '28 août 2024',
    place: "Siège de l'IAC — Yaoundé",
    icon: LuMicVocal,
    text: 'Le métier de data scientist : enjeux, compétences et opportunités dans un secteur en plein essor.',
  },
  {
    cat: 'medias',
    type: 'CRTV',
    title: 'Interview du Dr Fred Ngaba',
    date: '25 septembre 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('interview-fred-ngaba-crtv'),
    text: "Le CEO d'OSIA Technologies, startup accompagnée par l'IAC, présente sa vision d'une éducation transformée par l'IA.",
  },

  // ── Partenariats & audiences ──
  {
    cat: 'partenariats',
    type: 'Convention',
    title: 'Partenariat avec Advanced-IT Group',
    date: '23 janvier 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('iac-advanced-it'),
    text: 'Signée par Boris Landry Kouekam, Président de l\'IAC, et Yves Toguem, Directeur général d\'Advanced-IT Group, pour développer des projets IA communs.',
  },
  {
    cat: 'partenariats',
    type: 'Convention',
    title: 'Partenariat avec Salem High Tech',
    date: '3 septembre 2024',
    place: 'Institut Salem High Tech',
    image: IMG('iac-salem-hightech'),
    text: "Formations spécialisées et projets IA dans des secteurs cibles, pour préparer la main-d'œuvre locale à l'innovation.",
  },
  {
    cat: 'partenariats',
    type: 'Audience',
    title: "Délégation de l'Union européenne",
    date: '23 janvier 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('iac-union-europeenne'),
    text: "Avec Mouad Boumahdi et Honoré Bebga : état de l'IA au Cameroun et contribution de l'IAC à la feuille de route numérique de l'UE.",
  },
  {
    cat: 'partenariats',
    type: 'Audience',
    title: 'Visite du Chef de mission d\'Expertise France',
    date: '2 février 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('expertise-france-iac'),
    text: "Deux heures d'échanges avec Jean-Paul Saleille sur l'IA au service de la bonne gouvernance, et l'engagement de mener ensemble des projets à impact.",
  },
  {
    cat: 'partenariats',
    type: 'Audience',
    title: 'Visite du PNUD',
    date: '4 septembre 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('visite-pnud-iac'),
    text: "Dans le cadre du programme « Youth and Women Employment and Empowerment », évaluation du projet PENIANG pour les compétences IA des jeunes.",
  },
  {
    cat: 'partenariats',
    type: 'Audience',
    title: 'Visite de Guillaume David Soto (SHAURI)',
    date: '1er octobre 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('guillaume-soto-iac'),
    text: "Présentation de « La Fresque de l'IA » et préparation du premier Meet Up des entreprises de l'IAC.",
  },
  {
    cat: 'partenariats',
    type: 'Audience',
    title: 'Visite de Satguru Travel',
    date: '2 octobre 2024',
    place: "Siège de l'IAC — Yaoundé",
    image: IMG('visite-satguru-iac'),
    text: 'Avec Aniket Joshi et Pankaj Sharma : synergies possibles entre tourisme et innovation technologique.',
  },
];

export const partnersLogos = [
  { logo: '/logoIAC/MINPOSTEL.png', name: 'MINPOSTEL' },
  { logo: '/logoIAC/IRIC.png', name: 'IRIC' },
  { logo: '/logoIAC/logo-eu--fr.svg', name: 'Union européenne' },
  { logo: '/logoIAC/logo-expertise-france-fond-transparent270-haut.jpg', name: 'Expertise France' },
  { logo: '/logoIAC/undp-logo-blue.4f32e17f.svg', name: 'PNUD' },
  { logo: '/logoIAC/UnicDouala.jpg', name: 'Université de Douala' },
  { logo: '/logoIAC/logo-UCAC-ICY.png', name: 'UCAC-ICY' },
  { logo: '/logoIAC/Advanced-IT-Group.png', name: 'Advanced-IT Group' },
  { logo: '/logoIAC/canal2.png', name: 'Canal 2' },
  { logo: '/logoIAC/logo_CRTV.svg', name: 'CRTV' },
  { logo: '/logoIAC/Satguru.gif', name: 'Satguru Travel' },
];

export const conclusion =
  "Cette première année a fait de l'IAC un interlocuteur de référence sur l'IA au Cameroun : conférences, ateliers, participations nationales et internationales, médias et partenariats stratégiques. Les JCIA 2023 en ont été l'acte fondateur.";

