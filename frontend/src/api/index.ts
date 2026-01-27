const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const MOCK_DATA = [
    { id: 1, title: "VASYAN", image: "/man.jpg", category: "calishe",  description: "он крутой." },
    { id: 2, title: "KOTOVASYA", image: "/woman.jpg", category: "hi", description: "он покруче." },
    { id: 3, title: "LUSER1", image: "/man.jpg", category: "tables",  description: "он не такой крутой." },
    { id: 4, title: "LEGCHAYSHAYA", image: "/woman.jpg", category: "calishe", description: "он васянидзе" },
    { id: 5, title: "WORK HARDER", image: "/man.jpg", category: "hi",  description: "ляляляляляя." },
    { id: 6, title: "FERRARI LOOK", image: "/man.jpg", category: "calishe ",  description: "хаха дерьмо." },
    { id: 7, title: "NIGHT CITY", image: "/woman.jpg", category: "vasya",  description: "павыпаывсмы." },
    { id: 8, title: "REBEL SPIRIT", image: "/man.jpg", category: "hi",  description: "пееперамы." },
];

const api = {
    getProducts: async () => {
        await sleep(500);
        return MOCK_DATA;
    },
    getCollections: async () => {
        await sleep(500);
        return [
            { id: 'cars', name: "хуйня]", image: "/man.jpg" },
            { id: 'art', name: "дерьмо", image: "/woman.jpg" },
            { id: 'tables', name: "получше чем дерьмо", image: "/man.jpg" },
            { id: 'crypto', name: "хуже чем дерьмо", image: "/woman.jpg" },
        ];
    },
    getProductsByCollections: async (collectionId: string) => {
        await sleep(500);
        // Фильтруем нашу базу по категории
        return MOCK_DATA.filter(item => item.category === collectionId);
    },
    getProductById: async (id: string | number) => {
        await sleep(300);
        const product = MOCK_DATA.find(item => item.id === Number(id));
        return product || MOCK_DATA[0]; // Если не нашли, возвращаем первый (для теста)
    }
};

export default api;

/*import axios from 'axios';

const baseURL = "https:";

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});
const api = {
    getProducts: async () => {
        const response = await instance.get('/products');
        return response.data;
    },
    getCollections: async () => {
        const response = await instance.get('/collections');
        return response.data;
    },
    getProductsByCollections: async (collectionId: string) => {
        const response = await instance.get(`/collections/${collectionId}/products`);
        return response.data;
    },
    getProductById: async (id: string | number) => {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    }
};

export default api; */