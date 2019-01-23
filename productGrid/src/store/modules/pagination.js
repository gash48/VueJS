import CONSTANTS from '../constants';

const state = {
    paginationFilter: CONSTANTS.DEFAULT_RECORDS_TO_SHOW,
    paginationValues: CONSTANTS.PAGINATION_VALUES,
    currentPage: 1,
    noOfPages: 0
};

const getters = {
    getPaginationFilter() {
        return state.paginationFilter;
    },
    getPaginationOptions() {
        return state.paginationValues;
    },
    getCurrentPage() {
        return state.currentPage;
    },
    getNoOfPages() {
        return state.noOfPages;
    },
    getPaginatedProducts(state, getter, rootState) {
        const recordsToShow = state.paginationFilter;
        const offset = (state.currentPage - 1) * recordsToShow;
        return rootState.products.products.slice(offset, offset + recordsToShow);
    }
};

const mutations = {
    setPaginationOption(state, option) {
        state.paginationFilter = option;
    },
    setCurrentPage(state, newPage) {
        state.currentPage = newPage;
    },
    setNoOfPages(state, { products, pagination }) {
        state.noOfPages = Math.ceil(products.products.length / pagination.paginationFilter);
    }
};

const actions = {
    updatePaginationControls({ commit, rootState }) {
        commit('setCurrentPage', 1);
        commit('setNoOfPages', rootState);
    },
    updateCurrentPage({ commit }, currentPage) {
        commit('setCurrentPage', currentPage);
    },
    updatePaginationOption({ commit, dispatch }, option) {
        commit('setPaginationOption', option);
        dispatch('updatePaginationControls');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
