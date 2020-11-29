export default () => ({
  appName: process.env.APP_NAME ? process.env.APP_NAME : 'NuxioPress',
  locale: process.env.APP_LOCALE
});
