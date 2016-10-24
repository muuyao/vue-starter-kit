import Vue from 'vue';
import VueRouter from 'vue-router';

import aboutRoute from './about';
import homeRoute from './home';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
  routes: [
    homeRoute,
    aboutRoute
  ]
});
