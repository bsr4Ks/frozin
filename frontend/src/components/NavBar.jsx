import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/navbar.css"

const isLoggedIn = !!localStorage.getItem("token")


export function NavBar() {
    return <nav>
        <div className="sec1">
            <Link className="link logo" to="/">frozin</Link>
        </div>
        <div className="sec2">
            {!isLoggedIn && <Link className="link nav-login" to="/login">Oturum Aç</Link>}
        </div>
    </nav>

}