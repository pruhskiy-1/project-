import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import type { IProduct } from '../types';
import './ProductDetail.css';

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                if (id) {
                    const data = await api.getProductById(id);
                    setProduct(data as IProduct);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        void fetchProduct();
    }, [id]);

    if (loading) return <div className="detail-status">Загрузка деталей</div>;
    if (!product) return <div className="detail-status">Предметы не найдены</div>;

    return (
        <main className="product-detail-page">
            <div className="detail-container">
                <nav className="detail-breadcrumbs">
                    <Link to="/">Home</Link> / <Link to="/collections">Коллекции</Link> / <span>{product.title}</span>
                </nav>

                <div className="detail-content">
                    <div className="detail-image-section">
                        <div className="main-image-wrapper">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>

                    <div className="detail-info-section">
                        <h1 className="detail-title">{product.title}</h1>

                        <div className="detail-description">
                            <p>{product.description || "Exclusive handcrafted piece from our latest collection."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default ProductDetail;