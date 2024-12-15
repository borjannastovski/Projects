import { EventType } from "@/types";
import React from "react";
import HoverCard from "./HoverCard";

interface Props {
  data: EventType[];
}

const SimilarEventsComp = ({ data }: Props) => {
  return (
    <section className="similar-events">
      <h1>Слични настани</h1>
      <div className="events">
        {data.map((blog) => (
          <HoverCard key={blog.id} item={blog} />
        ))}
      </div>
    </section>
  );
};

export default SimilarEventsComp;
