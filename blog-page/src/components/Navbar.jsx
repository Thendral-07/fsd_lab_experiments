import { NavLink } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className = "titlebar">CodeNest</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blogs</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;