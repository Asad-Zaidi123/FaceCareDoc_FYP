import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">
                <Link to='/'>FaceCare AI</Link>
            </h1>

            {/* Hamburger menu button */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* Dropdown Menu */}
            <ul className={`dropdown-menu ${menuOpen ? "active" : ""}`}>
                <li className="dropdown-item"><Link to='/' onClick={toggleMenu}>Home</Link></li>
                <li className="dropdown-item"><Link to='/Features' onClick={toggleMenu}>Features</Link></li>
                <li className="dropdown-item"><Link to='/About' onClick={toggleMenu}>About</Link></li>
                <li className="dropdown-item"><Link to='/Contact' onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
