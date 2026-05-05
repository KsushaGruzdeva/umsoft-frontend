export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL || '/api'
    }
  },
  
  nitro: {
    preset: 'node-server'
  },
  
  app: {
    head: {
      title: "UMSOFT – Разработка мобильных приложений и веб-сервисов",
      meta: [
        {
          name: "description",
          content: "Профессиональная разработка iOS и Android приложений на заказ."
        }
      ]
    }
  }
})