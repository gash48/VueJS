import CONSTANTS from '../constants';

const state = {
    stocks: []
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
    },
    postStocks(state, fetchedStocks) {
        // state.stocks = fetchedStocks;
        console.log("Available Stocks Posted Successfully");
    },
    fetchStocks(state, fetchedStocks){
        state.stocks = fetchedStocks;
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
    },
    postStocks({ commit }) {
        this._vm.$http.put(CONSTANTS.DB_NODE_AVAILABLE_STOCKS, state.stocks)
            .then(res => {
                commit('postStocks', res.data);
            }, err => {
                console.log(err)
            })
    },
    fetchAvailableStocks({ commit }) {
        this._vm.$http.get(CONSTANTS.DB_NODE_AVAILABLE_STOCKS)
            .then(res => {
                commit('fetchStocks', res.data);
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
