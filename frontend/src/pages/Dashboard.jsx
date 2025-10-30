import { NavBar } from "../components/NavBar";
import "../styles/dashboard.css"

export function Dashboard() {
    return <div className="dashboard-body">
        <NavBar className="dashboard-nav"/>
        <div className="dashboard-main">
            <h1>Main Page</h1>
        </div>
    </div>
}