import { useEffect } from "react"
import home_banner from "../assets/home-banner.jpg"
import home2 from "../assets/home-2.png"
import "../styles/home.css"
import "../styles/global.css"
import { NavBar } from "../components/NavBar"
import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const section2 = document.querySelector('.home-section2');
            const home2Element = document.querySelector('.home2');
            const textElement = document.querySelector('.home-section2 .text');

            if (section2 && home2Element && textElement) {
                const section2Top = section2.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Eğer section2 ekranın %70'ine geldiyse animasyonu tetikle
                if (section2Top < windowHeight * 0.7) {
                    home2Element.classList.add('visible');
                    textElement.classList.add('visible');
                }
            }
        };

        // Sayfa yüklendiğinde ve scroll olduğunda kontrol et
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div>
        <div className="home-body"></div>
        <main> <NavBar className="home-nav"/>
            <div className="home-section1">
                <div className="banner">
                    <h1>Eşiniz ve frozin</h1>
                    <div className="button" onClick={() => navigate("/register")}>
                        <div className="text">Hesap Oluştur</div>
                        <div className="part"><p>&rarr;</p></div>
                    </div>
                </div>
            </div>
            <div className="home-section2">
                <div className="home2"><img src={home2} alt="Frozin character" /></div>
                <div className="text">
                    <h2>frozin'e bak</h2>
                    <p>"Frozin, eşleştiğiniz kişiyle birlikte büyüttüğünüz dijital bir pet'tir. Onu besleyin, oynatın, sohbet edin—her etkileşim Frozin'in ruh halini değiştirir. Bu sadece bir eşleşme değil, birlikte yaşattığınız bir karakter."</p>
                </div>
            </div>
        </main>
    </div>
}