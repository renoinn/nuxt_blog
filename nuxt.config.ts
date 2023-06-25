const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  modules: ["nuxt-microcms-module"],
  nitro: {
    preset: 'aws-lambda',
    serveStatic: false,
  },
  microCMS: {
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
  },
})
