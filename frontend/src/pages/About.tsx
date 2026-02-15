import { Link } from 'react-router-dom';
import './About.css';

export const About = () => {
    return (
        <div className="about-page">

            <div className="about-container">
                <div className="about-text-side">
                    <section className="about-block">
                        <h3 className="about-subtitle">Философия триумфа</h3>
                        <p>
                            Все началось не с мастерской, а с наблюдения. Мы заметили, что самые сильные эмоции
                            всегда связаны с определенными символами: звук захлопывающейся двери суперкара,
                            хруст новой купюры, холодный блеск металла в руках. Это не просто объекты — это триггеры победы.
                        </p>
                    </section>

                    <section className="about-block">
                        <h3 className="about-subtitle">Эссенция успеха</h3>
                        <p>
                            Так родился бренд <strong>FESENCE</strong> (от англ. Essence — сущность).
                            Наша миссия — вычленить саму суть успеха и заключить её в безупречную форму.
                            Мы создаем артефакты для тех, кто понимает: настоящая роскошь — это возможность
                            окружить себя смыслами, которые резонируют с внутренней силой.
                        </p>
                    </section>

                    <section className="about-block">
                        <h3 className="about-subtitle">Бескомпромиссное качество</h3>
                        <p>
                            Мы отказались от конвейера в пользу медитативного созидания. Если это стекло — то только
                            настоящее минеральное полотно с кристальной чистотой. Если это фраза — то вырезанная
                            с точностью до миллиметра. Каждая картина собирается вручную мастером, который часами
                            работает над композицией и светом.
                        </p>
                    </section>

                    <section className="about-block">
                        <h3 className="about-subtitle">Манифест в интерьере</h3>
                        <p>
                            Картины FESENCE — это не украшение стен. Это визуальные манифесты.
                            Человек, чей взгляд каждое утро встречается с фразой <em>«No Risk, No Story»</em>
                            под тяжелым стеклом, запрограммирован на экспансию. Наши работы выбирают те,
                            кто уже прошел путь от мечты к обладанию.
                        </p>
                    </section>
                </div>
                <div className="about-image-side">
                    <div className="about-img-wrapper">
                        <img src="/man.jpg" alt="Vania Studio Philosophy" />
                    </div>
                </div>
            </div>
        </div>
    );
};