import { EventType } from "@/types";
import React from "react";
import HoverCard from "./HoverCard";

interface Props {
  data: EventType[];
}

const LandingEventsSection: React.FC<Props> = ({ data }) => {
  const aosAnimations = ["fade-down", "fade-left", "fade-right", "fade-up"];

  return (
    <section className="landing-events-section">
      <h1>Актуелни настани</h1>
      <div className="hoverCards">
        {data.map((item, index) => (
          <HoverCard
            key={item.id}
            item={item}
            dataAos={aosAnimations[index % aosAnimations.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingEventsSection;
