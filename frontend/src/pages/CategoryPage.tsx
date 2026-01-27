import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { ProductCard } from '../components/ProductCard';
import type { IProduct } from '../App';
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
                    setProducts(data as IProduct[]);
                }
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };
        void fetchCategoryProducts();
    }, [categoryId]);
    if (loading) return <div className="category-status">Loading Collection...</div>;
    return (
        <main className="category-page">
            <div className="category-container">
                <nav className="category-nav">
                    <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / <span>{categoryId}</span>
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