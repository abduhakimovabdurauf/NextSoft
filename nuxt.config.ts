// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID
  },
  plugins: [
    '~/plugins/aos.client.js'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        }
      ]
    }
  },
  // css: ['sweetalert2/dist/sweetalert2.css'],
})