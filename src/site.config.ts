// src/site.config.ts
import type { Config } from 'astro-pure/types'

const config: Config = {
  // === Básicos ===
  title: 'Calvo Creativo',
  author: 'Roger Murillo',
  description:
    'SEO estratégico + Python. Topical authority real, automatización y contenido que sí posiciona.',

  // Idioma y formato de fechas
  locale: {
    lang: 'es-ES',
    attrs: 'es_ES',
    dateLocale: 'es-ES',
    dateOptions: { day: '2-digit', month: 'short', year: 'numeric' }
  },

  // Logo
  logo: { src: 'src/assets/avatar.png', alt: 'Roger Murillo' },

  // === Global ===
  titleDelimiter: '•',
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  head: [],
  customCss: [],

  // Header (menú superior)  ← usar "menu" (no "links")
  header: {
    menu: [
      { title: 'Home', link: '/' },
      { title: 'Services', link: '/services' },
      { title: 'Case Studies', link: '/case-studies' },
      { title: 'How We Work', link: '/how-we-work' },
      { title: 'Resources', link: '/resources' },
      { title: 'Blog', link: '/blog' },
      { title: 'About', link: '/about' },
      { title: 'Contact', link: '/contact' }
    ]
  },

  // Footer
  footer: {
    year: new Date().getFullYear().toString(),
    credits: true,
    social: {
      github: 'https://github.com/germur'
      // (LinkedIn no está soportado aquí)
    },
    // Ponemos LinkedIn en "links", que sí acepta cualquier URL
    links: [
      { title: 'LinkedIn', link: 'https://www.linkedin.com/in/germur' }
    ]
  },

  // Contenido
  content: {
    externalLinks: { content: ' ↗', properties: {} },
    blogPageSize: 8,
    share: [] // Ej: ['x','bluesky','weibo']
  },

  // Integraciones del tema
  integ: {
    pagefind: true,

    waline: { enable: false },

    typography: {
      class: 'prose text-base text-muted-foreground',
      blockquoteStyle: 'normal',
      inlineCodeBlockStyle: 'modern'
    },

    quote: { server: '', target: '' },
    mediumZoom: { enable: false }
  }
}

export default config
export const integ = config.integ

// Para /terms/list.astro
export const terms = {
  title: 'Legal & Términos',
  list: [
    { title: 'Privacy Policy', link: '/terms/privacy-policy' },
    { title: 'Terms & Conditions', link: '/terms/terms-and-conditions' },
    { title: 'Disclaimer', link: '/terms/disclaimer' },
    { title: 'Copyright', link: '/terms/copyright' }
  ]
}
