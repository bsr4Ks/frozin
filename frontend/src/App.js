import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NavBar } from "./components/NavBar";

function App() {
  return <div>
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </Router>
  </div>
}

export default App;
