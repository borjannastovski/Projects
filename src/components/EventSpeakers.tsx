import { EventType } from "@/types";
import React from "react";
import OdborCard from "./OdborCard";

interface Props {
  data: EventType;
}

const EventSpeakers = ({ data }: Props) => {
  return (
    <>
      <section className="forDots">
        <section className="event-speakers">
          <div className="left">
            <h2>Говорници на настанот:</h2>
          </div>
          <div className="right">
            {data.eventSpeakersList?.map((speaker) => (
              <OdborCard key={speaker.id} {...speaker} />
            ))}
          </div>
        </section>
        <img className="speaker-dots" src="/images/dots-19.png" alt="" />
      </section>
    </>
  );
};

export default EventSpeakers;
