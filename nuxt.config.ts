const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  modules: [
    "nuxt-microcms-module",
    "@nuxtjs/tailwindcss",
  ],
  nitro: {
    preset: "aws-lambda",
    serveStatic: false,
  },
  microCMS: {
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
  },
  css: [
    "@/assets/scss/global.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variable.scss" as variable;',
        }
      }
    }
  }
})
