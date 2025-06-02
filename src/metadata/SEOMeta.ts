type MetaInfo = {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string;
};

export const seoMeta: Record<string, MetaInfo> = {
  "/fr": {
    title: "Clean Net – Nettoyage Professionnel à Genève",
    description:
      "Entreprise de nettoyage à Genève. Services de qualité pour particuliers et professionnels : bureaux, immeubles, vitres, fin de bail, etc.",
    ogImage: "https://www.clean-net.ch/favicon.svg",
    keywords:
      "nettoyage Genève, entreprise de nettoyage, nettoyage fin de bail, nettoyage bureaux, conciergerie Genève, Clean Net",
  },
  "/fr/services": {
    title: "Nos Services – Nettoyage pour Bureaux, Maisons et Immeubles",
    description:
      "Découvrez nos services de nettoyage à Genève : entretien régulier, nettoyage de vitres, après chantier, fin de bail, conciergerie et plus.",
    ogImage: "https://www.clean-net.ch/favicon.svg",
    keywords:
      "services de nettoyage Genève, nettoyage vitres, entretien régulier, nettoyage après travaux, conciergerie immeuble",
  },
  "/fr/contact": {
    title: "Contactez Clean Net – Devis gratuit à Genève",
    description:
      "Prenez contact avec notre équipe basée à Genève pour des services de nettoyage fiables et personnalisés. Nous vous garantissons une réponse rapide, un accompagnement sur mesure et un devis gratuit adapté à vos besoins, que vous soyez un particulier ou une entreprise.",
    ogImage: "https://www.clean-net.ch/favicon.svg",
    keywords:
      "contact nettoyage Genève, devis gratuit nettoyage, entreprise nettoyage contact, Clean Net Genève",
  },
  "/en": {
    title: "Clean Net – Professional Cleaning Services in Geneva",
    description:
      "Cleaning company in Geneva for individuals and businesses: offices, apartments, window cleaning, end-of-lease, and more. Free quote.",
    ogImage: "https://www.clean-net.ch/favicon.svg",
    keywords:
      "cleaning services Geneva, professional cleaning, apartment cleaning, end-of-lease, office cleaning, Clean Net",
  },
  "/en/services": {
    title: "Our Services – Office, Home and Building Cleaning",
    description:
      "Explore our cleaning services in Geneva: regular cleaning, window cleaning, post-construction, end-of-lease, concierge and more.",
    ogImage: "https://www.clean-net.ch/favicon.svg",
    keywords:
      "cleaning services Geneva, window cleaning, office cleaning, concierge service Geneva, after renovation cleaning",
  },
  "/en/contact": {
    title: "Contact Clean Net – Free Quote in Geneva",
    description:
      "Reach out to our Geneva-based team for reliable and professional cleaning services tailored to your needs. We offer fast response times, personalised support, and high-quality results for both residential and commercial spaces.",
    ogImage: "https://www.clean-net.ch/favicon.svg",
    keywords:
      "contact Clean Net Geneva, cleaning company contact, request quote cleaning services Geneva, free quote cleaning",
  },
};
