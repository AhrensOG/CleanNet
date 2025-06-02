// src/data/seoMeta.ts
type MetaInfo = {
  title: string;
  description: string;
  ogImage?: string;
};

export const seoMeta: Record<string, MetaInfo> = {
  "/fr": {
    title: "Clean Net – Nettoyage Professionnel à Genève",
    description:
      "Entreprise de nettoyage à Genève. Services de qualité pour particuliers et professionnels : bureaux, immeubles, vitres, fin de bail, etc.",
    ogImage: "https://www.clean-net.ch/favicon.svg"
    },
  "/fr/services": {
    title: "Nos Services – Nettoyage pour Bureaux, Maisons et Immeubles",
    description:
      "Découvrez nos services de nettoyage à Genève : entretien régulier, nettoyage de vitres, après chantier, fin de bail, conciergerie et plus.",
    ogImage: "https://www.clean-net.ch/favicon.svg"
    },
  "/fr/contact": {
    title: "Contactez Clean Net – Devis gratuit à Genève",
    description:
      "Prenez contact avec notre équipe à Genève. Réponse rapide, devis gratuit pour vos besoins de nettoyage professionnel.",
    ogImage: "https://www.clean-net.ch/favicon.svg"
    },
  "/en": {
    title: "Clean Net – Professional Cleaning Services in Geneva",
    description:
      "Cleaning company in Geneva for individuals and businesses: offices, apartments, window cleaning, end-of-lease, and more. Free quote.",
    ogImage: "https://www.clean-net.ch/favicon.svg"
    },
  "/en/services": {
    title: "Our Services – Office, Home and Building Cleaning",
    description:
      "Explore our cleaning services in Geneva: regular cleaning, window cleaning, post-construction, end-of-lease, concierge and more.",
    ogImage: "https://www.clean-net.ch/favicon.svg"
    },
  "/en/contact": {
    title: "Contact Clean Net – Free Quote in Geneva",
    description:
      "Reach out to our Geneva-based team for professional cleaning services. Quick response and personalised support.",
    ogImage: "https://www.clean-net.ch/favicon.svg"
    },
};
