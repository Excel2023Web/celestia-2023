import React from 'react';
import './Footer.css';
import mec_logo from "c:/Users/RIYA MARY JOSE/Desktop/cele/celestia-202/src/assets/png/mec_logo.png";
import excelLogoWithText from "c:/Users/RIYA MARY JOSE/Desktop/cele/celestia-202/src/assets/png/excel-logo-withtext.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="https://mec.ac.in" target="_blank" rel="noopener noreferrer">
          <img src={mec_logo} alt="MEC Logo" />
        </a>
      </div>
      <div className="footer-center">
        <div className="social-links">
          <a href="https://www.facebook.com/excelmec" className="social-link">
            <FontAwesomeIcon icon={faFacebook} className="social-icon facebook-icon" />
          </a>
          <a href="https://twitter.com" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="social-icon twitter-icon" />
          </a>
          <a href="https://instagram.com" className="social-link">
            <FontAwesomeIcon icon={faInstagram} className="social-icon instagram-icon" />
          </a>
          <a href="https://linkedin.com" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin-icon" />
          </a>
        </div>
        <p>Made with 🧡 Excel 2022</p>
      </div>
      <div className="footer-right">
        <a href="https://www.excelmec.org" target="_blank" rel="noopener noreferrer">
          <img src={excelLogoWithText} alt="Excel Logo with Text" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
