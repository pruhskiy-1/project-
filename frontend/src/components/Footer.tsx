import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const ICON_SIZE = 34;
const STROKE_WIDTH = 2;
const IconInstagram = ({ size = ICON_SIZE }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-icon">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth={STROKE_WIDTH} />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth={STROKE_WIDTH} />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth={STROKE_WIDTH * 1.5} strokeLinecap="round" />
    </svg>
);

const IconWB = ({ size = ICON_SIZE }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-icon">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" stroke="currentColor" strokeWidth={STROKE_WIDTH} />
        <text x="50%" y="64%" fontSize="9" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none" style={{ fontFamily: 'Arial, sans-serif' }}>
            WB
        </text>
    </svg>
);

const IconOzon = ({ size = ICON_SIZE }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-icon">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" stroke="currentColor" strokeWidth={STROKE_WIDTH} />
        <text
            x="50%"
            y="62%"
            fontSize="6"
            fontWeight="700"
            textAnchor="middle"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.1"
            style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0' }}
        >
            OZON
        </text>
    </svg>
);

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
                                <IconInstagram size={ICON_SIZE} />
                            </a>
                            <a href="https://wildberries.ru" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Wildberries">
                                <IconWB size={ICON_SIZE} />
                            </a>
                            <a href="https://ozon.ru" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Ozon">
                                <IconOzon size={ICON_SIZE} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        © 2026 Urban Silence. All Rights Reserved.
                    </div>
                    <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                        <ArrowUp size={20} strokeWidth={STROKE_WIDTH} />
                    </button>
                </div>

            </div>
        </footer>
    );
};