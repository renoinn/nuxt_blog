import { createClient } from 'microcms-js-sdk'

export const getClient = () => {
  const runtimeConfig = useRuntimeConfig()
  const client = createClient({
    apiKey: runtimeConfig.apiKey,
    serviceDomain: runtimeConfig.serviceDomain,
  });
  return client
}
