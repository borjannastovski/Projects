import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="leftSideFooter">
        <Link href="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <div className="footerInfo">
          <div className="address">
            <h4>Адреса</h4>
            <p>Бул. ВМРО бр. 7/1-7</p>
            <p>1000 Скопје, Македонија</p>
          </div>
          <div>
            <h4>Е-маил</h4>
            <p>contact@mhra.mk</p>
          </div>
        </div>
      </div>
      <div className="rightSideFooter">
        <h2>Претплати се на билтен</h2>
        <input type="email" placeholder="Е-маил" />
        <div className="icons">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="faInstagram" icon={faInstagram} />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="faFacebook" icon={faFacebook} />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="faYoutube" icon={faYoutube} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
