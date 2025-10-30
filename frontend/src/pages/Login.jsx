import {useState} from 'react';
import axios from 'axios';
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { LoginRegisterForm } from '../components/LoginRegisterForm';

export function Login() {
    return(
        <div className='login-body'>
            <NavBar className="login-nav"/>
            <div className="login-form"><LoginRegisterForm
            heading = "Oturum Aç, hemen eşleş!"
            formName= "Oturum Aç"
            submitText="Giriş Yap"
            subtleText="Hesabın yok mu? "
            endpoint="register"
            endpointText="Hesap Oluştur"
        /></div>
        </div>
        )
}

