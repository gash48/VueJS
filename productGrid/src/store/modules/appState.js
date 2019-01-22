import CONSTANTS from '../constants';
import AppUtil from '../commonUtil';

const state = {
    products: [],
    originalProducts: [],
    sortedProducts: [],
    appliedFilters: CONSTANTS.DEFAULT_FILTERS,
    paginationFilter: CONSTANTS.DEFAULT_RECORDS_TO_SHOW,
    sortingFilter: '',
    filterOptions: null,
    sortingValues: CONSTANTS.SORTING_VALUES,
    paginationValues: CONSTANTS.PAGINATION_VALUES,
    currentPage: 1,
    noOfPages: 0,
    hashState: '',
};

const getters = {
    getProducts() {
        return state.products;
    },
    getFilters() {
        return state.filterOptions;
    },
    getAppliedFilters() {
        return state.appliedFilters;
    },
    getPaginationFilter() {
        return state.paginationFilter;
    },
    getSortingFilter() {
        return state.sortingFilter;
    },
    getSortingOptions() {
        return state.sortingValues;
    },
    getPaginationOptions() {
        return state.paginationValues;
    },
    getHashState() {
        return state.hashState
    },
    getCurrentPage() {
        return state.currentPage;
    },
    getNoOfPages() {
        return state.noOfPages;
    },
    getPaginatedProducts() {
        const recordsToShow = state.paginationFilter;
        const offset = (state.currentPage - 1) * recordsToShow;
        return state.products.slice(offset, offset + recordsToShow);
    }
};

const mutations = {
    addProduct() {
        // Later Addon
    },
    setProducts(state, newProducts) {
        state.products = newProducts;
    },
    setFetchedProducts(state, fetchedProducts) {
        state.originalProducts = [...fetchedProducts];
    },
    setSortedProducts(state, products) {
        state.sortedProducts = [...products];
    },
    setAppliedFilters(state, appliedFilters) {
        state.appliedFilters = appliedFilters;
    },
    setFilters(state, newFilters) {
        state.filterOptions = newFilters;
    },
    setHashState(state, newHashState) {
        state.hashState = newHashState;
    },
    setPaginationOption(state, option) {
        state.paginationFilter = option;
    },
    setSortingOption(state, option) {
        state.sortingFilter = option;
    },
    setCurrentPage(state, newPage) {
        state.currentPage = newPage;
    },
    setNoOfPages(state) {
        state.noOfPages = Math.ceil(state.products.length / state.paginationFilter);
    }
};

const actions = {
    fetchProducts({ commit, dispatch }) {
        this._vm.$http.get(CONSTANTS.DB_NODE_PRODUCTS)
            .then(res => {
                const products = res.body;

                commit('setFilters', AppUtil.getFilterValues(products));
                commit('setProducts', products);
                commit('setFetchedProducts', products);
                commit('setSortedProducts', products);
                dispatch('updatePaginationControls');
            }, err => {
                console.log(err)
            });
    },
    filterProducts({ commit, state }, appliedFilters) {
        const filteredProducts = AppUtil.allinOnefilter(state.sortedProducts, appliedFilters);
        commit('setProducts', filteredProducts);
    },
    sortProducts({ commit }, prop) {
        const sortedProducts = AppUtil.getSortedArray(state.products, prop);
        commit('setSortedProducts', sortedProducts);
        commit('setProducts', sortedProducts);
    },
    updatePaginationControls({ commit }) {
        commit('setCurrentPage', 1);
        commit('setNoOfPages');
    },
    updateAppliedFilters({ commit, dispatch }, appliedFilters) {
        commit('setAppliedFilters', appliedFilters);
        dispatch('filterProducts', appliedFilters).then(() => {
            dispatch('updatePaginationControls');
        });
    },
    updateSortingOption({ commit, dispatch }, option) {
        commit('setSortingOption', option);
        dispatch('sortProducts', option).then(() => {
            dispatch('updatePaginationControls');
        });
    },
    updatePaginationOption({ commit, dispatch }, option) {
        commit('setPaginationOption', option);
        dispatch('updatePaginationControls');
    },
    updateCurrentPage({ commit }, newPage) {
        commit('setCurrentPage', newPage);
    },
    resetState({ commit, dispatch, state }) {
        commit('setProducts', state.originalProducts);
        commit('setAppliedFilters', CONSTANTS.DEFAULT_FILTERS);
        commit('setPaginationOption', CONSTANTS.DEFAULT_RECORDS_TO_SHOW);
        commit('setSortingOption', '');
        dispatch('updatePaginationControls');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
