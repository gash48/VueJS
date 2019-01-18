import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common';
import stockStorage from './modules/stockStorage';
import stockBalance from './modules/stockBalance';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        common,
        stockBalance,
        stockStorage
    }
});
