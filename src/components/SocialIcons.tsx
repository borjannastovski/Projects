import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <p>Заследи не на социјалните медиуми</p>
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
  );
};

export default SocialIcons;
