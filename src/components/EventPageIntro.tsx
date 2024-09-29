import { EventType } from "@/types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  eventData: EventType;
}

const EventPageIntro = ({ eventData }: Props) => {
  return (
    <section className="event-intro">
      <h1>{eventData.type}</h1>
      <h2>тема: "{eventData.title}"</h2>
      <div className="content">
        <div className="left">
          <h3>Опис:</h3>
          <p>{eventData.eventDescription}</p>
          <h3>Цел:</h3>
          <p>{eventData.eventPurpose}</p>
          <img src="/images/dots-18.png" alt="" />
        </div>
        <div className="right">
          <img src={eventData.eventImg} alt="" />
          <div className="buy-card">
            <FontAwesomeIcon icon={faLink} />
            <div className="buy-card-info">
              <h4>купи карта</h4>
              <p>mhraconference.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPageIntro;
