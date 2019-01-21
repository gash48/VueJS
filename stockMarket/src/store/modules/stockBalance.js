import CONSTANTS from '../constants';

const state = {
    stockBalance: []
};

const getters = {
    getStockBalance() {
        return state.stockBalance;
    }
};

const mutations = {
    buyStock(state, newStock) {
        state.stockBalance.push(newStock);
    },
    sellStock(state, stockIndex) {
        state.stockBalance.splice(stockIndex, 1);
    },
    saveStocks(state) {
        console.log("Stocks Saved SuccessFully");
    },
    loadStocks(state, fetchedStocks) {
        state.stockBalance = fetchedStocks;
    }
};

const actions = {
    buyStock({ commit, dispatch, rootState }, payload) {
        const changedFund = rootState.common.funds -= parseFloat(payload.stockPrice * parseFloat(payload.quantity, 10), 10);

        commit('buyStock', Object.assign({}, payload));
        dispatch('fundChange', changedFund);
    },
    sellStock({ commit, dispatch, rootState }, stockIndex) {
        const stock = state.stockBalance[stockIndex];
        const changedFund = rootState.common.funds += parseFloat(stock.stockPrice * parseFloat(stock.quantity), 10);

        commit('sellStock', stockIndex);
        dispatch('fundChange', changedFund);
        dispatch('saveStocks');
    },
    saveStocks({ commit, dispatch }) {
        this._vm.$http.put(CONSTANTS.DB_NODE_USER_STOCKS, state.stockBalance)
            .then(res => {
                commit('saveStocks');
                dispatch('setUserState');
            }, err => {
                console.log(err);
            });
    },
    loadStocks({ commit }) {
        this._vm.$http.get(CONSTANTS.DB_NODE_USER_STOCKS)
            .then(res => {
                commit('loadStocks', res.data || []);
            }, err => {
                console.log(err)
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
