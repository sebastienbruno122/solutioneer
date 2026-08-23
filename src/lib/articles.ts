import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang, Pillar } from '../i18n/ui';

export type Article = CollectionEntry<'articles'>;

/** Slug without its `fr/` or `en/` folder prefix (the loader's `id` includes it). */
export function slugOf(article: Article): string {
  return article.id.replace(/^(fr|en)\//, '');
}

function isPublished(article: Article): boolean {
  return !article.data.draft && article.data.pubDate.getTime() <= Date.now();
}

export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('articles', (entry) => entry.data.lang === lang && isPublished(entry));
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getArticlesByPillar(lang: Lang, pillar: Pillar): Promise<Article[]> {
  const articles = await getArticles(lang);
  return articles.filter((a) => a.data.pillar === pillar);
}

export async function getArticleBySlug(lang: Lang, slug: string): Promise<Article | undefined> {
  const articles = await getArticles(lang);
  return articles.find((a) => slugOf(a) === slug);
}

export function getRelatedArticles(article: Article, all: Article[]): Article[] {
  const bySlug = new Map(all.map((a) => [slugOf(a), a]));
  const explicit = article.data.relatedSlugs
    .map((slug) => bySlug.get(slug))
    .filter((a): a is Article => Boolean(a));

  if (explicit.length > 0) return explicit.slice(0, 4);

  // Fallback: other articles from the same pillar, most recent first.
  return all
    .filter((a) => a.id !== article.id && a.data.pillar === article.data.pillar)
    .slice(0, 3);
}

export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
