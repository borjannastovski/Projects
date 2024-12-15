import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import ConferenceInfo from "@/components/ConferenceInfo";
import ConferenceIntro from "@/components/ConferenceIntro";
import ConferencePackets from "@/components/ConferencePackets";
import ConferenceQuote from "@/components/ConferenceQuote";
import EventAgenda from "@/components/EventAgenda";
import HeroSectionTypeThree from "@/components/HeroSectionTypeThree";
import NewestBlogsComp from "@/components/NewestBlogsComp";
import SimilarEventsComp from "@/components/SimilarEventsComp";
import SpeakersList from "@/components/SpeakersList";
import { BlogType, EventType } from "@/types";
import { GetStaticProps, NextPage } from "next";
import React from "react";
interface Props {
  event: EventType | null;
  blogsData: BlogType[];
  randomEvents: EventType[];
}
const Conference: NextPage<Props> = ({ event, blogsData, randomEvents }) => {
  if (!event) {
    return <p>Event not found.</p>;
  }
  return (
    <section>
      <HeroSectionTypeThree data={event} />
      <Carousel />
      <Breadcrumbs url="conference" />
      <ConferenceIntro data={event} />
      <ConferenceInfo data={event} />
      <SpeakersList data={event} />
      <img className="conf-dots" src="/images/dots-12.png" alt="" />
      <EventAgenda data={event} />
      <img className="conf-dots" src="/images/dots-12.png" alt="" />
      <ConferenceQuote data={event} />
      <ConferencePackets data={event} />
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0683775251955!2d21.449998876029113!3d41.99880805784814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415986f9f2cd7%3A0x61669f4d3a9aa58c!2sHotel%20Continental!5e0!3m2!1sen!2smk!4v1725924831278!5m2!1sen!2smk"
          width="60%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <NewestBlogsComp data={blogsData} />
      <SimilarEventsComp data={randomEvents} />
    </section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://localhost:5001/events");
  const events: EventType[] = await res.json();
  const blogsRes = await fetch("http://localhost:5001/blogs");
  const blogsData: BlogType[] = await blogsRes.json();

  const conferenceEvent = events.find((event) => event.slug === "conference");

  const shuffledBlogs = blogsData.sort(() => 0.5 - Math.random());
  const randomBlogs = shuffledBlogs.slice(0, 4);

  const shuffledEvents = events.sort(() => 0.5 - Math.random());
  const randomEvents = shuffledEvents.slice(0, 4);

  return {
    props: {
      event: conferenceEvent || null,
      blogsData: randomBlogs,
      randomEvents,
    },
  };
};

export default Conference;
