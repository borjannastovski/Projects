import { EventType } from "@/types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  data: EventType;
}

const EventPricing = ({ data }: Props) => {
  return (
    <section className="event-pricing">
      <div className="pricing">
        <div className="left">
          <h2>Цена за поединци</h2>
          <h2>{data.poedinciPrice}мкд</h2>
        </div>
        <div className="right">
          <h2>Цена за компании</h2>
          <h2>{data.kompaniiPrice}мкд</h2>
        </div>
      </div>
      <div className="image-box">
        <img src="/images/landingBlogs-1.jpg" alt="" />
        <div className="buy-card">
          <FontAwesomeIcon icon={faLink} />
          <div className="buy-card-info">
            <h4>купи карта</h4>
            <p>mhraconference.com</p>
          </div>
        </div>
        <button>Предложи пријател</button>
      </div>
    </section>
  );
};

export default EventPricing;
