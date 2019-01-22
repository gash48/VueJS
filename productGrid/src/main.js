import Vue from 'vue';
import App from './App.vue';
import Resource from './services/index';
import { store } from './store/store';
import VueRouter from 'vue-router';

export const eventBus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [],
  mode : 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

