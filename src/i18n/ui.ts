export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const pillars = ['start', 'excel', 'opportunities'] as const;
export type Pillar = (typeof pillars)[number];

// Language-native URL segments — French readers search French keywords, so
// pillar/section slugs are localized rather than mechanically identical.
export const pillarSlugs: Record<Lang, Record<Pillar, string>> = {
  fr: {
    start: 'debuter',
    excel: 'exceller',
    opportunities: 'opportunites',
  },
  en: {
    start: 'start',
    excel: 'excel',
    opportunities: 'opportunities',
  },
};

export const staticSlugs: Record<Lang, { blog: string; tools: string; about: string }> = {
  fr: { blog: 'blog', tools: 'outils', about: 'a-propos' },
  en: { blog: 'blog', tools: 'tools', about: 'about' },
};

export const pillarMeta: Record<
  Lang,
  Record<Pillar, { label: string; tagline: string; intro: string; metaTitle: string; metaDescription: string }>
> = {
  fr: {
    start: {
      label: 'Débuter',
      tagline: 'Comprendre le métier de presales et y entrer.',
      intro:
        'Vous découvrez le métier de presales, ingénieur avant-vente ou solutions engineer ? Cette section rassemble ce qu’il faut comprendre avant de vous lancer : ce que recouvre vraiment ce métier, comment y entrer avec ou sans profil technique, et le vocabulaire à maîtriser pour ne pas se perdre dans les intitulés de poste.',
      metaTitle: 'Débuter en presales : le guide pour entrer dans le métier',
      metaDescription:
        'Comprendre le métier de presales / ingénieur avant-vente, apprendre comment s’y reconvertir et connaître le vocabulaire essentiel. Guides pratiques par des praticiens.',
    },
    excel: {
      label: 'Exceller',
      tagline: 'Progresser une fois en poste : méthode, outils, retours de terrain.',
      intro:
        'Vous êtes déjà en poste ? Cette section couvre la pratique quotidienne du presales : mener une découverte client, structurer une démo qui convainc, gérer les objections techniques, réussir un POC ou répondre à un appel d’offres — avec des méthodes concrètes, pas des généralités.',
      metaTitle: 'Exceller en presales : méthode et outils pour progresser',
      metaDescription:
        'Discovery, démo technique, gestion des objections, POC, RFP : des guides pratiques pour progresser une fois en poste de presales / sales engineer.',
    },
    opportunities: {
      label: 'Opportunités',
      tagline: 'Évolution de carrière, marché de l’emploi, rémunération.',
      intro:
        'Où le métier de presales peut-il mener ? Cette section traite des sujets de carrière : rémunération et négociation salariale, évolutions possibles vers le management, la vente ou le produit, marché de l’emploi, et vie de freelance en presales.',
      metaTitle: 'Opportunités de carrière en presales : salaires et évolutions',
      metaDescription:
        'Salaire presales en France, évolutions de carrière, marché de l’emploi et freelance : les ressources pour penser la suite de votre carrière presales.',
    },
  },
  en: {
    start: {
      label: 'Start',
      tagline: 'Understand the presales craft and break into it.',
      intro:
        'New to presales, sales engineering, or solutions engineering? This section covers what the role actually involves, how to break in with or without a technical background, and the vocabulary you need to make sense of the many overlapping job titles.',
      metaTitle: 'Getting Started in Presales: A Guide to Breaking Into the Field',
      metaDescription:
        'Understand what presales / sales engineering actually is, how to break in, and the key terms to know. Practical guides written by practitioners.',
    },
    excel: {
      label: 'Excel',
      tagline: 'Level up once you’re in the seat: method, tools, field lessons.',
      intro:
        'Already in the role? This section focuses on day-to-day practice: running effective discovery calls, structuring demos that land, handling technical objections, running a tight POC, and responding to RFPs — concrete method, not platitudes.',
      metaTitle: 'Excel at Presales: Method and Tools for the Job',
      metaDescription:
        'Discovery, technical demos, objection handling, POCs, RFPs: practical guides to get better at presales / sales engineering once you’re in the seat.',
    },
    opportunities: {
      label: 'Opportunities',
      tagline: 'Career growth, the job market, and compensation.',
      intro:
        'Where can a presales career lead? This section covers compensation and negotiation, career paths into management, sales, or product, the state of the job market, and what it’s like to go freelance in presales.',
      metaTitle: 'Presales Career Opportunities: Salary and Growth Paths',
      metaDescription:
        'Presales salary data, career paths, the job market, and freelancing: resources to help you think about what comes next in a presales career.',
    },
  },
};

