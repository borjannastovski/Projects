import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import EventAgenda from "@/components/EventAgenda";
import EventPageIntro from "@/components/EventPageIntro";
import EventPricing from "@/components/EventPricing";
import EventSpeakers from "@/components/EventSpeakers";
import HeroSectionTypeThree from "@/components/HeroSectionTypeThree";
import SimilarEventsComp from "@/components/SimilarEventsComp";
import { EventType } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  eventData: EventType;
  randomEvents: EventType[];
}

const EventPage: NextPage<Props> = ({ eventData, randomEvents }) => {
  return (
    <section>
      <HeroSectionTypeThree data={eventData} />
      <Carousel />
      <Breadcrumbs url={eventData.type} url2={eventData.title} />
      <EventPageIntro eventData={eventData} />
      <section className="forDots">
        <EventAgenda data={eventData} />
        <img className="agenda-dots" src="/images/dots-17.png" alt="" />
      </section>
      <EventSpeakers data={eventData} />
      <EventPricing data={eventData} />
      <SimilarEventsComp data={randomEvents} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const eventRes = await fetch("http://localhost:5001/events");
  const eventData: EventType[] = await eventRes.json();

  const paths = eventData.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const eventRes = await fetch(
      `http://localhost:5001/events?slug=${params.slug}`
    );
    const eventDataArray = await eventRes.json();

    const res = await fetch("http://localhost:5001/events");
    const events: EventType[] = await res.json();

    const shuffledEvents = events.sort(() => 0.5 - Math.random());
    const randomEvents = shuffledEvents.slice(0, 4);

    if (!eventDataArray || eventDataArray.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        eventData: eventDataArray[0],
        randomEvents,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default EventPage;
