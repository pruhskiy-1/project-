import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoveDown } from 'lucide-react';
import api from '../api';
import type { IProduct } from '../types';
import { ProductCard } from "../components/ProductCard";
import './Home.css';
import Marquee from "react-fast-marquee";


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
                    hoverImage: '/banner.jpg',
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
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <img src="/banner.jpg" alt="Hero Background" className="hero-bg"/>
                <div className="hero-content">
                    <span className="hero-subtitle">ляляля</span>
                    <h1 className="hero-title">Название <br/> магазина</h1>
                    <div className="hero-btn-wrapper">
                        <Link to="/collections" className="hero-btn">Здарова лузеры!</Link>
                    </div>
                </div>
                <button onClick={scrollToContent} className="scroll-icon">
                    <MoveDown size={32}/>
                </button>
            </section>

            <section className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Лучшие коллекции</h2>
                </div>

                {loading ? (
                    <div className="loading-container">Loading...</div>
                ) : (
                    <>
                        <div className="products-grid">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>

                        <div className="button-center-container">
                            <Link to="/collections" className="all-collections-btn">
                                ВСЕ КОЛЛЕКЦИИ
                            </Link>
                        </div>
                    </>
                )}
            </section>
            <section className="video-full-section">
                <div className="video-overlay"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="bg-video">
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </section>
            <div className="marquee-infinite">
                <Marquee
                speed = {100}
                gradient={false}
                direction="left">
                    <span className="marquee-item">text 1</span>
                    <span className="marquee-item outline">text 2</span>
                    <span className="marquee-item">text 3</span>
                    <span className="marquee-item outline">text 4</span>
                    <span className="marquee-item">text 5</span>
                    <span className="marquee-item outline">text 6</span>
                </Marquee>
            </div>
            <section className="art-room-section">
                <div className="art-room-container">
                    <div className="art-room-header">
                        <h2 className="art-room-title">текст</h2>
                        <p className="art-room-subtitle">
                            Our art is designed to elevate any space – from sleek modern offices to cozy living rooms.
                            With its bold presence and timeless style, it seamlessly fits into every room,
                            adding character and inspiration wherever it hangs.
                        </p>
                    </div>
                    <div className="art-room-grid">
                        <div className="art-grid-top">
                            <img src="/man.jpg" alt="Featured Art" />
                        </div>
                        <div className="art-grid-bottom">
                            <div className="art-grid-item">
                                <img src="/woman.jpg" alt="Office Space" />
                            </div>
                            <div className="art-grid-item">
                                <img src="/man.jpg" alt="Living Room" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>
    );
};