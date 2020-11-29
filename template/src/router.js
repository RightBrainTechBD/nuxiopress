import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '~/pages/Welcome';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'welcome',
        component: Welcome
      }
    ]
  });
}
