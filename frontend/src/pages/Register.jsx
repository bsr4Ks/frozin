import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"
import { NavBar } from "../components/NavBar";
import axios from "axios";
import { LoginRegisterForm } from "../components/LoginRegisterForm";


export function Register() {

    return <div className="register-body">
        <NavBar className="register-nav" />
        {/* <div className="register-part1"></div> */}
        <div className="register-form"><LoginRegisterForm
            formType = "register"
            heading = "Hesap Oluştur, frozin'le keyfini çıkar"
            formName= "Hesap Oluştur"
            submitText="Kayıt Ol"
            subtleText="Zaten hesabın var mı?  "
            endpoint="login"
            endpointText="Oturum Aç"
        /></div>
    </div>
}