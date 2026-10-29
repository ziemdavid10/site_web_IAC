// Contenu de la page JCIA 2025 — source : « Rapport officiel JCIA 2025 — 2e édition ».
import {
  LuUsers, LuGlobe, LuWifi, LuVote, LuMic, LuMessagesSquare, LuGraduationCap, LuTrophy,
  LuBookOpen, LuLightbulb, LuAward, LuNetwork, LuLandmark, LuFlaskConical, LuBuilding2,
  LuMicroscope, LuCpu, LuSparkles, LuRocket, LuStar, LuMedal, LuGavel, LuTrendingUp,
  LuScale, LuDatabase, LuStore, LuBriefcase, LuMegaphone, LuRepeat, LuFileText, LuHandshake,
  LuChartColumn, LuTarget, LuFactory, LuShieldCheck, LuPresentation, LuEarth, LuCalendarDays,
  LuMapPin,
} from 'react-icons/lu';

export const hero = {
  year: '2025',
  edition: '2e édition · Rapport officiel',
  theme: 'Intelligence Artificielle et Développement Économique : Innover pour Transformer',
  image: '/Nouveau_média/conference-ia.jpg.jpeg',
  meta: [
    { icon: LuCalendarDays, text: '22 — 24 avril 2025' },
    { icon: LuMapPin, text: 'Hilton Hôtel · ENSPY · IRIC — Yaoundé' },
    { icon: LuBuilding2, text: "Organisé par l'IAC" },
  ],
};

export const report = {
  href: '/rapports/rapport-jcia-2025.pdf',
  label: 'Télécharger le rapport',
  meta: 'PDF · 19 pages · 195 Ko',
};

export const keyStats = [
  { icon: LuUsers, value: 3000, display: '3 000', label: 'Participants cumulés' },
  { icon: LuGlobe, value: 10, label: 'Pays représentés' },
  { icon: LuWifi, value: 200, label: 'Participants en ligne' },
  { icon: LuVote, value: 5000, prefix: '+', display: '5 000', label: 'Votants CAIA 2025' },
  { icon: LuMic, value: 34, label: 'Intervenants programmés' },
  { icon: LuMessagesSquare, value: 40, label: 'Prises de parole' },
  { icon: LuGraduationCap, value: 2, label: 'Masterclasses' },
  { icon: LuTrophy, value: 7, label: 'Catégories de prix' },
];

export const summary = [
  "Du 22 au 24 avril 2025, Yaoundé a accueilli la deuxième édition des Journées Camerounaises de l'Intelligence Artificielle, rendez-vous national et international dédié à la réflexion, à l'innovation, à la démonstration technologique et à la construction d'un écosystème camerounais de l'IA plus structuré, plus responsable et plus compétitif.",
  "Conférences, panels, masterclasses, démonstrations, salon 100 % IA, Cameroon Artificial Intelligence Awards, hackathon et fireside chat : les JCIA 2025 ont confirmé leur rôle de plateforme de référence pour les décideurs publics, les entreprises, les startups, les universités, les chercheurs, les étudiants et les partenaires techniques.",
];

export const pillars = [
  { icon: LuBookOpen, title: 'Connaissance', text: 'Contenus stratégiques, conférences et leçons inaugurales.' },
  { icon: LuLightbulb, title: 'Innovation', text: 'Démonstrations pratiques et salon d\'exposition 100 % IA.' },
  { icon: LuAward, title: 'Reconnaissance', text: 'Valorisation des talents par les Awards et le hackathon.' },
  { icon: LuNetwork, title: 'Connexion', text: 'Rencontres entre institutions, startups, chercheurs et diaspora.' },
];

export const objectives = [
  "Renforcer la compréhension de l'IA par les décideurs publics, les entreprises, les jeunes, les chercheurs, les médias et le grand public.",
  'Stimuler l\'innovation locale en donnant de la visibilité aux startups, aux projets de recherche et aux solutions répondant à des besoins réels.',
  'Favoriser les synergies entre administrations, universités, entreprises, incubateurs, investisseurs et partenaires internationaux.',
  'Promouvoir une intelligence artificielle responsable, inclusive et éthique, adaptée aux réalités camerounaises.',
  "Contribuer à l'émergence d'une stratégie nationale cohérente pour la formation, la recherche, l'investissement et la régulation de l'IA.",
];

