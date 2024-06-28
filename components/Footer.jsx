import React from 'react';
import '@/styles/components/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__inner__left">
          <p>
            Built by: <span>Viney</span>
          </p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Email</p>
        </div>
        <h2 className="footer__inner__mid" data-animation="blurIn">
          Haven
        </h2>
        <div className="footer__inner__right">
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
          <p>Showreel</p>
        </div>
      </div>
      <div className="footer__date">
        <p>&copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;
