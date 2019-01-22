import CONSTANTS from '../constants';

const state = {
    sortingFilter: '',
    sortingValues: CONSTANTS.SORTING_VALUES,
};

const getters = {
    getSortingFilter() {
        return state.sortingFilter;
    },
    getSortingOptions() {
        return state.sortingValues;
    }
};

const mutations = {
    setSortingOption(state, option) {
        state.sortingFilter = option;
    }
};

const actions = {
    updateSortingOption({ commit, dispatch }, option) {
        commit('setSortingOption', option);
        dispatch('sortProducts', option).then(() => {
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