export const days = [
  {
    num: 1,
    date: '22 avril 2025',
    place: 'Hilton Hôtel — Salle Bouma',
    icon: LuLandmark,
    color: '#312783',
    focus: 'Ouvrir le débat stratégique',
    schedule: [
      ['08h00', 'Accueil et inscriptions des participants.'],
      ['10h00', 'Cérémonie d\'ouverture : mot de bienvenue de Boris Landry Kouekam, intervention du Dr Patrick Seumen, conférence inaugurale du Prof Ébénézer Njoh Mouelle « Le pouvoir d\'État et la mise en œuvre de l\'IA en Afrique ».'],
      ['10h40', 'Démonstration de « Witness », vidéosurveillance augmentée par IA — Dr Ifriky Tadadjeu (Nanosatellite Missions Design).'],
      ['10h50', 'Démonstration PAKAZURE « Seavantis », IA appliquée à la logistique maritime — Hollande Mangala et Arthur Effa.'],
      ['11h00', 'Keynote d\'Alain Claude Bah Essem (Nexus Cloud Technologies, Royaume-Uni) : « Façonner l\'avenir de la fintech et de Salesforce grâce à l\'IA ».'],
      ['11h10', 'Lecture des Cameroon Artificial Intelligence Awards 2025 par le Prof Franklin Tchakounté, Président de la Commission scientifique.'],
      ['11h30', 'Discours du Pr Laurent Serge Etoundi Ngoa, Président de la Commission nationale de l\'UNESCO.'],
      ['11h40', 'Ouverture solennelle par le Ministère des Postes et Télécommunications.'],
      ['12h00', 'Ouverture et visite du Salon d\'exposition 100 % IA.'],
      ['14h00', 'Conférence « L\'IA, pilier de l\'économie numérique : avancées, freins, perspectives » — Pr Longin Colbert Eloundou, Mme Christelle Peyran, Dr Guy Gweth, Dr Denis Ngae ; modération Henri Kouam.'],
      ['15h00', 'Conférence « Intelligences éducatives pour une IA contrôlée et maîtrisée au Cameroun » — Pr Fleur Nadine Mvondo, Dr Patrick Seumen, Dr Ifriky Tadadjeu, Pr Bernabé Batchakui.'],
    ],
  },
  {
    num: 2,
    date: '23 avril 2025',
    place: 'ENSPY — Salle des Actes',
    icon: LuFlaskConical,
    color: '#0891b2',
    focus: 'Former et exposer les solutions',
    schedule: [
      ['08h00', 'Accueil et inscriptions des participants.'],
      ['10h00', 'Ouverture du Salon 100 % IA par le Directeur de l\'École Nationale Supérieure Polytechnique de Yaoundé.'],
      ['10h30', 'Masterclass de Guillaume Soto : « Les agents IA au service du Retrieval-Augmented Generation : tendances actuelles ».'],
      ['11h15', 'Masterclass de Habib Iya (Port Autonome de Kribi) : « Comment tirer profit de l\'IA générative dans le contexte entrepreneurial local ? ».'],
      ['12h30', 'Fireside chat — Success stories : René Essomba (Australie), Alain Claude Bah Essem (Royaume-Uni), Joël Parfait Kuate (France).'],
      ['13h30', 'Conférence « L\'IA Made in Cameroon : des solutions pour nos challenges communautaires » — Dr Fred Ngaba, David Kenfack, Armel Fameni, Sage Destin Kouam ; modération Chelsie Carel Wandji.'],
    ],
  },
  {
    num: 3,
    date: '24 avril 2025',
    place: 'IRIC — Amphi 500',
    icon: LuBuilding2,
    color: '#7c3aed',
    focus: 'Recommander et connecter',
    schedule: [
      ['08h00', 'Accueil et inscriptions des participants.'],
      ['10h00', 'Cérémonie de clôture : hymne par le Chœur des Internationalistes de l\'IRIC, intervention du Dr Daniel Urbain Ndongo, leçon inaugurale du Prof Jean Emmanuel Mpondi, Recteur d\'ICT University.'],
      ['10h30', 'Conférence « L\'IAmatie : mariage entre l\'IA et la diplomatie économique » — Pr Didier Alain Olinga, Dr Enow Takang Achuo Albert, Dr Christian Pout, Dr Saphir Volviane Nfogo ; modération Didier Pare.'],
      ['11h20', 'Exposé de M. Hilaire Mputu, Directeur du Bureau régional de l\'UNESCO en Afrique centrale : « IA et Humanité ».'],
      ['11h30', 'Remise d\'une distinction honorifique à l\'IAC, puis d\'un prix honorifique au Ministère des Postes et Télécommunications.'],
      ['11h45', 'Lecture des recommandations des JCIA 2025 par le Dr Patrick Seumen.'],
      ['12h15', 'Photo de famille, visites de stands et clôture officielle.'],
    ],
  },
];

