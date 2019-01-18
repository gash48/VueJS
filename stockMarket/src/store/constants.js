const USER_START_FUND = 15000;
const USER_START_DAY = 1;
const STOCK_CHANGE_LIMIT = 20;
const STOCKS_BUY_LIMIT = 50;
const DB_BASE_URL = 'https://vuedb-1e35e.firebaseio.com/';
const AVAILABLE_STOCKS = 'availableStocks.json';
const USER_STOCKS = 'userStocks.json';

const USER_AVAILABLE_STOCKS = [
    {
        companyName: 'BMW',
        stockPrice: 75,
        quantity: '',
        stockId: 1
    },
    {
        companyName: 'Google',
        stockPrice: 114,
        quantity: '',
        stockId: 2
    },
    {
        companyName: 'Twitter',
        stockPrice: 312,
        quantity: '',
        stockId: 3
    },
    {
        companyName: 'Apple',
        stockPrice: 210,
        quantity: '',
        stockId: 4
    }
];

const GET_NEW_PRICE = (currentPrice) => {
    const randomValue = parseFloat((Math.random()).toFixed(2), 10);
    if (randomValue >= 0.50) {
        return currentPrice += (randomValue * STOCK_CHANGE_LIMIT);
    }
    return currentPrice -= (randomValue * STOCK_CHANGE_LIMIT);
};

export default {
    USER_START_FUND,
    USER_START_DAY,
    STOCK_CHANGE_LIMIT,
    USER_AVAILABLE_STOCKS,
    GET_NEW_PRICE,
    STOCKS_BUY_LIMIT,
    DB_BASE_URL,
    AVAILABLE_STOCKS,
    USER_STOCKS
};