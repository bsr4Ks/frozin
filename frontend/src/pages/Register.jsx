import { useState } from "react";
import "../styles/register.css"
import { NavBar } from "../components/NavBar";

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return <div className="register-body">
        <main className="register-main"><header><NavBar /></header>
            <div className="register-part1"></div>
            <div className="register-section1">
                <div className="register-text">Hesap Oluştur, frozin'le keyfini çıkar</div>
                <form className="register-form" onSubmit={handleSubmit}>
                <h2>Hesap Oluştur</h2>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Şifre</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Kayıt Ol</button>
            </form>
            </div>
        </main>
    </div>
}