export const highlights = [
  { icon: LuLandmark, title: 'Cérémonie d\'ouverture', text: 'Une portée institutionnelle forte : l\'IA comme enjeu de compétitivité, d\'emploi, de formation et de gouvernance.' },
  { icon: LuPresentation, title: 'Salon 100 % IA', text: 'Une vitrine de solutions, prototypes et plateformes portés par des startups, chercheurs et innovateurs.' },
  { icon: LuTrophy, title: 'Cameroon AI Awards', text: 'Les talents récompensés : contributions scientifiques, solutions, prototypes et hackathon.' },
  { icon: LuGraduationCap, title: 'Masterclasses', text: 'Passer de la sensibilisation à l\'appropriation des méthodes et outils de l\'IA.' },
  { icon: LuMessagesSquare, title: 'Panels & conférences', text: 'Économie numérique, éducation, régulation, souveraineté et diplomatie économique.' },
  { icon: LuEarth, title: 'Fireside chat', text: 'Des parcours de talents camerounais de la data et de l\'IA à l\'international.' },
];

export const awards = [
  { cat: 'Best Scientific Contribution in AI', winner: 'CHEGNO TEKAM Valencienne', icon: LuMicroscope },
  { cat: 'Best Functional AI Solution', winner: 'SHINYUY Marcel Fonyuy', icon: LuCpu },
  { cat: 'Most Innovative AI Prototype', winner: 'GWADE Steve', icon: LuLightbulb },
  { cat: 'Promising Idea for AI Future', winner: 'EYENGA MINKONDA LAURENTINE Serena', icon: LuRocket },
  { cat: 'Outstanding Female Contributor in AI', winner: 'LONI TANDE EBENYE Miriam', icon: LuSparkles },
  { cat: '1st Place — JCIA Hackathon', winner: 'Ubinifu — DJIKA ASMAOUN Houma', icon: LuMedal, podium: 1 },
  { cat: '2nd Place — JCIA Hackathon', winner: 'PlumVision — GWADE Steve', icon: LuStar, podium: 2 },
];

export const themes = [
  { icon: LuFactory, title: 'Industrialisation & compétitivité', text: 'Optimiser les procédés, la maintenance et la décision pour une industrialisation durable.' },
  { icon: LuBriefcase, title: 'Futur du travail', text: 'Évolution des métiers, des compétences et des modèles d\'organisation.' },
  { icon: LuShieldCheck, title: 'Éthique & régulation', text: 'Protéger les citoyens, limiter les biais et garantir la transparence des systèmes.' },
  { icon: LuDatabase, title: 'Données & souveraineté', text: 'Des écosystèmes de données contextualisées, sécurisées et utiles.' },
  { icon: LuRocket, title: 'Entrepreneuriat & startups', text: 'Les jeunes innovateurs comme moteur de la transformation technologique.' },
  { icon: LuHandshake, title: 'Coopération internationale', text: 'Formation, transfert de compétences et projets pilotes avec les partenaires.' },
];

