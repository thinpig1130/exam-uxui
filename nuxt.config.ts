
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icons'],
  css : ["~/assets/styles/_variables.scss", "~/assets/styles/_mixin.scss", "~/assets/styles/common.scss"],
  app: {
    baseURL: "/exam-uxui/",
    buildAssetsDir: 'assets'
  }
})
