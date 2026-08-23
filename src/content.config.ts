import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Article formats per the content strategy doc — deliberately varied so the
// site doesn't read as one repetitive template (SEO coverage + reader value).
const FORMATS = [
  'pillar-guide',
  'tactical',
  'comparison',
  'data',
  'experience',
  'glossary',
  'resource',
  'market-analysis',
] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(), // hand-written meta description, never auto-derived from the H1
      lang: z.enum(['fr', 'en']),
      pillar: z.enum(['start', 'excel', 'opportunities']),
      format: z.enum(FORMATS),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().default(false),
      // Curated internal links (2-4 expected) — deliberate topic-cluster
      // maillage rather than an auto-generated "related posts" guess.
      relatedSlugs: z.array(z.string()).default([]),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .default([]),
      author: z.string().default('Solutioneer'),
    }),
});

export const collections = { articles };
