import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-main-content">
                <div className="footer-section">
                    <h4 className="footer-heading">INFO</h4>
                    <ul className="footer-links">
                        <li><Link to="/search" onClick={scrollToTop}>ПОИСК</Link></li>
                        <li><Link to="/about" onClick={scrollToTop}>О НАС</Link></li>
                        <li><Link to="/collections" onClick={scrollToTop}>КОЛЛЕКЦИИ</Link></li>
                    </ul>
                </div>

                <div className="footer-section social-wrap">
                    <h4 className="footer-heading">ТАКЖЕ МЫ ЕСТЬ В</h4>
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-photo-link">
                            <img src="/instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://wildberries.ru" target="_blank" rel="noreferrer" className="social-photo-link">
                            <img src="/wb.jpg" alt="Wildberries" />
                        </a>
                        <a href="https://ozon.ru" target="_blank" rel="noreferrer" className="social-photo-link">
                            <img src="/ozon.png" alt="Ozon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-bar">
                <div className="footer-copyright">
                    © 2026, <strong>Название</strong>. Текст
                </div>
                <button className="footer-scroll-top" onClick={scrollToTop} type="button">
                    <ArrowUp size={22} strokeWidth={1.5} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;