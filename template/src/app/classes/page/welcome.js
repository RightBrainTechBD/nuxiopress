import { Component, mixins } from 'nuxt-property-decorator';
import NuxioPress from '~/app/classes/nuxiopress';
import Logo from '~/components/Logo.vue';
import VuesaxLogo from '~/components/VuesaxLogo.vue';

@Component({
  components: {
    Logo,
    VuesaxLogo
  }
})
export default class Welcome extends mixins(NuxioPress) {

}
