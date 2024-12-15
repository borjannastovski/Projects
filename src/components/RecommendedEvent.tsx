import { EventType } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  item: EventType;
}

const RecommendedEvent = ({ item }: Props) => {
  return (
    <div className="recommended-event">
      <img src={item.img} alt="Event" />
      <div className="content">
        <p>Предложен настан: </p>
        <p>{item.type}</p>
        <p>{item.title}</p>
        <h3>{item.dateMonth.slice(0, 3)}</h3>
        <h2>{item.dateDay}</h2>
        <Link href={`/events/${item.slug}`}>
          <p className="read-more">Прочитај повеќе</p>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedEvent;
