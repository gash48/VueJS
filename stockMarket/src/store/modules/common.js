import CONSTANTS from '../constants';

const state = {
    funds: CONSTANTS.USER_START_FUND,
    day: CONSTANTS.USER_START_DAY
};

const getters = {
    getFunds() {
        return state.funds;
    },
    getDay() {
        return state.day;
    }
};

const mutations = {
    changedFunds(state, newFund) {
        state.funds = newFund;
    },
    incrementDay() {
        state.day++;
    }
};

const actions = {
    fundChange({ commit }, newFund) {
        commit('changedFunds', newFund);
    },
    dayIncrement({ commit, dispatch }) {
        commit('incrementDay');
        dispatch('changeAllStocksPrice');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
