const STOCK_CHANGE_LIMIT = 20;
const STOCKS_BUY_LIMIT = 50;
const DB_BASE_URL = 'https://vuedb-1e35e.firebaseio.com/';
const DB_NODE_AVAILABLE_STOCKS = 'availableStocks.json';
const DB_NODE_USER_STOCKS = 'userStocks.json';
const DB_NODE_USER_STATE = 'userState.json';

const GET_NEW_PRICE = (currentPrice) => {
    const randomValue = parseFloat((Math.random()).toFixed(2), 10);
    if (randomValue >= 0.50) {
        return currentPrice += (randomValue * STOCK_CHANGE_LIMIT);
    }
    return currentPrice -= (randomValue * STOCK_CHANGE_LIMIT);
};

export default {
    STOCK_CHANGE_LIMIT,
    GET_NEW_PRICE,
    STOCKS_BUY_LIMIT,
    DB_BASE_URL,
    DB_NODE_AVAILABLE_STOCKS,
    DB_NODE_USER_STOCKS,
    DB_NODE_USER_STATE
};