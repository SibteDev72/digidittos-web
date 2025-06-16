// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Digidittos",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/logo.png",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false }
})
