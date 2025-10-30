import {useState} from 'react';
import axios from 'axios';
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';

const loginUrl = "http://localhost:3000/api/auth/login"

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setErrorMsg('');

        try {
            const response =await axios.post(loginUrl, {email , password});
            console.log('Login successful:', response.data);
            //token ı kaydet
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            //ana sayfaya yönlendir
            navigate('/');
        } catch (e) {
            console.log('Login failed:', e.response?.data);
            setErrorMsg(e.response?.data.error || 'Login failed. Please try again.');
        }
    }

    return(
        <div className="login-container">
            <h1>Login|Frozin</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMsg && <p className="error">{errorMsg}</p>}
                <button type="submit">Login</button>
            </form>

            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>)
}

