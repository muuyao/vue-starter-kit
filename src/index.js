import Vue from 'vue';

import store from './store';
import router from './routes/';
import App from './views/app';

import './assets/styles/reset.css';

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  router,
  render: h => h(App)
});
