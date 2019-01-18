import Vue from 'vue';
import App from './App.vue';
import Resource from './services/index';
import { store } from './store/store';
import { router } from './navigation/router';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

