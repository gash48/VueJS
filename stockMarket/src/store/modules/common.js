import CONSTANTS from '../constants';

const state = {
    funds: 0,
    day: 0
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
    },
    setState(state){
        console.log("State Set Successfully");
    },
    getState(state, fetchedState){
        Object.keys(fetchedState).map((prop) => {
            state[prop] = fetchedState[prop];
        })
    }
};

const actions = {
    fundChange({ commit }, newFund) {
        commit('changedFunds', newFund);
    },
    dayIncrement({ commit, dispatch }) {
        commit('incrementDay');
        dispatch('changeAllStocksPrice');
        // ------------------------------- //
        dispatch('setUserState');
        dispatch('postStocks');
        dispatch('saveStocks');
        console.log("Day Ended");
    },
    setUserState({ commit }) {
        this._vm.$http.put(CONSTANTS.DB_NODE_USER_STATE, state)
            .then(res => {
                commit('setState');
            }, err => {
                console.log(err)
            })
    },
    getUserState({ commit }) {
        this._vm.$http.get(CONSTANTS.DB_NODE_USER_STATE)
            .then(res => {
                commit('getState', res.body);
            }, err => {
                console.log(err)
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
