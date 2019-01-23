import Vue from 'vue';
import App from './App.vue';
import Resource from './services/index';
import { store } from './store/store';
import { router } from './navigation/router';

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

