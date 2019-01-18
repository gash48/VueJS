import CONSTANTS from '../constants';

const state = {
    stocks: CONSTANTS.USER_AVAILABLE_STOCKS
};

const getters = {
    getStocks() {
        return state.stocks;
    }
};

const mutations = {
    addStock(state, newStock) {
        state.stocks.push(newStock);
    },
    changeAllStocksPrice(state) {
        state.stocks = state.stocks.map((stock) => {
            stock.stockPrice = CONSTANTS.GET_NEW_PRICE(stock.stockPrice);
            return stock;
        });
    },
    removeStock(state, stockIndex) {
        state.stocks.splice(stockIndex, 1);
    }
};

const actions = {
    addStock({ commit }, payload) {
        commit('addStock', payload);
    },
    changeAllStocksPrice({ commit }) {
        commit('changeAllStocksPrice');
    },
    removeStock({ commit }, payload) {
        commit('removeStock', payload);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
