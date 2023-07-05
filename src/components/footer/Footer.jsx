import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#/" className="footer__logo">
        SMR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100071118893740" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/hamza-4a2443166/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/hamzaDev654" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;SMR . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
