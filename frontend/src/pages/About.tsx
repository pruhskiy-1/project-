import { Link } from "react-router-dom";
import './About.css';

 export const About = () => {
    return (
        <div className="about-page">
            <nav className="breadcrumbs">
                <Link to="/">Домой/</Link><span>О нас</span>
            </nav>
            <div className="about-container">
                <div className="about-text-side">
                    <h1 className="about-title">О нас</h1>
                    <div className="about-description">
                        <p>
                            Длинный текст
                        </p>
                        <p>
                            еще
                        </p>
                    </div>
                </div>
                <div className="about-image-side">
                    <img src = "/man.jpg" alt = "us" className="about-img" />
                </div>
            </div>
        </div>
    )
}
