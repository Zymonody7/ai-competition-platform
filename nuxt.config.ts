// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['element-plus/dist/index.css', '~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
