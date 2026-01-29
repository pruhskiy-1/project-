import axios from 'axios';
import type { IProduct, ICollection } from '../types';
const baseURL = "https://my-json-server.typicode.com/typicode/demo";

const instance = axios.create({
    baseURL: baseURL,
});

const MOCK_PRODUCTS: IProduct[] = [
    { id: 1, title: "Предмет 1", image: "/man.jpg", hoverImage: "/banner.jpg", category: "Коллекция 1", price: 0, description: "Описание для предмета 1" },
    { id: 2, title: "Предмет 2", image: "/woman.jpg", hoverImage: "/man.jpg", category: "Коллекция 2", price: 0, description: "Описание для предмета 2" },
    { id: 3, title: "Предмет 3", image: "/man.jpg", hoverImage: "/banner.jpg", category: "Коллекция 3", price: 0, description: "Описание для предмета 3" },
    { id: 4, title: "Предмет 4", image: "/woman.jpg", hoverImage: "/man.jpg", category: "Коллекция 1", price: 0, description: "Описание для предмета 4" },
    { id: 5, title: "Предмет 5", image: "/man.jpg", hoverImage: "/banner.jpg", category: "Коллекция 2", price: 0, description: "Описание для предмета 5" },
    { id: 6, title: "Предмет 6", image: "/man.jpg", hoverImage: "/banner.jpg", category: "Коллекция 1", price: 0, description: "Описание для предмета 6" },
    { id: 7, title: "Предмет 7", image: "/woman.jpg", hoverImage: "/man.jpg", category: "Коллекция 4", price: 0, description: "Описание для предмета 7" },
    { id: 8, title: "Предмет 8", image: "/man.jpg", hoverImage: "/banner.jpg", category: "Коллекция 2", price: 0, description: "Описание для предмета 8" },
];
const api = {
    getProducts: async (): Promise<IProduct[]> => {
        try {
            const response = await instance.get<IProduct[]>('/products');
            return response.data;
        } catch {
            return MOCK_PRODUCTS;
        }
    },
    getCollections: async (): Promise<ICollection[]> => {
        return [
            { id: 'Коллекция 1', name: "Коллекция 1", image: "/man.jpg" },
            { id: 'Коллекция 2', name: "Коллекция 2", image: "/woman.jpg" },
            { id: 'Коллекция 3', name: "Коллекция 3", image: "/man.jpg" },
            { id: 'Коллекция 4', name: "Коллекция 4", image: "/woman.jpg" },
        ];
    },

    getProductsByCollections: async (collectionId: string): Promise<IProduct[]> => {
        return MOCK_PRODUCTS.filter(item => item.category === collectionId);
    },

    getProductById: async (id: string | number): Promise<IProduct> => {
        const found = MOCK_PRODUCTS.find(p => p.id === Number(id));
        return found || MOCK_PRODUCTS[0];
    }
};

export default api;