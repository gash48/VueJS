//                       Global Filters                       //
//------------------------------------------------------------//
import Vue from 'vue';
import CONSTANTS from '../store/constants';

Vue.filter('inrCurrencyPipe', function (value) {
    return parseFloat(value).toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
});

Vue.filter('filterLabel', function (key) {
    if (CONSTANTS.SPECIAL_FILTERS.hasOwnProperty(key)) {
        return CONSTANTS.SPECIAL_FILTERS[key].label
    }
    return key;
});

Vue.filter('filterOptionLabel', function (value, key) {
    if (CONSTANTS.SPECIAL_FILTERS.hasOwnProperty(key)) {
        return CONSTANTS.SPECIAL_FILTERS[key].getValue(value)
    }
    return value;
});

export default {};
