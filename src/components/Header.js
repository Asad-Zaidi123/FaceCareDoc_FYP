import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        ClariX-RAY
      </a>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/upload">X-Ray Upload</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li className="faq" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="/faq">FAQs</a>
          {showDropdown && (
            <ul className="dropdown">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li><br></br>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
          )}
        </li>
        <li>
          <a href="/login">Login/Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
