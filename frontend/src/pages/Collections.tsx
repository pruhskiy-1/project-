import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './Collections.css';

interface ICategory {
    id: string;
    name: string;
    image: string;
}
export const Collections = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await api.getCollections();
                setCategories(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        void fetchCategories();
    }, []);

    if (loading) return <div style={{padding: '200px', textAlign: 'center'}}>Loading...</div>;
    return (
        <div className="collections-page">
            <h1 className="collections-title">Collections</h1>
            <div className="collections-grid">
                {categories.map((cat) => (
                    <Link to={`/collections/${cat.id}`} key={cat.id} className="category-card">
                        <div className="category-image-wrapper">
                            <img src={cat.image} alt={cat.name} />
                        </div>
                        <div className="category-info">
                            <h3>{cat.name}</h3>
                            <span>View Collection</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};