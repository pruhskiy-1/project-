import axios from 'axios';
import type { IProduct, ICollection } from '../types';
const baseURL = "https://my-json-server.typicode.com/typicode/demo";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

const MOCK_PRODUCTS: IProduct[] = [
    { id: 1, title: "Картины( 1 часть, «2»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 1", price: 0, description: "Описание для предмета 1" },
    { id: 2, title: "Картины( 1 часть, «1»)", image: "/woman.jpg", hoverImage: "/man.jpg", images: ["/woman.jpg", "/man.jpg", "/banner.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 2" },
    { id: 3, title: "Картины( 1 часть, «4»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 3", price: 0, description: "Описание для предмета 3" },
    { id: 4, title: "Картины( 1 часть, «5»)", image: "/woman.jpg", hoverImage: "/man.jpg", images: ["/woman.jpg", "/man.jpg", "/banner.jpg"], category: "Коллекция 1", price: 0, description: "Описание для предмета 4" },
    { id: 5, title: "Картины( 1 часть, «7»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 5" },
    { id: 6, title: "Картины( 1 часть, «8»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 1", price: 0, description: "Описание для предмета 6" },
    { id: 7, title: "Картины( 1 часть, «9»)", image: "/woman.jpg", hoverImage: "/man.jpg", images: ["/woman.jpg", "/man.jpg", "/banner.jpg"], category: "Коллекция 4", price: 0, description: "Описание для предмета 7" },
    { id: 8, title: "Картины( 2 часть, «1»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 8" },
    { id: 9, title: "Картины( 2 часть, «2»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 9" },
    { id: 10, title: "Картины( 2 часть, «4»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 10" },
    { id: 11, title: "Картины( 2 часть, «5»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 11" },
    { id: 12, title: "Картины( 1 часть, «2»)", image: "/man.jpg", hoverImage: "/banner.jpg", images: ["/man.jpg", "/banner.jpg", "/woman.jpg"], category: "Коллекция 2", price: 0, description: "Описание для предмета 12" },
];

const api = {
    /* getProducts: async () => {
    const response = await instance.get<IProduct[]>('/products');
    return response.data;*/
    getProducts: async (): Promise<IProduct[]> => {
        try {
            const response = await instance.get<IProduct[]>('/products');
            return response.data;
        } catch {
            return MOCK_PRODUCTS;
        }
    },
    /*  getCollections: async () => {
        const response = await instance.get<ICollection[]>('/collections');
        return response.data;
    },*/
    getCollections: async (): Promise<ICollection[]> => {
        return [
            { id: 'Коллекция 1', name: "MONEY", image: "/man.jpg" },
            { id: 'Коллекция 2', name: "CAR KEY", image: "/woman.jpg" },
            { id: 'Коллекция 3', name: "CRYPTO", image: "/man.jpg" },
        ];
    },
    getProductsByCollections: async (collectionId: string): Promise<IProduct[]> => {
        return MOCK_PRODUCTS.filter(item => item.category === collectionId);
    },
    getHeroMedia: async () => {
        await sleep(100);
        return {
            videoUrl: '/video.mp4',
            bannerUrl: '/banner.jpg',
        }
        /*const responce = await instance.get('/settings/heroMedia');
        return responce.data;*/
    },
    getProductById: async (id: string | number): Promise<IProduct> => {
        const found = MOCK_PRODUCTS.find(p => p.id === Number(id));
        return found || MOCK_PRODUCTS[0];
    }
};

export default api;