import home_banner from "../assets/home-banner.jpg"
import home2 from "../assets/home-2.png"
import "../styles/home.css"
import "../styles/global.css"
import { NavBar } from "../components/NavBar"
import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate();

    return <div>
        <div className="home-body"></div>
        <main>
            <div className="home-section1">
                <header><NavBar /></header>
                <div className="banner">
                    <h1>Eşiniz ve frozin</h1>
                    <div className="button" onClick={() => navigate("/register")}>
                    <div className="text">Hesap Oluştur</div>
                    <div className="part"><p>&rarr;</p></div>
                    </div>
                </div>
            </div>
            <div className="home-section2">
                <div className="home2"><img src={home2}></img></div>
                <div className="text">
                    <h2>frozin'e bak</h2>
                    <p>“Frozin, eşleştiğiniz kişiyle birlikte büyüttüğünüz dijital bir pet’tir. Onu besleyin, oynatın, sohbet edin—her etkileşim Frozin’in ruh halini değiştirir. Bu sadece bir eşleşme değil, birlikte yaşattığınız bir karakter.</p></div>
            </div>
        </main>
    </div>
}