import Vue from 'vue';
import VueResource from 'vue-resource';
import CONSTANTS from '../store/constants';

const DataParser = (response) => {
    const dataArr = []
    Object.keys(response).map((key) => {
        dataArr.push(response[key]);
    })
    return dataArr;
};

const Interceptor = (request, next) => {
    console.log("Request Sent");
    console.log(request);
    next((response) => {
        return response.json().then((data) => {
            return DataParser(data);
        })
    })
};

Vue.use(VueResource);

// RESOURCE SETTINGS
Vue.http.options.root = CONSTANTS.DB_BASE_URL;
Vue.http.interceptors.push(Interceptor);

export default {};