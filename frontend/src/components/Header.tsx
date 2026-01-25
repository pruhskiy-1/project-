import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">

            <div className="header-top">
                <div className="header-left">
                    <button className="icon-btn">
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
                    <li><Link to="/" className="nav-link active">Home</Link></li>
                    <li><Link to="/collections" className="nav-link">Collections</Link></li>
                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><Link to="/contacts" className="nav-link">Contact</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;