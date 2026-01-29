export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    hoverImage?: string;
}
export interface ICollection {
    id: string;
    name: string;
    image: string;
}