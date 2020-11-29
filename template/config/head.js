/* =========================================================================================
  File Name: head.js
  Description: Nuxt Head configuration
  ----------------------------------------------------------------------------------------
  Item Name: NuxioPress - A Nuxt PWA starter template.
  Author: who-jonson
  Author URL: https://who-jonson.test
========================================================================================== */
export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
};
