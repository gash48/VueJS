import Home from '../components/Home.vue';
import Stocks from '../components/Stocks.vue';
import Portfolio from '../components/Portfolio.vue';
import NotFound from '../components/NotFound.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        label: 'Stock Trader',
        name: 'homePage'
    },
    {
        path: '/stocks',
        component: Stocks,
        label: 'Stocks',
        name: 'stocksPage'
    },
    {
        path: '/portFolio',
        component: Portfolio,
        label: 'PortFolio',
        name: 'portFolioPage'
    },
    {
        path: '*',
        component: NotFound,
        label: '',
        name: 'notFound'
    }
]; 