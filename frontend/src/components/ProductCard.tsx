import { ArrowRight } from 'lucide-react';
import type { IProduct } from '../types';

interface ProductCardProps {
    product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button className="add-cart-btn">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};