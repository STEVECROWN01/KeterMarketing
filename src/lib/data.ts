export interface Project {
  slug: string
  title: string
  category: string
  tags: string[]
  url: string
  image: string
  description: string
  process: string[]
  result: string
}

export const projects: Record<string, Project> = {
  'win-agro-tech': {
    slug: 'win-agro-tech',
    title: 'Win Agro Tech',
    category: 'Site Vitrine',
    tags: ['UI Design', 'UX Design', 'WordPress'],
    url: 'https://www.winagrotech.com/',
    image: '/portfolio-winagrotech.png',
    description: 'Win Agro Tech est une entreprise béninoise spécialisée dans la formation agricole, l\'élevage et la vente de volailles. L\'objectif était de créer une présence en ligne professionnelle qui inspire confiance et génère des contacts qualifiés.',
    process: [
      'Nous avons d\'abord analysé la cible : agriculteurs, éleveurs et investisseurs locaux, pour comprendre leurs besoins et leur niveau de maturité numérique.',
      'Nous avons conçu plusieurs concepts visuels alignés avec l\'identité de la marque. Le concept retenu privilégiait une palette terreuse, des images authentiques de terrain et une navigation simple.',
      'Nous avons conçu les pages clés : accueil, services, formations, contact — puis préparé les maquettes pour le développement WordPress.',
      'Développement complet sous WordPress avec un formulaire de capture de leads, intégration WhatsApp, et optimisation des performances et du SEO local.',
    ],
    result: 'Un site vitrine professionnel, rapide et optimisé pour le SEO local qui a multiplié par 3 les demandes de contact entrantes.',
  },
  'academia-helm': {
    slug: 'academia-helm',
    title: 'Academia Helm',
    category: 'SaaS / Web App',
    tags: ['UI Design', 'UX Design', 'Web App'],
    url: 'https://www.academiahelm.com/',
    image: '/portfolio-academiahelm.png',
    description: 'Academia Helm est une plateforme SaaS de pilotage éducatif nouvelle génération conçue pour les établissements scolaires africains. Elle centralise la gestion des élèves, des notes, des présences et de la communication parents-enseignants.',
    process: [
      'Audit complet des besoins : entretiens avec des directeurs d\'école, enseignants et parents pour cartographier les points de friction du système traditionnel.',
      'Architecture UX : définition des parcours utilisateurs pour 4 profils distincts (administrateur, enseignant, parent, élève) avec des tableaux de bord adaptés à chaque rôle.',
      'Design System complet : composants réutilisables, palette de couleurs, typographie et grille responsive, pensés pour une utilisation sur mobile en zones à faible connectivité.',
      'Développement et déploiement de l\'application web complète, avec un onboarding simplifié pour maximiser l\'adoption.',
    ],
    result: 'Une application web SaaS complète déployée dans plusieurs établissements pilotes au Bénin et au Togo.',
  },
  'afribayit': {
    slug: 'afribayit',
    title: 'AfriBayit',
    category: 'Marketplace',
    tags: ['UI Design', 'UX Design', 'Marketplace'],
    url: 'https://afri-bayit.vercel.app/',
    image: '/portfolio-afribayit.png',
    description: 'AfriBayit est une marketplace immobilière pan-africaine permettant l\'achat, la vente et la location de biens immobiliers à travers l\'Afrique. La plateforme vise à fluidifier et sécuriser les transactions immobilières sur le continent.',
    process: [
      'Recherche marché approfondie sur les plateformes immobilières existantes en Afrique pour identifier les opportunités différenciatrices et les besoins non satisfaits.',
      'Conception d\'une expérience utilisateur intuitive : recherche par localisation, filtres avancés, fiches biens détaillées et système de messagerie intégrée entre acheteurs et vendeurs.',
      'Design responsive pensé mobile-first, avec une attention particulière aux temps de chargement pour les connexions à débit limité.',
      'Développement de la marketplace complète avec gestion des annonces, tableau de bord vendeur, système de favoris et intégration de la cartographie.',
    ],
    result: 'Une marketplace fonctionnelle et moderne, prête à être déployée à l\'échelle du continent avec une expérience utilisateur premium.',
  },
  'foncier-facile-afrique': {
    slug: 'foncier-facile-afrique',
    title: 'Foncier Facile Afrique',
    category: 'Site Vitrine',
    tags: ['UI Design', 'UX Design', 'WordPress'],
    url: 'https://www.foncierfacileafrique.fr/',
    image: '/portfolio-foncierfacile.png',
    description: 'Foncier Facile Afrique simplifie l\'achat de terrains sécurisés au Bénin pour la diaspora africaine en France et en Europe. Le site devait inspirer confiance, rassurer sur la légalité des transactions et générer des demandes de contact.',
    process: [
      'Analyse du profil cible : diaspora béninoise en Europe, méfiante des arnaques immobilières, recherchant des garanties légales solides et un interlocuteur de confiance.',
      'Stratégie de contenu axée sur la preuve sociale : témoignages clients, certifications légales, processus transparent étape par étape pour rassurer et convaincre.',
      'Design premium avec une identité visuelle forte évoquant la fiabilité et le sérieux. Photos de terrains réels, cartes et documents légaux mis en valeur.',
      'Développement WordPress avec formulaire de qualification des leads, intégration WhatsApp et CRM pour le suivi des prospects.',
    ],
    result: 'Un site vitrine qui convertit les visiteurs méfiants en leads qualifiés grâce à une stratégie de contenu centrée sur la confiance.',
  },
}

export const portfolioList = Object.values(projects).map((p) => ({
  slug: p.slug,
  title: p.title,
  image: p.image,
  category: p.category,
}))
