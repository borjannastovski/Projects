import { EventType } from "@/types";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  data: EventType;
}

const ConferenceIntro = ({ data }: Props) => {
  return (
    <section className="conference-intro">
      <div className="left">
        <h1>{data.conferenceTitle}</h1>
        <div className="info">
          <p className="data">
            <FontAwesomeIcon icon={faCalendar} /> {data.conferenceDate}
          </p>
          <p className="location">
            <FontAwesomeIcon icon={faLocationDot} /> {data.conferencePlace}
          </p>
        </div>
        <p>{data.conferenceDesc}</p>
        <div className="buy-card">
          <FontAwesomeIcon icon={faLink} />
          <div className="buy-card-info">
            <h4>купи карта</h4>
            <p>mhraconference.com</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="img-1" src={data.conferencePic1} alt="" />
        <img className="img-2" src={data.conferencePic2} alt="" />
        <img className="img-3" src={data.conferencePic1} alt="" />
      </div>
    </section>
  );
};

export default ConferenceIntro;