export const recommendations = [
  { icon: LuGavel, title: 'Gouvernance nationale de l\'IA', text: 'Mettre en place une stratégie nationale de l\'IA portée au plus haut niveau, avec feuille de route, priorités sectorielles, indicateurs mesurables et suivi annuel, ainsi qu\'un cadre national de coordination associant l\'État, les universités, les entreprises et la société civile.' },
  { icon: LuTrendingUp, title: 'Économie & industrialisation', text: 'Identifier les secteurs prioritaires (agriculture, santé, éducation, logistique, finance, énergie, ports…) et lancer des programmes pilotes sectoriels pour tester des solutions en conditions réelles avant passage à l\'échelle.' },
  { icon: LuGlobe, title: 'Diplomatie & coopération', text: 'Inscrire l\'IA dans l\'agenda diplomatique et économique du Cameroun et positionner les JCIA comme plateforme annuelle de diplomatie technologique.' },
  { icon: LuScale, title: 'IA éthique & inclusive', text: 'Adopter un cadre national d\'éthique de l\'IA (données personnelles, transparence, explicabilité, non-discrimination, supervision humaine) et intégrer l\'évaluation éthique dès la conception.' },
  { icon: LuDatabase, title: 'Données & infrastructures', text: 'Définir une politique nationale de données pour l\'IA et investir dans la connectivité, le cloud, les centres de données, les capacités de calcul et la cybersécurité.' },
  { icon: LuGraduationCap, title: 'Éducation & compétences', text: 'Intégrer l\'IA dans les curricula au-delà de l\'informatique et créer des parcours différenciés : grand public, professionnels, managers, entrepreneurs, ingénieurs, juristes.' },
  { icon: LuSparkles, title: 'IA générative & PME', text: 'Lancer un programme national d\'acculturation à l\'IA générative pour les entrepreneurs et PME, en formant aussi à ses limites : confidentialité, hallucinations, biais, propriété intellectuelle.' },
  { icon: LuStore, title: 'Label « IA Made in Cameroon »', text: 'Identifier, valoriser et accompagner les solutions locales, en priorité celles qui répondent aux défis communautaires : éducation, santé, agriculture, inclusion financière, langues locales.' },
  { icon: LuNetwork, title: 'Réseau des talents de la diaspora', text: 'Créer un réseau international des talents camerounais de l\'IA pour le mentorat, les masterclasses, les stages et les collaborations de recherche.' },
  { icon: LuRocket, title: 'Startups & financement', text: 'Créer un fonds d\'amorçage dédié aux startups IA et faire des Awards un levier d\'accélération : incubation, financement, contrats pilotes.' },
  { icon: LuMegaphone, title: 'Culture publique de l\'IA', text: 'Développer une stratégie nationale de sensibilisation avec les médias, les écoles et les institutions, et former les journalistes aux enjeux de l\'IA.' },
  { icon: LuRepeat, title: 'Pérennisation des JCIA', text: 'Créer un secrétariat permanent des JCIA chargé du suivi des recommandations, de la coordination des partenaires et de l\'animation de la communauté toute l\'année.' },
];

export const roadmap = [
  { horizon: '30 jours', action: 'Publier le rapport officiel et la galerie média', result: 'Capitaliser sur l\'événement', icon: LuFileText },
  { horizon: '60 jours', action: 'Réunion de restitution avec les partenaires', result: 'Transformer les recommandations en engagements', icon: LuUsers },
  { horizon: '90 jours', action: 'Base de données des startups et projets IA', result: 'Structurer l\'écosystème', icon: LuDatabase },
  { horizon: '3 à 6 mois', action: 'Ateliers sectoriels IA', result: 'Identifier les cas d\'usage prioritaires', icon: LuTarget },
  { horizon: '6 mois', action: 'Suivi des lauréats CAIA et des exposants', result: 'Mesurer l\'impact post-événement', icon: LuAward },
  { horizon: '12 mois', action: 'Publier un baromètre camerounais de l\'IA', result: 'Installer les JCIA comme référence annuelle', icon: LuChartColumn },
];

export const partners = [
  { logo: '/logoIAC/undp-logo-blue.4f32e17f.svg', name: 'PNUD' },
  { logo: '/logoIAC/logo-eu--fr.svg', name: 'Union européenne' },
  { logo: '/logoIAC/logo-expertise-france-fond-transparent270-haut.jpg', name: 'Expertise France' },
  { logo: '/logoIAC/MINPOSTEL.png', name: 'MINPOSTEL' },
  { logo: '/logoIAC/IRIC.png', name: 'IRIC' },
  { logo: '/logoIAC/UnicDouala.jpg', name: 'Université de Douala' },
  { logo: '/logoIAC/logo-UCAC-ICY.png', name: 'UCAC-ICY' },
  { logo: '/logoIAC/canal2.png', name: 'Canal 2' },
  { logo: '/logoIAC/logo_CRTV.svg', name: 'CRTV' },
  { logo: '/logoIAC/Advanced-IT-Group.png', name: 'Advanced-IT Group' },
];

export const conclusion =
  "L'enjeu n'est plus seulement de parler d'intelligence artificielle. L'enjeu est désormais de bâtir, avec méthode et responsabilité, les conditions d'une intelligence artificielle utile au Cameroun, ouverte sur l'Afrique et connectée au monde.";
