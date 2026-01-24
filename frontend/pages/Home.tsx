import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveDown } from 'lucide-react';
import { api } from '../api';
import { IProduct } from '../types';
import { ProductCard } from '../components/ProductCard';
import './Home.css';

export const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.getProducts();
                setProducts(data.slice(0, 4));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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
                    <span className="hero-subtitle">Est. 2024 — Moscow</span>
                    <h1 className="hero-title">
                        Urban <br /> Silence
                    </h1>

                    <div className="hero-btn-wrapper">
                        <Link to="/collections" className="hero-btn">
                            Shop Collection
                        </Link>
                    </div>
                </div>

                <button onClick={scrollToContent} className="scroll-icon">
                    <MoveDown size={32} />
                </button>
            </section>
            <div className="marquee-section">
                <div className="marquee-content">
                    <span>New Drop Available</span> •
                    <span>Worldwide Shipping</span> •
                    <span>Limited Edition</span> •
                    <span>New Drop Available</span> •
                </div>
            </div>
            <section className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Latest Drop</h2>
                    <Link to="/collections" className="view-all-link">
                        View All <ArrowRight size={16} />
                    </Link>
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