import { useState } from "react";
import "../styles/login_register_form.css"
import { register, login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function LoginRegisterForm(props) {
    const { setIsAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        //call register api
        if (props.formType == "register") {
            try {
                const response = await register({ email, password })
                console.log(response);

                navigate("/login")
            } catch (error) {
                setErrorMsg(error.response.data.error)
                console.log(error.response.data.error);
            }
        }
        //call login api
        else {
            try {
                const response = await login({ email, password })
                console.log(response);

                //token ı kaydet
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setIsAuth(true);
                navigate('/');
            } catch (error) {
                setErrorMsg(error.response.data.error)
                console.log(error.response.data.error);
            }
        }



    }

    return <div className="lr-form-container">
        <div className="lr-text">{props.heading}</div>
        <form className="lr-form" onSubmit={handleSubmit}>
            <h2>{props.formName}</h2>
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

            <button type="submit">{props.submitText}</button>
        </form>
        <p className="lr-subtle-text">{props.subtleText} <a href={"/" + props.endpoint} >{props.endpointText}</a></p>

    </div>
}