import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Link теперь используется
import api from '../api';
import { ShieldCheck, Heart } from 'lucide-react'; // Иконки теперь используются
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

    if (loading) return <div className="detail-status">Loading details...</div>;
    if (!product) return <div className="detail-status">Product not found</div>;

    return (
        <main className="product-detail-page">
            <div className="detail-container">
                <nav className="detail-breadcrumbs">
                    <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / <span>{product.title}</span>
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
                        <div className="detail-features">
                            <div className="feature-item">
                                <ShieldCheck size={20} strokeWidth={1.5} />
                                <span>Authenticity Guaranteed</span>
                            </div>
                            <div className="feature-item">
                                <Heart size={20} strokeWidth={1.5} />
                                <span>Handmade with passion</span>
                            </div>
                        </div>

                        <div className="detail-meta">
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>suka</strong> VS-{product.id.toString().padStart(4, '0')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default ProductDetail;