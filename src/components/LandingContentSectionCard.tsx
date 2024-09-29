import React from "react";

interface Props {
  number: number;
  title: string;
}

const LandingContentSectionCard = ({ number, title }: Props) => {
  return (
    <div className="landing-content-section-card">
      <div className="index">0{number}</div>
      <div className="title">
        <h2>{title}</h2>
        <p>Прочитај повеќе</p>
      </div>
    </div>
  );
};

export default LandingContentSectionCard;
