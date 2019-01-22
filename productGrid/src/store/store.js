import Vue from 'vue';
import Vuex from 'vuex';
import AppState from './modules/appState';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        AppState
    }
});
