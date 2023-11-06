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
  tailwindcss: {
    config: {
      corePlugins: {
        preflight: false,
      }
    },
  },
  css: [
    "@/assets/scss/style.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/foundation/variable/color.scss" as color;',
        }
      }
    }
  }
})
