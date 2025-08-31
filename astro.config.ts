import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import vercel from '@astrojs/vercel'
import AstroPureIntegration from 'astro-pure'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// Local rehype & remark plugins
import rehypeAutolinkHeadings from './src/plugins/rehype-auto-link-headings.ts'
// Shiki
import {
  addCopyButton,
  addLanguage,
  addTitle,
  transformerNotationDiff,
  transformerNotationHighlight,
  updateStyle
} from './src/plugins/shiki-transformers.ts'
import config from './src/site.config.ts'

// https://astro.build/config
export default defineConfig({
  // Top-Level Options
  site: 'https://calvo-creativo.vercel.app',
  // base: '/astro-pure/',
  trailingSlash: 'never',

  // Adapter
  adapter: vercel(),
  output: 'server',

  image: {
    responsiveStyles: true,
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  integrations: [
    // La integración del tema consume el objeto 'config' anterior
    AstroPureIntegration(config)
  ],

  // Prefetch Options
  prefetch: true,

  // Server Options
  server: { host: true },

  // Markdown Options
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, {}],
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['anchor'] },
          content: { type: 'text', value: '#' }
        }
      ]
    ],
    // Shiki (syntax highlight)
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        updateStyle(),
        addTitle(),
        addLanguage(),
        addCopyButton(2000)
      ]
    }
  },

  experimental: { contentIntellisense: true },
  vite: { plugins: [] }
})
