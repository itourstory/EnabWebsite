export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'عنب',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'description', content: 'نظام عنب اللطيف' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/font.css',
    '~/assets/css/quick-website.css',
    '~/assets/css/responsive.css',
    '~/assets/scss/app.scss',
    'vuejs-dialog/dist/vuejs-dialog.min.css',
    'vue-select/dist/vue-select.css',
    '~/node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss',
    '~/node_modules/@fortawesome/fontawesome-free/scss/regular.scss',
    '~/node_modules/@fortawesome/fontawesome-free/scss/solid.scss',
    '~/node_modules/@fortawesome/fontawesome-free/scss/brands.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vuejs-dialog', mode: 'client'},
    {src: '~/plugins/vuejs-select.js', mode: 'client'},
    {src: '~/plugins/vue-long-click.js', mode: 'client'},
    {src: '~/plugins/v-tooltip.js', mode: 'client'},
    { src: "~plugins/crisp.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
    '@nuxtjs/auth-next'

  ],
  auth: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:'http://127.0.0.1:8000/api'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false, // disables the icon module
    manifest: {
      name: 'Enab App',
      lang: 'en',
      useWebmanifestExtension: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
        '~/assets/scss/variables.scss',
    ]
  }
}
