import CONSTANTS from '../constants';
import AppUtil from '../commonUtil';

const state = {
    products: [],
    originalProducts: [],
    sortedProducts: [],
    hashState: '',
};

const getters = {
    getProducts() {
        return state.products;
    },
    getHashState() {
        return state.hashState
    }
};

const mutations = {
    addProduct(state, product) {
        state.originalProducts.push(product);
        state.sortedProducts.push(product);
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
    setHashState(state, newHashState) {
        state.hashState = newHashState;
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
                dispatch('updateHashState');
            }, err => {
                console.log(err)
            });
    },
    addProducts({ commit, rootState }, payload) {
        commit('addProduct', payload);
        this._vm.$http.put(CONSTANTS.DB_NODE_PRODUCTS, state.originalProducts)
            .then(res => {
                if (res.status === 200) {
                    dispatch('updateAddons', rootState.sorting.sortingFilter);
                }
            }, err => {
                console.log(err);
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
    updateHashState({ commit, rootState }) {
        const hashString = AppUtil.getHashEncodedUrl(
            rootState.filters.appliedFilters, rootState.sorting.sortingFilter || '-1',
            rootState.pagination.currentPage, rootState.pagination.paginationFilter
        );
        window.location.hash = hashString;
        commit('setHashState', hashString);
    },
    updateFiltersFromHash({ commit, dispatch }, hashUrl) {
        const urlDecoded = AppUtil.getDecodedFilterFromUrl(hashUrl);

        commit('setAppliedFilters', urlDecoded.filters || CONSTANTS.DEFAULT_FILTERS);
        commit('setCurrentPage', urlDecoded.page || 1);
        commit('setPaginationOption', urlDecoded.rpp || CONSTANTS.DEFAULT_RECORDS_TO_SHOW);
        commit('setSortingOption', urlDecoded.sort);

        dispatch('updateAddons', urlDecoded.sort);
    },
    updateAddons({ dispatch, rootState, commit }, sort) {
        dispatch('filterProducts', rootState.filters.appliedFilters).then(() => {
            if (sort) {
                dispatch('sortProducts', sort).then(() => {
                    commit('setNoOfPages', rootState);
                });
            } else {
                commit('setNoOfPages', rootState);
            }
        });
    },
    updateProductsFromSocket({ commit, dispatch, rootState }) {
        const httpRef = this._vm.$http;
        setInterval(function socketCall() {
            httpRef.get(CONSTANTS.DB_NODE_PRODUCTS)
                .then(res => {
                    if (res.status === 200) {
                        commit('setFetchedProducts', res.body);
                        commit('setSortedProducts', res.body);
                        dispatch('updateAddons', rootState.sorting.sortingFilter);
                    }
                }, err => {
                    console.log(err);
                });
        }, CONSTANTS.SOCKET_THRESHHOLD_TIME);
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
