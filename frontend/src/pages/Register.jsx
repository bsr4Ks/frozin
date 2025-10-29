import { useState } from "react";
import "../styles/register.css"
import { NavBar } from "../components/NavBar";
import axios from "axios";

const reigsterUrl = "http://localhost:3000/api/auth/register"

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.post(reigsterUrl, {email:email, password:password})
        .then(response => console.log(response))
        .catch(e => {
            console.log(e.response.data)
            setErrorMsg(e.response.data.error)
        })
        
    };

    return <div className="register-body">
        <main className="register-main"><header><NavBar /></header>
            <div className="register-part1"></div>
            <div className="register-section1">
                <div className="register-text">Hesap Oluştur, frozin'le keyfini çıkar</div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Hesap Oluştur</h2>
                    {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="off"
                    />

                    <label htmlFor="password">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                    />

                    <button type="submit">Kayıt Ol</button>
                </form>
            </div>
        </main>
    </div>
}