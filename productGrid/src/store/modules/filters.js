import CONSTANTS from '../constants';

const state = {
    appliedFilters: CONSTANTS.DEFAULT_FILTERS,
    filterOptions: null,
};

const getters = {
    getFilters() {
        return state.filterOptions;
    },
    getAppliedFilters() {
        return state.appliedFilters;
    }
};

const mutations = {
    setAppliedFilters(state, appliedFilters) {
        state.appliedFilters = appliedFilters;
    },
    setFilters(state, newFilters) {
        state.filterOptions = newFilters;
    }
};

const actions = {
    updateAppliedFilters({ commit, dispatch }, appliedFilters) {
        commit('setAppliedFilters', appliedFilters);
        dispatch('filterProducts', appliedFilters).then(() => {
            dispatch('updatePaginationControls');
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
