import { Link } from 'react-router-dom';
import {  Instagram, ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4 className="footer-heading">INFO</h4>
                    <ul className="footer-links">
                        <li><Link to="/search">SEARCH</Link></li>
                        <li><Link to="/about" onClick={scrollToTop}>ABOUT US</Link></li>
                        <li><Link to="/collections">COLLECTIONS</Link></li>
                    </ul>
                </div>
                <div className="footer-section social-section">
                    <h4 className="footer-heading">FOLLOW US</h4>
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <Instagram size={18} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © 2026, <strong>VANIA STUDIO</strong>. All rights reserved.
                </p>
                <button className="footer-scroll-top" onClick={scrollToTop} type="button">
                    <ArrowUp size={24} strokeWidth={1} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;