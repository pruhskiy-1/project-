import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'
});
const api = {
    getProducts: async () => {
        const response = await instance.get('/products');
        return response.data;
    }
};

export default api;
