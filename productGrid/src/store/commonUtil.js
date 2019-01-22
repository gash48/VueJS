import CONSTANTS from './constants';

const allinOnefilter = (products = [], filter) => {
    Object.keys(filter).map((ele) => {
        if (filter[ele].length) {
            products = products.filter(e => filter[ele].includes(e[ele]));
        }
    });
    return products;
};

const getUniqueFilters = (inArr, prop) => {
    const arr = inArr.map(ele => ele[prop]);
    const uniqueSet = new Set(arr);
    return [...uniqueSet];
};

const getFilterValues = (products) => {
    const filters = {};
    Object.keys(CONSTANTS.DEFAULT_FILTERS).map((prop) => {
        filters[prop] = getUniqueFilters(products, prop);
    });
    return filters;
}

const getSortedArray = (inArr = [], prop) => {
    return inArr.sort((a, b) => {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    });
};

const getUniquePropArray = (inArr, uniqueProp) => {
    const propArr = [];
    return inArr.filter((ele) => {
        if (!propArr.includes(ele[uniqueProp])) {
            propArr.push(ele.name);
            return true;
        }
        return false;
    });
};

const getDecodedFilterFromUrl = (hash) => {
    if (hash) {
        const hashString = decodeURIComponent(hash);
        return JSON.parse(hashString.slice(1));
    }
    return {
        filters: CONSTANTS.DEFAULT_FILTERS,
        sort: CONSTANTS.SORTING_VALUES[0],
        page: 1,
        rpp: CONSTANTS.DEFAULT_RECORDS_TO_SHOW,
    };
};

const getHashEncodedUrl = (appliedFilter = {}, sortProp = '-1', page = 1, recordsPerPage) => {
    const hashObject = {
        filters: appliedFilter,
        sort: sortProp,
        page,
        rpp: recordsPerPage,
    };
    return JSON.stringify(hashObject);
};

export default {
    allinOnefilter,
    getUniqueFilters,
    getFilterValues,
    getUniquePropArray,
    getSortedArray,
    getHashEncodedUrl,
    getDecodedFilterFromUrl,
};