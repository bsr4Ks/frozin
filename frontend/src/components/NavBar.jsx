import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function NavBar(props) {
    const navigate = useNavigate()
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setIsAuth(false)
        navigate('/');
    };

    return <nav className={props.className}>
        <div className="sec1">
            <Link className="link logo" to="/">frozin</Link>
        </div>
        <div className="sec2">
            {!isAuth && <Link className="link nav-login" to="/login">Oturum Aç</Link>}
            {isAuth && <Link onClick={handleLogout}>Çıkış Yap</Link>}
        </div>
    </nav>

}