export const ui = {
  fr: {
    'site.tagline': 'Le presales expliqué par des praticiens.',
    'nav.home': 'Accueil',
    'nav.start': 'Débuter',
    'nav.excel': 'Exceller',
    'nav.opportunities': 'Opportunités',
    'nav.tools': 'Outils',
    'nav.blog': 'Blog',
    'nav.about': 'À propos',
    'meta.readingTime': 'min de lecture',
    'meta.updated': 'Mis à jour le',
    'meta.publishedOn': 'Publié le',
    'home.heroTitle': 'Le métier de presales, expliqué par ceux qui le pratiquent.',
    'home.heroSubtitle':
      'Solutioneer est un site indépendant pour les sales engineers, ingénieurs avant-vente et solutions consultants — guides concrets, retours d’expérience, aucune fiche métier générique.',
    'home.cta': 'Découvrir les guides',
    'home.pillarsTitle': 'Trois étapes, une carrière',
    'home.pillarsSubtitle': 'La navigation du site suit les grandes étapes d’une carrière presales.',
    'home.latestTitle': 'Derniers articles',
    'home.latestSubtitle': 'Les publications les plus récentes, tous piliers confondus.',
    'home.viewAll': 'Voir tous les articles',
    'pillar.articlesTitle': 'Tous les articles',
    'pillar.empty': 'Les premiers articles de cette catégorie arrivent très bientôt.',
    'blog.title': 'Blog',
    'blog.subtitle': 'Tous les articles Solutioneer, classés par pilier.',
    'blog.filterAll': 'Tous',
    'blog.readMore': 'Lire l’article',
    'blog.empty': 'Aucun article dans cette catégorie pour le moment.',
    'article.relatedTitle': 'Articles liés',
    'article.pillarCta': 'Voir tous les articles',
    'article.faqTitle': 'Questions fréquentes',
    'article.shareTitle': 'Partager',
    'breadcrumb.home': 'Accueil',
    'breadcrumb.blog': 'Blog',
    'footer.description': 'Ressources indépendantes pour les professionnels du presales, de la découverte du métier à l’évolution de carrière.',
    'footer.sections': 'Sections',
    'footer.legal': 'À propos',
    'footer.rights': 'Tous droits réservés.',
    '404.eyebrow': 'Erreur 404',
    '404.title': 'Cette page n’existe pas.',
    '404.body': 'Le lien est peut-être obsolète, ou la page a été déplacée. Repartez de l’accueil ou du blog.',
    '404.ctaHome': 'Retour à l’accueil',
    '404.ctaBlog': 'Voir le blog',
    'tools.title': 'Outils',
    'tools.subtitle': 'Des ressources interactives pour la pratique quotidienne du presales.',
    'tools.comingSoonTitle': 'Les premiers outils arrivent bientôt',
    'tools.comingSoonBody':
      'Simulateur de salaire, checklist de préparation de démo, gabarits de discovery : les premiers outils interactifs de Solutioneer sont en préparation.',
    'about.title': 'À propos de Solutioneer',
    'lang.switchLabel': 'English',
    'skip.toContent': 'Aller au contenu principal',
  },
  en: {
    'site.tagline': 'Presales, explained by practitioners.',
    'nav.home': 'Home',
    'nav.start': 'Start',
    'nav.excel': 'Excel',
    'nav.opportunities': 'Opportunities',
    'nav.tools': 'Tools',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'meta.readingTime': 'min read',
    'meta.updated': 'Updated on',
    'meta.publishedOn': 'Published on',
    'home.heroTitle': 'The presales craft, explained by people who practice it.',
    'home.heroSubtitle':
      'Solutioneer is an independent resource for sales engineers, presales consultants, and solutions architects — practical guides and field lessons, not generic career pages.',
    'home.cta': 'Explore the guides',
    'home.pillarsTitle': 'Three stages, one career',
    'home.pillarsSubtitle': 'The site’s navigation follows the major stages of a presales career.',
    'home.latestTitle': 'Latest articles',
    'home.latestSubtitle': 'The most recent posts, across all three pillars.',
    'home.viewAll': 'View all articles',
    'pillar.articlesTitle': 'All articles',
    'pillar.empty': 'The first articles in this category are coming very soon.',
    'blog.title': 'Blog',
    'blog.subtitle': 'Every Solutioneer article, organized by pillar.',
    'blog.filterAll': 'All',
    'blog.readMore': 'Read article',
    'blog.empty': 'No articles in this category yet.',
    'article.relatedTitle': 'Related articles',
    'article.pillarCta': 'See all articles',
    'article.faqTitle': 'Frequently asked questions',
    'article.shareTitle': 'Share',
    'breadcrumb.home': 'Home',
    'breadcrumb.blog': 'Blog',
    'footer.description': 'Independent resources for presales professionals, from breaking into the field to growing a career.',
    'footer.sections': 'Sections',
    'footer.legal': 'About',
    'footer.rights': 'All rights reserved.',
    '404.eyebrow': '404 error',
    '404.title': 'This page doesn’t exist.',
    '404.body': 'The link may be outdated, or the page has moved. Head back to the homepage or the blog.',
    '404.ctaHome': 'Back to home',
    '404.ctaBlog': 'Browse the blog',
    'tools.title': 'Tools',
    'tools.subtitle': 'Interactive resources for day-to-day presales work.',
    'tools.comingSoonTitle': 'The first tools are on their way',
    'tools.comingSoonBody':
      'A salary simulator, a demo-prep checklist, discovery call templates: Solutioneer’s first interactive tools are in the works.',
    'about.title': 'About Solutioneer',
    'lang.switchLabel': 'Français',
    'skip.toContent': 'Skip to main content',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr'];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
