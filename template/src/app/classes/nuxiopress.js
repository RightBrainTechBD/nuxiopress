import { Component, State, Vue } from 'nuxt-property-decorator';

@Component
export default class NuxioPress extends Vue {
  /**
   * This define the name of the app
   * @type {string}
   */
  @State(state => state.appName) appName;

  /**
   * This define the locale of the app
   * @type {string}
   */
  @State(state => state.locale) locale;
}
