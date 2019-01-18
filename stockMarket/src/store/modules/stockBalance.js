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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
