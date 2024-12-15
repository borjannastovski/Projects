import { EventType } from "@/types";
import React, { useState } from "react";

interface Props {
  data: EventType;
}

const ConferenceQuote = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (data.conferenceQuote?.quotes.length || 1) - 1
        : prevIndex - 1
    );
  };

  const nextQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === (data.conferenceQuote?.quotes.length || 1) - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <>
      <section className="forDots">
        <section className="conference-quote">
          <img
            src={data.conferenceQuote?.img}
            alt={data.conferenceQuote?.name}
          />
          <p className="quote-sign">“</p>
          <div className="content">
            <h1>{data.conferenceQuote?.name}</h1>
            <p className="work">{data.conferenceQuote?.work}</p>
            <div className="quote-text">
              <p>{data.conferenceQuote?.quotes[currentIndex]}</p>
            </div>
            <div className="quote-navigation">
              <button onClick={prevQuote}>{"<"}</button>
              <span>
                {currentIndex + 1} / {data.conferenceQuote?.quotes.length}
              </span>
              <button onClick={nextQuote}>{">"}</button>
            </div>
          </div>
        </section>
        <img className="dots-img quote-dots" src="/images/dots-13.png" alt="" />
      </section>
    </>
  );
};

export default ConferenceQuote;
