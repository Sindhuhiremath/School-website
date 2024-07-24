import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Link>
        <img src={logo} alt="schoollogo" style={{height: "40px" , width: "80px"}} />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/home" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/academics" onClick={toggleMenu}>
            Academics
          </Link>
        </li>
        <li>
          <Link to="/admissions" onClick={toggleMenu}>
            Admissions
          </Link>
        </li>
        <li>
          <Link to="/faculty" onClick={toggleMenu}>
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/students" onClick={toggleMenu}>
            Students
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
