// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  ssr: true,
  devServer: {
    port: 3456,
    host: '0.0.0.0',
  },
  app: {
    baseURL: process.env.BASE_URL || '/nuxtapp202403023/',
    head: {
      link: [
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/google-font.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/bootstrap.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/fonts.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/style.css' },
      ],
      script: [
        { src: process.env.BASE_URL + 'assets/js/core.min.js' },
        { src: process.env.BASE_URL + 'assets/js/script.js' },
        // { src: process.env.BASE_URL + 'assets/js/swiper-bundle.min.js' },
      ],
    },
  },
})
