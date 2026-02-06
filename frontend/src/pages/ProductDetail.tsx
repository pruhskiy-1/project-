import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { Truck, ShieldCheck, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import type { IProduct } from '../types';
import './ProductDetail.css';

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                if (id) {
                    const data = await api.getProductById(id);
                    setProduct(data as IProduct);
                    setActiveImgIndex(0);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        void fetchProduct();
    }, [id]);
    const galleryImages = product?.images && product.images.length > 0
        ? product.images
        : [product?.image || '/man.jpg'];

    const nextImg = () => {
        setActiveImgIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImg = () => {
        setActiveImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    if (loading) return <div className="detail-status">Loading...</div>;
    if (!product) return <div className="detail-status">Not found</div>;

    return (
        <main className="product-detail-page">
            <div className="detail-container">
                <nav className="detail-breadcrumbs">
                    <Link to="/">Домой</Link> / <Link to="/collections">Коллекции</Link> / <span>{product.title}</span>
                </nav>

                <div className="detail-content">
                    <div className="detail-image-section">
                        <div className="main-image-viewport">
                            {galleryImages.length > 1 && (
                                <>
                                    <button className="nav-arrow left" onClick={prevImg} type="button"><ChevronLeft size={24}/></button>
                                    <button className="nav-arrow right" onClick={nextImg} type="button"><ChevronRight size={24}/></button>
                                </>
                            )}

                            <div className="main-image-wrapper">
                                <img src={galleryImages[activeImgIndex]} alt={product.title} />
                            </div>
                        </div>
                        {galleryImages.length > 1 && (
                            <div className="thumbnail-list">
                                {galleryImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumb-item ${index === activeImgIndex ? 'active' : ''}`}
                                        onClick={() => setActiveImgIndex(index)}
                                    >
                                        <img src={img} alt="" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="detail-info-section">
                        <h1 className="detail-title">{product.title}</h1>
                        <p className="detail-description">{product.description}</p>

                        <div className="detail-features">
                            <div className="feature-item"><Truck size={20} strokeWidth={1.5}/> <span>Worldwide Shipping</span></div>
                            <div className="feature-item"><ShieldCheck size={20} strokeWidth={1.5}/> <span>Authenticity Guaranteed</span></div>
                            <div className="feature-item"><Heart size={20} strokeWidth={1.5}/> <span>Handmade with passion</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;