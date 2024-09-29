import { ResearchType } from "@/types";
import React from "react";
import HoverCard from "./HoverCard";

interface Props {
  data: ResearchType[];
}

const LandingResearchComponent = ({ data }: Props) => {
  const aosAnimations = ["fade-down", "fade-left", "fade-right", "fade-up"];
  return (
    <section className="landing-research-section">
      <h1>Популарни истражувања</h1>
      <div className="hoverCards">
        {data.map((item, index) => (
          <HoverCard
            key={item.id}
            item={item}
            dataAos={aosAnimations[index % aosAnimations.length]}
            link={"none"}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingResearchComponent;
