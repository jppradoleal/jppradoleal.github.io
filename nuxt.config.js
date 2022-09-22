import locales from './static/locales.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'João Prado - Desenvolvedor Web 🚀',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#333333' },
      {
        hid: 'description',
        name: 'description',
        content: 'Precisa de um site profissional, performático e que supra suas demandas? Tenha seu site na primeira página do google com as melhores técnicas de SEO Optimization!',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'João Prado - Desenvolvedor Web 🚀' },
      { name: 'og:description', content: 'Precisa de um site profissional, performático e que supra suas demandas? Tenha seu site na primeira página do google com as melhores técnicas de SEO Optimization!' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://jppradoleal.github.io' },
      {
        name: 'google-site-verification',
        content: 'JsSsfyYLLBmLBuE9z4WFd6Of1UwFldPHFVXf3cUn_v4',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=PT+Sans:wght@700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/gtm',
  ],

  i18n: {
    baseUrl: 'https://jppradoleal.github.io',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
      },
      {
        code: 'pt-BR',
        iso: 'pt-BR',
      },
    ],
    defaultLocale: 'en-US',
    vueI18n: {
      messages: locales,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  gtm: {
    id: 'G-CXD2TGS29T',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
