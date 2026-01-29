import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import './Header.css';

export const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Закрытие поиска по клавише ESC
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsSearchOpen(false);
            }
        };

        if (isSearchOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isSearchOpen]);

    return (
        <header className="header">
            <div className={`header-content ${isSearchOpen ? 'hidden' : ''}`}>
                <div className="header-top">
                    <div className="header-left">
                        <button className="icon-btn" onClick={() => setIsSearchOpen(true)}>
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                    </div>

                    <div className="header-center">
                        <Link to="/" className="logo">
                            Название магазина
                        </Link>
                    </div>

                    <div className="header-right">
                    </div>
                </div>

                <nav className="header-bottom">
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link active">Домой</Link></li>
                        <li><Link to="/collections" className="nav-link">Коллекции</Link></li>
                        <li><Link to="/About" className="nav-link">О нас</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
                <div className="search-container">
                    <div className="search-content">
                        <span className="search-label">Что вы ищете?</span>
                        <div className="search-input-wrapper">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Поиск..."
                                autoFocus={isSearchOpen}
                            />
                            <Search className="search-submit-icon" size={24} strokeWidth={1.5} />
                        </div>
                    </div>
                    <button className="search-close-btn" onClick={() => setIsSearchOpen(false)}>
                        <X size={28} strokeWidth={1} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;