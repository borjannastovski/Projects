import { SpeakerType } from "@/types";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface Props {
  speaker: SpeakerType;
}

const SpeakerCard = ({ speaker }: Props) => {
  return (
    <div className="speaker-card">
      <img src={speaker.img} alt={speaker.name} />
      <div className="info">
        <Link
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <div>
          <h2>{speaker.name}</h2>
          <p>{speaker.work}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
