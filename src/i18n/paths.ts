import { pillarSlugs, staticSlugs, type Lang, type Pillar } from './ui';

export function homePath(lang: Lang): string {
  return `/${lang}/`;
}

export function pillarPath(lang: Lang, pillar: Pillar): string {
  return `/${lang}/${pillarSlugs[lang][pillar]}/`;
}

export function blogPath(lang: Lang): string {
  return `/${lang}/${staticSlugs[lang].blog}/`;
}

export function toolsPath(lang: Lang): string {
  return `/${lang}/${staticSlugs[lang].tools}/`;
}

export function aboutPath(lang: Lang): string {
  return `/${lang}/${staticSlugs[lang].about}/`;
}

export function articlePath(lang: Lang, slug: string): string {
  return `/${lang}/${staticSlugs[lang].blog}/${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
