import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import api from '../api';
import type { IProduct } from '../types';
import './Header.css';

export const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<IProduct[]>([]);
    const navigate = useNavigate();

    const closeSearch = useCallback(() => {
        setIsSearchOpen(false);
        setSearchQuery('');
        setResults([]);
    }, []);

    const handleFullSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            closeSearch();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeSearch();
        };
        if (isSearchOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSearchOpen, closeSearch]);

    useEffect(() => {
        const performSearch = async () => {
            if (searchQuery.trim().length > 0) {
                try {
                    const allProducts = await api.getProducts();
                    const filtered = allProducts.filter(p =>
                        p.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    setResults(filtered.slice(0, 4));
                } catch (err) { console.error(err); }
            } else { setResults([]); }
        };
        void performSearch();
    }, [searchQuery]);

    return (
        <header className="header">
            <div className={`header-content ${isSearchOpen ? 'hidden' : ''}`}>
                <div className="header-top">
                    <div className="header-left">
                        <button className="icon-btn" onClick={() => setIsSearchOpen(true)} type="button">
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                    </div>

                    <div className="header-center">
                        <Link to="/" className="logo">FESENCE GALLERY</Link>
                    </div>
                    <div className="header-right">
                    </div>
                </div>

                <nav className="header-bottom">
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link">Домой</Link></li>
                        <li><Link to="/collections" className="nav-link">Коллекции</Link></li>
                        <li><Link to="/about" className="nav-link">О нас</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
                <div className="search-wrapper">
                    <div className="search-top-row">
                        <span className="search-label">Что вы ищете?</span>
                        <button className="search-close-x" onClick={closeSearch} type="button">
                            <X size={28} strokeWidth={1} />
                        </button>
                    </div>

                    <form className="search-input-container" onSubmit={handleFullSearch}>
                        <input
                            type="text"
                            className="search-main-input"
                            placeholder="Поиск..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus={isSearchOpen}
                        />
                        <button type="submit" className="icon-btn">
                            <Search size={26} strokeWidth={1.5} />
                        </button>
                    </form>
                    {searchQuery && (
                        <div className="search-live-results">
                            <div className="results-list">
                                {results.map(product => (
                                    <Link
                                        to={`/products/${product.id}`}
                                        key={product.id}
                                        className="result-item"
                                        onClick={closeSearch}
                                    >
                                        <div className="result-img-container">
                                            <img src={product.image} alt={product.title} />
                                        </div>

                                        <div className="result-info">
                                            <span className="result-title">{product.title}</span>
                                            <span className="result-price">Смотреть детали</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="search-footer-bar" onClick={() => handleFullSearch()}>
                                <span>Искать "{searchQuery}"</span>
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};