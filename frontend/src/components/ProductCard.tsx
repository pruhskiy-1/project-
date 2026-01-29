import { Link } from 'react-router-dom';
import type { IProduct } from '../types';
import './ProductCard.css';

interface ProductCardProps {
    product: IProduct & { hoverImage?: string };
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link to={`/products/${product.id}`} className="product-card">
            <div className="product-image-wrapper">
                {/* Основное фото */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image primary-img"
                />
                <img
                    src={product.hoverImage || product.image}
                    alt={product.title}
                    className="product-image secondary-img"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.title}</h3>
            </div>
        </Link>
    );
};