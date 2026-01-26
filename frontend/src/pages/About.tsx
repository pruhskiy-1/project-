import { Link } from "react-router-dom";
import './About.css';

 export const About = () => {
    return (
        <div className="about-page">
            <nav className="breadcrumbs">
                <Link to="/">Home/</Link><span>About us</span>
            </nav>
            <div className="about-container">
                <div className="about-text-side">
                    <h1 className="about-title">О нашей шаражкиной конторке</h1>
                    <div className="about-description">
                        <p>
                            Короче мы крутые васяны и мы делаем крутые вещи верьте нам
                        </p>
                        <p>
                            uuudsaduuus
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
