// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@nuxtjs/robots', '@nuxtjs/seo', '@nuxtjs/sitemap'],
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/404', '/404/'], // для SSG
      crawlLinks: false, // Отключаем автоматический обход ссылок
    }
  },
  css: ['~/assets/main-CG_6Mkbz.css'],
  extends: [
    '@umsoft/nuxt-forms-layers',
  ],
  routeRules: {
    '/': { prerender: true, static: true },
    '/404*': { prerender: true, static: true },
    '/api/**': { prerender: false, ssr: false }, // API routes
    '/**': { prerender: false, ssr: true }, // Все остальные страницы
  },
  app: {
    head: {
      title: "UMSOFT – Разработка мобильных приложений и веб-сервисов",
      meta: [
        {
          name: "description",
          content: "Профессиональная разработка iOS и Android приложений на заказ. Аналитика, дизайн, внедрение и поддержка. Реализуем ваш проект любой сложности."
        },
        {
          name: "keywords",
          content: "разработка мобильных приложений, заказать мобильное приложение, создание приложений iOS Android, разработка веб-сервисов, студия мобильной разработки, приложение для бизнеса под ключ, заказная разработка"
        },
        {
          name: "robots",
          content: "index, follow"
        }
      ]
    }
  }
})