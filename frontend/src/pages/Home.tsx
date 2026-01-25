import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoveDown } from 'lucide-react';
import api from '../api';
import type { IProduct } from '../types';
import { ProductCard } from "../components/ProductCard";
import './Home.css';

const myTitles = [
    "Пиджак",
    "Пиджак 2",
    "Pidzhak 3",
    "Alexey suka pidzhak",
    "vasyan",
    "котовася",
    "лузер1",
    "легчайшая"
];

export const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.getProducts();

                const customProducts = data.slice(0, 8).map((product: IProduct, index: number) => ({
                    ...product,
                    image: '/man.jpg',
                    hoverImage:'/banner.jpg',
                    title: myTitles[index] || product.title
                }));
                setProducts(customProducts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        void fetchData();
    }, []);


    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div className="home-container">

            <section className="hero-section">
                <img
                    src="/banner.jpg"
                    alt="Hero Background"
                    className="hero-bg"
                />
                <div className="hero-content">
                    <span className="hero-subtitle">ляляля</span>
                    <h1 className="hero-title">
                        Название <br /> магазина
                    </h1>

                    <div className="hero-btn-wrapper">
                        <Link to="/collections" className="hero-btn">
                            Здарова лузеры!
                        </Link>
                    </div>
                </div>

                <button onClick={scrollToContent} className="scroll-icon">
                    <MoveDown size={32} />
                </button>
            </section>

            <section className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Лучшие коллекции</h2>
                </div>
                {loading ? (
                    <div className="loading-container">Loading...</div>
                ) : (
                    <div className="products-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>

            <section className="collections-grid-section">
                <Link to="/collections" className="collection-big-card">
                    <img
                        src="/woman.jpg"
                        alt="Women"
                        className="collection-img"
                    />
                    <div className="collection-overlay" />
                    <div className="collection-text">
                        <h3 className="collection-title">For Her</h3>
                        <span className="collection-link-text">Discover</span>
                    </div>
                </Link>

                <Link to="/collections" className="collection-big-card">
                    <img
                        src="/man.jpg"
                        alt="Men"
                        className="collection-img"
                    />
                    <div className="collection-overlay" />
                    <div className="collection-text">
                        <h3 className="collection-title">For Him</h3>
                        <span className="collection-link-text">Discover</span>
                    </div>
                </Link>
            </section>

            <section className="manifesto-section">
                <div className="manifesto-content">
                    <h2 className="manifesto-text">
                        "Мы не следуем трендам. Мы создаем будущее."
                    </h2>
                    <Link to="/about" className="manifesto-btn">
                        About Studio
                    </Link>
                </div>
            </section>

        </div>
    );
};