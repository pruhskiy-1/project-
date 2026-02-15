import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { ProductCard } from '../components/ProductCard';
import type { IProduct } from '../types';
import './CategoryPage.css';

export const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            setLoading(true);
            try {
                if (categoryId) {
                    const data = await api.getProductsByCollections(categoryId);
                    setProducts(data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        void fetchCategoryProducts();
    }, [categoryId]);
    if (loading) return <div className="category-status">Закрузка коллекций...</div>;
    return (
        <main className="category-page">
            <div className="category-container">
                <nav className="category-nav">
                    <Link to="/">Главная</Link> / <Link to="/collections">Коллекции</Link> / <span>{categoryId}</span>
                </nav>

                <h1 className="category-title">{categoryId}</h1>

                {products.length > 0 ? (
                    <div className="category-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="category-status">
                        Эта коллекция пуста
                    </div>
                )}
            </div>
        </main>
    );
};