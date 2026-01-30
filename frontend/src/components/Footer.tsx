import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main-content">
                    <div className="footer-section">
                        <h4 className="footer-heading">Меню</h4>
                        <ul className="footer-links">
                            <li><Link to="/search" onClick={scrollToTop}>Поиск</Link></li>
                            <li><Link to="/about" onClick={scrollToTop}>О нас</Link></li>
                            <li><Link to="/collections" onClick={scrollToTop}>Коллекции</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section center-content">
                        <h4 className="footer-heading">Социальные сети</h4>
                        <div className="footer-socials">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                                <img src='/instagram.jpg' alt="Instagram" className="social-img" />
                            </a>
                            <a href="https://wildberries.ru" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Wildberries">
                                <img src='/wb.png' alt="Wildberries" className="social-img" />
                            </a>
                            <a href="https://ozon.ru" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Ozon">
                                <img src='/ozon.png' alt="Ozon" className="social-img" />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        © 2026 Название. Текст
                    </div>
                    <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                        <ArrowUp size={20} strokeWidth={2} />
                    </button>
                </div>

            </div>
        </footer>
    );
};