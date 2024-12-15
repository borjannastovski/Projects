import React, { useEffect, useState } from "react";
import { EventType } from "@/types";
import CarouselItem from "./CarouselItem";
import Link from "next/link";

const Carousel = () => {
  const [items, setItems] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/events");
        const data: EventType[] = await response.json();
        setItems([...data]);
      } catch (error) {
        console.error("Failed to fetch events data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
