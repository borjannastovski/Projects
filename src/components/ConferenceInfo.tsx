import { EventType } from "@/types";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  data: EventType;
}

const ConferenceInfo = ({ data }: Props) => {
  return (
    <>
      <section className="conf-info-dots-section">
        <section className="conference-info">
          <div className="info">
            <FontAwesomeIcon icon={faCalendar} />
            <div className="content">
              <h4>{data.conferenceDays}</h4>
              <p>Дена</p>
            </div>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faUser} />
            <div className="content">
              <h4>{data.conferenceSpeakers}</h4>
              <p>Неверојатни Спикери</p>
            </div>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faMugSaucer} />
            <div className="content">
              <h4>{data.conferenceRestaurants}</h4>
              <p>Ресторани</p>
            </div>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faBook} />
            <div className="content">
              <h4>{data.conferenceBooks}</h4>
              <p>Едукативни книги</p>
            </div>
          </div>
        </section>
        <img className="conf-info-dots" src="/images/dots-12.png" alt="" />
      </section>
    </>
  );
};

export default ConferenceInfo;
