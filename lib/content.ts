export const homeTypes = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison individuelle" },
  { value: "commerce", label: "Petit commerce/bureau" },
  { value: "immeuble", label: "Immeuble collectif" },
  { value: "chantier", label: "Chantier/construction" },
];

export const workTypes = [
  { value: "installation-complete", label: "Installation électrique complète" },
  { value: "renovation", label: "Rénovation électrique" },
  { value: "tableau", label: "Mise à jour tableau électrique" },
  { value: "eclairage", label: "Installation éclairage" },
  { value: "prise-chauffage", label: "Installation prise/chauffage" },
  { value: "normes", label: "Mise aux normes/inspection" },
  { value: "depannage", label: "Dépannage urgent" },
  { value: "autre", label: "Autre" },
];

export const services = [
  {
    id: "installation",
    title: "Installation Électrique Complète",
    description: "Installation électrique neuve pour votre logement ou commerce. Nous concevons et réalisons des installations conformes aux normes belges les plus strictes.",
    benefits: [
      "Conformité totale aux normes RGIE",
      "Matériel de qualité professionnelle",
      "Garantie décennale sur tous travaux",
    ],
    image: "/images/services/installation.jpg",
  },
  {
    id: "renovation",
    title: "Rénovation et Mise aux Normes",
    description: "Mise à niveau de votre installation électrique ancienne. Sécurisez votre habitation et améliorez votre confort avec une installation moderne.",
    benefits: [
      "Diagnostic complet gratuit",
      "Remplacement des câbles vétustes",
      "Certificat de conformité inclus",
    ],
    image: "/images/services/renovation.jpg",
  },
  {
    id: "eclairage",
    title: "Éclairage et Décoration",
    description: "Solutions d'éclairage modernes et économiques. LED, spots encastrés, rubans lumineux, éclairage intelligent - nous créons l'ambiance parfaite.",
    benefits: [
      "Économie d'énergie jusqu'à 80%",
      "Éclairage intelligent connecté",
      "Design sur mesure",
    ],
    image: "/images/services/eclairage.jpg",
  },
  {
    id: "chauffage",
    title: "Chauffage Électrique",
    description: "Installation de systèmes de chauffage électrique performants. Radiateurs, planchers chauffants, pompes à chaleur - solutions adaptées à vos besoins.",
    benefits: [
      "Conseils sur les systèmes économes",
      "Installation rapide et propre",
      "Programmation et domotique",
    ],
    image: "/images/services/chauffage.jpg",
  },
  {
    id: "depannage",
    title: "Dépannage d'Urgence 24/7",
    description: "Service de dépannage disponible jour et nuit, weekends et jours fériés. Intervention rapide partout à Bruxelles et environs.",
    benefits: [
      "Intervention sous 2h maximum",
      "Disponible 7j/7, 24h/24",
      "Tarifs transparents, devis avant travaux",
    ],
    image: "/images/services/depannage.jpg",
  },
  {
    id: "diagnostic",
    title: "Diagnostic Électrique",
    description: "Inspection complète de votre installation. Identification des risques, conseil en amélioration, rapport détaillé et certificat de conformité.",
    benefits: [
      "Inspection minutieuse par expert",
      "Rapport détaillé avec photos",
      "Recommandations personnalisées",
    ],
    image: "/images/services/diagnostic.jpg",
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Contact",
    description: "Contactez-nous par téléphone, WhatsApp ou email. Décrivez votre projet ou problème.",
    timeline: "Réponse immédiate",
    icon: "phone",
  },
  {
    id: 2,
    title: "Diagnostic",
    description: "Visite sur place pour évaluer vos besoins. Écoute attentive et conseil professionnel.",
    timeline: "Sous 24-48h",
    icon: "search",
  },
  {
    id: 3,
    title: "Devis",
    description: "Proposition détaillée et transparente. Explication claire des travaux et des coûts.",
    timeline: "Sous 48h",
    icon: "document",
  },
  {
    id: 4,
    title: "Réalisation",
    description: "Exécution des travaux dans les règles de l'art. Respect des délais et chantier propre.",
    timeline: "Selon devis",
    icon: "tools",
  },
];

