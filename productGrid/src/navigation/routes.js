import productGrid from '../components/ProductGrid.vue';
import addProduct from '../components/AddProduct.vue';

export const routes = [
    {
        path: '/',
        component: productGrid,
        label: 'Products',
        name: 'productList'
    },
    {
        path: '/newProduct',
        component: addProduct,
        label: 'Add Product',
        name: 'addProduct'
    }
]; 