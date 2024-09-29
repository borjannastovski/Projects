import Breadcrumbs from "@/components/Breadcrumbs";
import CalendarComponent from "@/components/CalendarComponent";
import EventCategories from "@/components/EventCategories";
import EventsList from "@/components/EventsList";
import HeroSectionTypeTwo from "@/components/HeroSectionTypeTwo";
import { useEventCategory } from "@/context/EventCategoryContext";
import { EventType } from "@/types";
import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";

interface Props {
  randomEvent: EventType;
  eventData: EventType[];
}

const Events: NextPage<Props> = ({ randomEvent, eventData }) => {
  const { activeCategory: globalCategory } = useEventCategory();
  const [activeCategory, setActiveCategory] = useState<string>("Сите");

  useEffect(() => {
    if (globalCategory) {
      setActiveCategory(globalCategory);
    }
  }, [globalCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section>
      <HeroSectionTypeTwo data={randomEvent} />
      <Breadcrumbs url="events" />
      <CalendarComponent />
      <EventCategories
        data={eventData}
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />
      <EventsList data={eventData} activeCategory={activeCategory} />
    </section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const eventsRes = await fetch("http://localhost:5001/events");
  const eventData: EventType[] = await eventsRes.json();

  const randomEvent = eventData[Math.floor(Math.random() * eventData.length)];
  return {
    props: {
      randomEvent,
      eventData,
    },
  };
};

export default Events;
