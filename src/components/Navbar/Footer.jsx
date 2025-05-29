import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Cryptoplace — All Rights Reserved.</p>
        <p>
          Made by <strong>Atul</strong> —&nbsp;
          <a href="https://github.com/atul-2004-dev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
