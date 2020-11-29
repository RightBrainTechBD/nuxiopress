import path from 'path';
import {
  css,
  pwa,
  head,
  build,
  modules,
  plugins,
  render,
  sitemap,
  buildModules,
  publicRuntimeConfig,
  privateRuntimeConfig
} from './config';

export default {
  // mode: 'universal',

  /*
  ** Headers of the page
  */
  head,

  /*
  ** PWA Configuration
  */
  pwa,
  /*
  ** Global CSS
  */
  css,

  /*
  ** Nuxt Style Resources
  */
  styleResources: {
    scss: ['~assets/sass/_variables.scss', '~assets/sass/_mixins.scss']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins,

  /*
  ** Auto import components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules,

  /*
  ** Nuxt.js modules
  */
  modules,
  /*
  ** Private Runtime configuration
  */
  privateRuntimeConfig,
  /*
  ** Public Runtime configuration
  */
  publicRuntimeConfig,
  /*
  ** Axios module configuration
  */
  axios: {},
  /*
  ** Content module configuration
  */
  content: {},
  /*
  ** Nuxt target
  */
  target: 'server',
  /*
  ** The ssr Property
  */
  ssr: true,
  /*
  ** Build configuration
  */
  build,
  /*
  ** Nuxt Source directory
  */
  srcDir: 'src/',
  /*
  ** Build directory
  */
  buildDir: '.nuxiopress/',
  /*
  ** The globalName Property
  */
  globalName: 'nuxiopress',
  /*
  ** Generated Dist directory
  */
  generate: {
    dir: 'nuxiopress-dist/'
  },
  /*
  ** The cli Property
  */
  cli: {
    badgeMessages: ['App is Running using "NUXIOPRESS!"']
  },
  /*
  ** Sitemap Config
  */
  sitemap,
  /*
  ** Render Config
  */
  render,
  /*
  ** colorMode Config
  */
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxiopress-color-mode-script',
    globalName: '__NUXIOPRESS_COLOR_MODE__',
    componentName: 'ColorScheme',
    cookie: {
      key: 'nuxiopress-mode'
    }
  },
  /*
    ** tailwindcss Config
    */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  }
};
