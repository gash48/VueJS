import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import filters from './modules/filters';
import pagination from './modules/pagination';
import sorting from './modules/sorting';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        products,
        filters,
        pagination,
        sorting
    }
});
