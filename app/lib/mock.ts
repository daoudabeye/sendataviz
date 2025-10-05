// Mock data for SENDATAVIZ showcase website (ported from draft)
export const mockData = {
  company: {
    name: "SENDATAVIZ",
    tagline: "Transformez vos données en insights stratégiques",
    description:
      "Experts en Business Intelligence, intégration de systèmes et développement sur mesure avec WebFOCUS",
    email: "contact@sendataviz.com",
    phone: "+33 1 23 45 67 89",
    address: "123 Avenue de l'Innovation, 75001 Paris, France",
  },
  services: [
    {
      id: 1,
      title: "Business Intelligence",
      subtitle: "WebFOCUS & Analytics",
      description:
        "Solutions BI complètes avec WebFOCUS pour transformer vos données en décisions stratégiques",
      features: [
        "Tableaux de bord interactifs",
        "Reporting automatisé",
        "Analyse prédictive",
        "Intégration multi-sources",
      ],
      icon: "BarChart3",
    },
    {
      id: 2,
      title: "Intégration de Systèmes",
      subtitle: "Connectivité & API",
      description:
        "Intégration seamless de vos systèmes existants pour une vue unifiée de votre entreprise",
      features: [
        "APIs REST/SOAP",
        "ETL & Data Pipeline",
        "Middleware",
        "Synchronisation temps réel",
      ],
      icon: "Network",
    },
    {
      id: 3,
      title: "Développement Sur Mesure",
      subtitle: "Solutions Personnalisées",
      description:
        "Applications métier développées selon vos besoins spécifiques avec les dernières technologies",
      features: [
        "Applications web",
        "Solutions mobiles",
        "Portails collaboratifs",
        "Maintenance & support",
      ],
      icon: "Code2",
    },
  ],
  solutions: [
    {
      id: 1,
      sector: "Finance & Banque",
      description:
        "Reporting réglementaire, analyse des risques et tableaux de bord financiers",
      challenges: ["Conformité réglementaire", "Gestion des risques", "Reporting temps réel"],
      benefits: [
        "Réduction des délais de reporting de 70%",
        "Conformité automatisée",
        "Vision consolidée des risques",
      ],
    },
    {
      id: 2,
      sector: "Industrie & Manufacturing",
      description:
        "Optimisation de la production, suivi qualité et maintenance prédictive",
      challenges: [
        "Optimisation production",
        "Qualité produits",
        "Maintenance équipements",
      ],
      benefits: [
        "Augmentation rendement 25%",
        "Réduction défauts 40%",
        "Maintenance prédictive",
      ],
    },
    {
      id: 3,
      sector: "Retail & E-commerce",
      description:
        "Analyse comportement client, gestion stocks et optimisation pricing",
      challenges: ["Comportement client", "Gestion stocks", "Pricing dynamique"],
      benefits: ["ROI marketing +35%", "Ruptures stock -60%", "Marge optimisée +20%"],
    },
  ],
  team: [
    {
      id: 1,
      name: "Marc Dubois",
      role: "CEO & Fondateur",
      expertise: "15+ ans en Business Intelligence",
      description:
        "Expert WebFOCUS certifié avec une vision stratégique de la transformation digitale",
    },
    {
      id: 2,
      name: "Sophie Laurent",
      role: "CTO",
      expertise: "Architecture & Intégration",
      description:
        "Spécialiste en architecture de données et intégration de systèmes complexes",
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Lead Developer",
      expertise: "Développement Full-Stack",
      description:
        "Expert en développement d'applications métier et solutions sur mesure",
    },
  ],
  stats: [
    { label: "Projets réalisés", value: "200+", icon: "TrendingUp" },
    { label: "Clients satisfaits", value: "50+", icon: "Users" },
    { label: "Années d'expérience", value: "15+", icon: "Calendar" },
    { label: "Taux de satisfaction", value: "98%", icon: "Star" },
  ],
  testimonials: [
    {
      id: 1,
      name: "Jean-Pierre Rousseau",
      company: "BNP Paribas",
      role: "Directeur IT",
      content:
        "SENDATAVIZ a transformé notre reporting financier. Les tableaux de bord WebFOCUS nous font gagner un temps précieux.",
      rating: 5,
    },
    {
      id: 2,
      name: "Marie Lecomte",
      company: "Renault Group",
      role: "Chef de Projet BI",
      content:
        "L'équipe SENDATAVIZ a livré une solution BI complète qui dépasse nos attentes. Professionnalisme exemplaire.",
      rating: 5,
    },
    {
      id: 3,
      name: "Philippe Durant",
      company: "Carrefour",
      role: "DSI Retail",
      content:
        "Grâce à SENDATAVIZ, nous avons une vision 360° de nos performances. L'intégration s'est faite sans interruption.",
      rating: 5,
    },
  ],
  faq: [
    {
      id: 1,
      question:
        "Qu'est-ce qui différencie SENDATAVIZ des autres prestataires BI ?",
      answer:
        "Notre expertise spécialisée en WebFOCUS et notre approche sur mesure nous permettent de livrer des solutions parfaitement adaptées à vos besoins métier.",
    },
    {
      id: 2,
      question: "Combien de temps prend un projet BI typique ?",
      answer:
        "Un projet BI standard prend entre 3 à 6 mois selon la complexité. Nous privilégions une approche agile avec des livrables réguliers.",
    },
    {
      id: 3,
      question: "Proposez-vous de la maintenance et du support ?",
      answer:
        "Oui, nous proposons des contrats de maintenance et support 24/7 pour assurer la continuité de vos systèmes critiques.",
    },
    {
      id: 4,
      question: "Travaillez-vous avec d'autres outils que WebFOCUS ?",
      answer:
        "Bien que spécialisés en WebFOCUS, nous maîtrisons l'ensemble de l'écosystème BI : Power BI, Tableau, QlikView, etc.",
    },
  ],
} as const;
