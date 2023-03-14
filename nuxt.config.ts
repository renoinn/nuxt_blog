const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN,
    //public: {
    //  apiKey: API_KEY,
    //  serviceDomain: SERVICE_DOMAIN,
    //}
  },
})