export const serviceAreas = {
  centre: {
    name: "Bruxelles-Ville (Centre)",
    communes: ["Bruxelles", "Saint-Josse-ten-Noode", "Sablon"],
  },
  ixelles: {
    name: "Région Ixelles",
    communes: ["Ixelles", "Saint-Gilles", "Forest"],
  },
  nord: {
    name: "Région Nord",
    communes: ["Schaerbeek", "Saint-Josse", "Evere"],
  },
  ouest: {
    name: "Région Ouest",
    communes: ["Jette", "Ganshoren", "Koekelberg", "Molenbeek-Saint-Jean"],
  },
  sud: {
    name: "Région Sud",
    communes: ["Uccle", "Watermael-Boitsfort", "Auderghem"],
  },
  peripherie: {
    name: "Périphérie & Environs",
    communes: ["Vilvoorde", "Zaventem", "Dilbeek", "Waterloo", "Rixensart", "Tervuren", "La Hulpe"],
  },
};

export const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Ixelles",
    rating: 5,
    text: "Service impeccable ! Intervention rapide pour un dépannage urgent. L'électricien était professionnel, poli et a parfaitement résolu notre problème. Je recommande vivement.",
    workType: "Dépannage urgent",
  },
  {
    id: 2,
    name: "Marc D.",
    location: "Uccle",
    rating: 5,
    text: "Rénovation complète de l'installation électrique de notre maison. Travail soigné, respect des délais et excellent conseil. Le rapport qualité-prix est imbattable.",
    workType: "Rénovation complète",
  },
  {
    id: 3,
    name: "Fatima K.",
    location: "Schaerbeek",
    rating: 5,
    text: "Installation d'éclairage LED dans tout l'appartement. Résultat magnifique et économies d'énergie visibles dès le premier mois. Merci pour votre expertise !",
    workType: "Éclairage LED",
  },
  {
    id: 4,
    name: "Jean-Pierre L.",
    location: "Bruxelles Centre",
    rating: 5,
    text: "Mise aux normes de notre petit commerce. Service professionnel du début à la fin. Certificat de conformité obtenu sans problème. Excellente communication.",
    workType: "Mise aux normes",
  },
  {
    id: 5,
    name: "Amina B.",
    location: "Jette",
    rating: 5,
    text: "Installation de chauffage électrique et domotique. Système parfait, maison bien chaude et factures maîtrisées. Je suis ravie du résultat.",
    workType: "Chauffage électrique",
  },
  {
    id: 6,
    name: "Thomas V.",
    location: "Watermael-Boitsfort",
    rating: 5,
    text: "Diagnostic électrique complet avant achat de maison. Rapport détaillé qui nous a permis de négocier le prix. Service sérieux et honnête.",
    workType: "Diagnostic",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Rénovation tableau électrique",
    before: "/images/portfolio/before-1.jpg",
    after: "/images/portfolio/after-1.jpg",
    description: "Remplacement complet d'un tableau électrique vétuste par un tableau moderne conforme RGIE",
  },
  {
    id: 2,
    title: "Installation éclairage LED",
    before: "/images/portfolio/before-2.jpg",
    after: "/images/portfolio/after-2.jpg",
    description: "Installation d'éclairage LED moderne dans un appartement à Ixelles",
  },
  {
    id: 3,
    title: "Mise aux normes complète",
    before: "/images/portfolio/before-3.jpg",
    after: "/images/portfolio/after-3.jpg",
    description: "Rénovation électrique complète d'une maison à Uccle",
  },
  {
    id: 4,
    title: "Installation commercial",
    before: "/images/portfolio/before-4.jpg",
    after: "/images/portfolio/after-4.jpg",
    description: "Installation électrique d'un nouveau commerce à Bruxelles Centre",
  },
  {
    id: 5,
    title: "Éclairage architectural",
    before: "/images/portfolio/before-5.jpg",
    after: "/images/portfolio/after-5.jpg",
    description: "Conception et installation d'éclairage architectural sur mesure",
  },
];
