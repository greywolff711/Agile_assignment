import React, { useState } from "react";
import {Link } from "react-router-dom";
import "./Navbar.css";
import ThemeSwitcher from "./ThemeSwitcher";
import {ThemeContext} from "../providers/ThemeProvider";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="text-color bg nav-container">
          <Link to="/" className="nav-logo">
              <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" className="img_logo"/>
          </Link>

          <ul className={click ? "bg nav-menu active" : "bg nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="text-color nav-links"
                onClick={handleClick}
              >
              <i class="fa-solid fa-house-chimney"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                activeClassName="active"
                className="text-color nav-links"
                onClick={handleClick}
              >
                <i class="fa-solid fa-address-card"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Settings"
                activeClassName="active"
                className="text-color nav-links"
                onClick={handleClick}
              >
                <i class="fa-solid fa-gears"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Alerts" activeClassName="active"  className="text-color nav-links" onClick={handleClick}
              >
                <i class="fa-solid fa-bell"></i>
              </Link>
            </li>
            <li className="nav-item">
                <ThemeSwitcher/>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;