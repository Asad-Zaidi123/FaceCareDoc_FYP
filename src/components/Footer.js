import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <p>
          <span className="footer-icon">📍</span> Address: Defense Road, DHA Phase 2, Lahore, Punjab, Pakistan
        </p>
        <p>
          <span className="footer-icon">📞</span> HelpLine: +923046300407
        </p>
        <p>
          <span className="footer-icon">✉️</span> Email: contact@clarixray.com
        </p>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <p>© 2024 ClariX-RAY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
