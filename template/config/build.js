/* =========================================================================================
  File Name: build.js
  Description: Nuxt Build configuration
  ----------------------------------------------------------------------------------------
  Item Name: NuxioPress - A Nuxt PWA starter template.
  Author: who-jonson
  Author URL: https://who-jonson.test
========================================================================================== */
export default {
  corejs: '3',

  publicPath: '/_nuxiopress/',

  extractCSS: true,

  babel: {
    // eslint-disable-next-line no-unused-vars
    presets ({ isServer }, [preset, options]) {
      return [
        [
          preset,
          {
            corejs: { version: 3 },
            ...options
          }
        ]
      ];
    }
  },

  devtools: process.env.NODE_ENV !== 'production',

  filenames: {
    app: ({ isDev }) => isDev ? '[name].js' : 'js/[id].[contenthash].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[id].[contenthash].js',
    css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'
  }

};
