import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

function dedupeLower(arr?: string[]) {
  if (!arr?.length) return []
  return Array.from(new Set(arr.map((s) => s.toLowerCase())))
}

/* BLOG */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
          inferSize: z.boolean().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          color: z.string().optional()
        })
        .optional(),
      tags: z.array(z.string()).default([]).transform(dedupeLower),
      language: z.string().optional(),
      draft: z.boolean().default(false),
      comment: z.boolean().default(true)
    })
})

/* DOCS */
const docs = defineCollection({
  loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]).transform(dedupeLower),
      draft: z.boolean().default(false),
      order: z.number().default(999)
    })
})

/* CASE STUDIES */
const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string().max(180),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
          inferSize: z.boolean().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          color: z.string().optional()
        })
        .optional(),
      tags: z.array(z.string()).default([]).transform(dedupeLower),
      draft: z.boolean().default(false),

      // Campos propios del caso
      industry: z.string().optional(),
      city: z.string().optional(),
      outcome: z.string().optional(),
      impact: z.array(z.string()).default([]),
      external: z
        .object({
          url: z.string().url().optional(),
          label: z.string().optional()
        })
        .partial()
        .optional()
    })
})

export const collections = { blog, docs, cases }
