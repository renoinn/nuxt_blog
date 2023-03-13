import { createClient } from 'microcms-js-sdk'

const runtimeConfig = useRuntimeConfig()
const client = createClient({
  apiKey: runtimeConfig.apiKey,
  serviceDomain: runtimeConfig.serviceDomain,
});

export default client
