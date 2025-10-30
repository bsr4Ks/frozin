import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"
import { NavBar } from "../components/NavBar";
import axios from "axios";

const reigsterUrl = "http://localhost:3000/api/auth/register"

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        
        try {
            const response =await axios.post(reigsterUrl, { email, password });
            console.log('Registration successful:', response.data);
            //token ı kaydet
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            //ana sayfaya yönlendir
            navigate('/');
        } catch (e) {
            console.log('Registration failed:', e.response?.data);
            setErrorMsg(e.response?.data.error || 'Registration failed. Please try again.');
        }
        
    };

    return <div className="register-container">
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
                    
                    {errorMsg && <p className="error-message">{errorMsg}</p>}

                    <button type="submit">Kayıt Ol</button>
                </form>
                            <p className="already-have-an-account">Already have an account? <a href="/login">Login</a></p>

            </div>

        </main>
    </div>
}