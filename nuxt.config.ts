// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css : ["~/assets/styles/common.scss"],
  app: {
    baseURL: "/exam-uxui/",
    buildAssetsDir: 'assets'
  }
})
