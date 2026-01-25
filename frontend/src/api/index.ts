import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

const api = {
    getProducts: async () => {
        const response = await instance.get('/products');
        return response.data;
    },
    // ВАЖНО: Должна быть запятая выше и вот эта функция здесь:
    getBestSellers: async () => {
        const response = await instance.get('/products?sort=desc');
        return response.data;
    }
};

export default api;