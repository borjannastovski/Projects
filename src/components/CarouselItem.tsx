import { EventType } from "@/types";
import Link from "next/link";
import React from "react";

const CarouselItem = ({
  slug,
  img,
  type,
  title,
  dateMonth,
  dateDay,
}: EventType) => {
  return (
    <Link href={`/events/${slug}`}>
      <div className="carouselItem">
        <img src={img} alt="Event" />
        <div className="content">
          <p>{type}</p>
          <p>{title}</p>
          <h3>{dateMonth.slice(0, 3)}</h3>
          <h2>{dateDay}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
