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
    { id: 1, title: "Предмет 1", image: "/predmet1/1pr.jpg", hoverImage: "/predmet1/7last.jpg", images: ["/predmet1/2.jpg", "/predmet1/3.jpg", "/predmet1/4.jpg","/predmet1/5.jpg","/predmet1/6.jpg","/predmet1/7last.jpg"], category: "money", price: 0, description: "Описание для предмета 1" },
    { id: 2, title: "Предмет 2", image: "/predmet2/1pr.jpg", hoverImage: "/predmet2/8last.jpg", images: ["/predmet2/2.jpg", "/predmet2/3.jpg", "/predmet2/4.jpg", "/predmet2/5.jpg", "/predmet2/6.jpg", "/predmet2/7.jpg", "/predmet2/8last.jpg"], category: "money", price: 0, description: "Описание для предмета 2" },
    { id: 3, title: "Предмет 3", image: "/predmet3/1pr.jpg", hoverImage: "/predmet3/8last.jpg", images: ["/predmet3/2.jpg", "/predmet3/3.jpg", "/predmet3/4.jpg", "/predmet3/5.jpg", "/predmet3/6.jpg", "/predmet3/7.jpg", "/predmet3/8last.jpg"], category: "money", price: 0, description: "Описание для предмета 3" },
    { id: 4, title: "Предмет 4", image: "/predmet4/1pr.jpg", hoverImage: "/predmet4/7last.jpg", images: ["/predmet4/2.jpg", "/predme4/3.jpg", "/predmet4/4.jpg", "/predmet4/5.jpg", "/predmet4/6.jpg", "/predmet4/7last.jpg"], category: "money", price: 0, description: "Описание для предмета 4" },
    { id: 5, title: "Предмет 5", image: "/predmet5/1pr.jpg", hoverImage: "/predmet5/7last.jpg", images: ["/predmet5/2.jpg", "/predmet5/3.jpg", "/predmet5/4.jpg", "/predmet5/5.jpg", "/predmet5/6.jpg", "/predmet5/7last.jpg"], category: "money", price: 0, description: "Описание для предмета 5" },
    { id: 6, title: "Предмет 6", image: "/predmet6/1pr.jpg", hoverImage: "/predmet6/7last.jpg", images: ["/predmet6/2.jpg", "/predmet6/3.jpg", "/predmet6/4.jpg", "/predmet6/5.jpg", "/predmet6/6.jpg", "/predmet6/7last.jpg"], category: "money", price: 0, description: "Описание для предмета 6" },
    { id: 7, title: "Предмет 7", image: "/predmet7/1pr.jpg", hoverImage: "/predmet7/7pr.jpg", images: ["/predmet7/2.jpg", "/predmet7/3.jpg", "/predmet7/4.jpg", "/predmet7/5.jpg", "/predmet7/6.jpg", "/predmet7/7pr.jpg"], category: "money", price: 0, description: "Описание для предмета 7" },
    { id: 8, title: "Предмет 8", image: "/predmet8/1pr.jpg", hoverImage: "/predmet8/7last.jpg", images: ["/predmet8/2.jpg", "/predmet8/3.jpg", "/predmet8/4.jpg", "/predmet8/5.jpg", "/predmet8/6.jpg", "/predmet8/7last.jpg"], category: "money", price: 0, description: "Описание для предмета 8" },
    { id: 9, title: "Предмет 9", image: "/predmet9/1pr.jpg", hoverImage: "/predmet9/6last.jpg", images: ["/predmet9/2.jpg", "/predmet9/3.jpg", "/predmet9/4.jpg", "/predmet9/5.jpg", "/predmet9/6last.jpg"], category: "car key", price: 0, description: "Описание для предмета 9" },
    { id: 10, title: "Предмет 10", image: "/predmet10/1pr.jpg", hoverImage: "/predmet10/6last.jpg", images: ["/predmet10/2.jpg", "/predmet10/3.jpg", "/predmet10/4.jpg", "/predmet10/5.jpg", "/predmet10/6last.jpg"], category: "car key", price: 0, description: "Описание для предмета 10" },
    { id: 11, title: "Предмет 11", image: "/predmet11/1pr.jpg", hoverImage: "/predmet11/6last.jpg", images: ["/predmet11/2.jpg", "/predmet11/3.jpg", "/predmet11/4.jpg", "/predmet11/5.jpg", "/predmet11/6last.jpg"], category: "car key", price: 0, description: "Описание для предмета 11" },
    { id: 12, title: "Предмет 12", image: "/predmet12/1pr.jpg", hoverImage: "/predmet12/6last.jpg", images: ["/predmet12/2.jpg", "/predmet12/3.jpg", "/predmet12/4.jpg", "/predmet12/5.jpg", "/predmet12/6last.jpg"], category: "car key", price: 0, description: "Описание для предмета 12" },
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
            { id: 'money', name: "MONEY", image: "/man.jpg" },
            { id: 'car key', name: "CAR KEY", image: "/woman.jpg" },
            { id: 'crypto', name: "CRYPTO", image: "/man.jpg" },
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