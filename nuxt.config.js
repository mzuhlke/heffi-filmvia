export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  

  /*
   ** Global CSS
   */
  css: ['video.js/dist/video-js.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   **  { src: '~/plugins/vue-plyr', mode: 'client' },
   */
  plugins: [
    { src: `~plugins/vimeo-player` , ssr: false },
    { src: '~plugins/videoPlayer.js', ssr: false },
    { src: '~/plugins/vue-plyr', ssr: false },
    { src: '~plugins/nuxt-video-player-plugin.js', ssr: false },
    { src: `~plugins/qr`, ssr: false },
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: "@/plugins/vuedarkmode.js", ssr: false}
  
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/router-extras',
  ],
  /*
   ** publicRuntimeConfig
   ** See https://stackoverflow.com/questions/67703133/how-to-use-env-variables-in-nuxt-2-or-3
   */
  
 
  publicRuntimeConfig: {
    webUrlVariable:  'https://images.filmvia.com/',
    apiUrlVariable:  'https://api.filmvia.com/api/',
    //apiUrlVariable:  'https://filmvia.katexpo.com/api/',
   // apiUrlVariable:   'http://localhost:8888/api/',
  },
/*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  
  
  axios: {
    baseURL: 'https://api.filmvia.com/api',
   // baseURL: 'https://filmvia.katexpo.com/api',
   // baseURL: 'http://localhost:8888/api',

    //  credentials: true, // this says that in the request the httponly cookie should be sent
  },
  auth: {
    redirect: {
      login: '/login',
      home: false,
      logout: '/',
      callback: false, // not used here in our case
    },
    cookie:false,
    localStorage: false, // REALLY not secure, so nah
    resetOnError: true, // kick the user if any error happens w/ the auth
    strategies: {
      local: {
        scheme: 'local', // used for the refreshToken flow
        token: {
          property: 'token',
          maxAge: 60 * 4, // only useful if not detected on the login
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          maxAge: 60 * 14 * 24 // 1 month
        },
        register: {
          property: 'register',
          method: 'post',
          propertyName: 'token',
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' },
          logout: { url: '/auth/logout', method: 'get' },
          register: {url: '/auth/register', method: 'post'},
          user: false, // as told above, this one is not needed
        },
        tokenRequired: true,
        tokenType: 'JWT',
      },
    },
  
  
  },
  router: {
    middleware: ['auth'],
  },
  loading: {
    color: 'green',
    height: '25px'
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },
    vendor: ['vue-vimeo_player'],
  },
}
