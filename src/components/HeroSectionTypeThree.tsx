import { BlogType, EventType } from "@/types";
import React from "react";
import SocialIcons from "./SocialIcons";

interface Props {
  data: BlogType | EventType;
}

const HeroSectionTypeThree = ({ data }: Props) => {
  const isEvent = (data: BlogType | EventType): data is EventType => {
    return (data as EventType).type !== undefined;
  };

  const isBlog = (data: BlogType | EventType): data is BlogType => {
    return (data as BlogType).author !== undefined;
  };

  return (
    <>
      <section className="forDots">
        <div className="hero-section-three">
          <img src={data.img} alt="" />
          <div className="content">
            <p>{isBlog(data) ? "Блог" : "Настан"}</p>
            <h1>
              {isBlog(data)
                ? data.title
                : isEvent(data)
                ? data.conferenceTitle || data.type
                : null}
            </h1>

            {isBlog(data) && (
              <p>
                Од <span className="orange">{data.author}</span> | {data.date}
              </p>
            )}
            {isEvent(data) && (
              <p>
                |{" "}
                {data.conferenceDate
                  ? data.conferenceDate
                  : `${data.dateDay} ${data.dateMonth}, ${data.dateYear}`}
              </p>
            )}
          </div>
        </div>
        <img className="dots-img" src="/images/dots-2.png" alt="" />
      </section>
      <SocialIcons />
    </>
  );
};

export default HeroSectionTypeThree;
