/* =========================================================================================
  File Name: render.js
  Description: Nuxt Render configuration
  ----------------------------------------------------------------------------------------
  Item Name: NuxioPress - A Nuxt PWA starter template.
  Author: who-jonson
  Author URL: https://who-jonson.test
========================================================================================== */
const BASE_HOST = 'nuxiopress.app';
const isDev = process.env.NODE_ENV !== 'production';

export default {
  crossorigin: 'anonymous',
  // http2: true,
  csp: isDev
    ? false
    : {
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': ["'self'"],
        'img-src': ['data:', "'self'", 'https:', `*.${BASE_HOST}`, '*.google-analytics.com'],
        'worker-src': ["'self'", 'blob:', 'https:', `cdn.${BASE_HOST}`],
        'font-src': ["'self'", 'data:', 'https:', `*.${BASE_HOST}`],
        'manifest-src': ["'self'", 'https:', `*.${BASE_HOST}`],
        'style-src': ["'self'", 'https:', "'unsafe-inline'", `*.${BASE_HOST}`],
        'script-src': [
          "'unsafe-inline'",
          "'unsafe-eval'",
          "'self'",
          'https:',
        `*.${BASE_HOST}`,
        '*.google-analytics.com',
        'maps.googleapis.com',
        'polyfill.io'
        ],
        'connect-src': ["'self'", 'https:', `*.${BASE_HOST}`, '*.google-analytics.com'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': [`https://${BASE_HOST}`]
      // 'upgrade-insecure-requests': []
      }
    // addMeta: true
    }

};
