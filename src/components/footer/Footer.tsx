import React from 'react';
import './Footer.scss'; 
import { FaPhone } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="stock">
        <ul className="list">
          <li><a href="/about">About</a></li>
          <li><a href="/hire">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <br />
        <p><FaPhone /> +234 8124 769757</p>
        <p>
          <IoMail /> 
          <a href="mailto:sulaimoneyitayo@gmail.com">sulaimoneyitayo@gmail.com</a>
        </p>
        <br />
        <p className="copyright">© 2024 EYITAYO | ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
