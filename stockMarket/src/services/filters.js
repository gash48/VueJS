//                       Global Filters                       //
//------------------------------------------------------------//
import Vue from 'vue';

Vue.filter('inrCurrencyPipe', function (value) {
    return parseFloat(value).toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
})

export default {};
