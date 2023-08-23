
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icons'],
  css : ["~/assets/styles/common.scss"],
  app: {
    baseURL: "/exam-uxui/",
    buildAssetsDir: 'assets'
  }
})
