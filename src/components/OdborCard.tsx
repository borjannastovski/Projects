import { BoardType } from "@/types";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const OdborCard: React.FC<BoardType> = ({ img, work, name }) => {
  return (
    <div className="boardCard">
      <div className="board-card-inner">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{work}</p>
        <div className="icons">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="faFacebook" icon={faFacebook} />
          </Link>
          <Link
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="faYoutube" icon={faSquareXTwitter} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="faInstagram" icon={faInstagram} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OdborCard;
