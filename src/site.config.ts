// src/site.config.ts
import type { Config } from 'astro-pure/types'

const config: Config = {
  // === Básicos ===
  title: 'Calvo Creativo',
  author: 'Roger Murillo',
  description: 'SEO estratégico + Python. Topical authority real, automatización y contenido que sí posiciona.',

  // Idioma y formato de fechas
  locale: {
    lang: 'es-ES',
    attrs: 'es_ES',
    dateLocale: 'es-ES',
    dateOptions: { day: '2-digit', month: 'short', year: 'numeric' }
  },

  // Logo (usa el avatar que ya trae el tema)
  logo: { src: 'src/assets/avatar.png', alt: 'Roger Murillo' },

  // === Global ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  head: [],
  customCss: [],

  // Header (menú superior)
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'About', link: '/about' },
      { title: 'Contact', link: '/contact' }
    ]
  },

  // Footer (nota: 'year' es requerido; NO existe 'registration')
  footer: {
    year: new Date().getFullYear().toString(),
    credits: true,
    social: {
      github: 'https://github.com/germur'
    }
  },

  // Contenido (nota: externalLinks va NESTED, no como 'externalLinksContent')
  content: {
    externalLinks: { content: ' ↗', properties: {} },
    blogPageSize: 8,
    share: [] // ['x', 'bluesky', 'weibo'] si quieres mostrar botones
  },

  // Integraciones del tema: algunos campos son requeridos por tipos
  integ: {
    pagefind: true,

    // Comentarios apagados por ahora
    waline: { enable: false },

    // Tipografía (opcional; claves admitidas por el tipo)
    typography: {
      class: 'prose text-base text-muted-foreground',
      blockquoteStyle: 'normal',
      inlineCodeBlockStyle: 'modern'
    },

    // Requeridos por los tipos del tema; los dejamos desactivados
    quote: { server: '', target: '' },
    mediumZoom: { enable: false }
  }
}

export default config
export const integ = config.integ
export const terms = [
  { title: 'Privacy Policy', link: '/terms/privacy-policy' },
  { title: 'Terms & Conditions', link: '/terms/terms-and-conditions' },
  { title: 'Disclaimer', link: '/terms/disclaimer' },
  { title: 'Copyright', link: '/terms/copyright' }
]


