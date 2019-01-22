const DB_BASE_URL = 'https://vuedb-1e35e.firebaseio.com/';
const DB_NODE_PRODUCTS = 'productData.json';
const DB_NODE_FILTERS = 'filters.json';
const DB_NODE_HASHSTATE = 'hashState.json';

const PAGINATION_VALUES = [4, 3, 6, 9];
const DEFAULT_RECORDS_TO_SHOW = PAGINATION_VALUES[0];
const SORTING_VALUES = ['', 'name', 'brand', 'color'];

const DEFAULT_FILTERS = {
  brand: [],
  color: [],
  sold_out: [],
};

const SPECIAL_FILTERS = {
    sold_out : {
        label : 'Availability',
        getValue(val){
            return !(parseInt(val, 10)) ? 'Available' : 'Sold Out';
        }
    }
};

export default {
    DB_BASE_URL,
    DB_NODE_PRODUCTS,
    DB_NODE_FILTERS,
    DB_NODE_HASHSTATE,
    PAGINATION_VALUES,
    DEFAULT_RECORDS_TO_SHOW,
    SORTING_VALUES,
    DEFAULT_FILTERS,
    SPECIAL_FILTERS
};