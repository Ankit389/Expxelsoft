import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // External CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo2.png" alt="Logo" className="logo-image" /> {/* Reference to the logo in the public folder */}
        </div>
        
        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Mobile app</h4>
            <ul>
              <li>Features</li>
              <li>Live share</li>
              <li>Video record</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li>Featured artists</li>
              <li>The Portal</li>
              <li>Live events</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>History</li>
            </ul>
          </div>
        </div>

        {/* Register & Login buttons */}
        <div className="footer-buttons">
          <button className="btn-register">Register</button>
          <button className="btn-login">Log in</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© Photo, Inc. 2019. We love our users!</p>
        <div className="footer-social">
          <span>Follow us:</span>
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedinIn className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
