import Carousel from "@/components/Carousel";
import HeroSectionTypeOne from "@/components/HeroSectionTypeOne";
import LandingBlogSection from "@/components/LandingBlogSection";
import LandingConferenceSection from "@/components/LandingConferenceSection";
import LandingContentSection from "@/components/LandingContentSection";
import LandingEventsSection from "@/components/LandingEventsSection";
import LandingLearnMoreComponent from "@/components/LandingLearnMoreComponent";
import LandingResearchComponent from "@/components/LandingResearchComponent";
import { EventType, ResearchType } from "@/types";
import { GetStaticProps, NextPage } from "next";

interface Props {
  eventsSectionData: EventType[];
  researchData: ResearchType[];
}

const Home: NextPage<Props> = ({ eventsSectionData, researchData }) => {
  return (
    <>
      <HeroSectionTypeOne title="Луѓето пред се!" button="Зачлени се" />
      <Carousel />
      <LandingBlogSection />
      <LandingContentSection />
      <LandingEventsSection data={eventsSectionData} />
      <LandingConferenceSection />
      <LandingResearchComponent data={researchData} />
      <LandingLearnMoreComponent />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const eventsSectionRes = await fetch(
    "http://localhost:5001/events?_start=0&_limit=4"
  );
  const eventsSectionData: EventType[] = await eventsSectionRes.json();
  const researchRes = await fetch("http://localhost:5001/research");
  const researchData: ResearchType[] = await researchRes.json();
  return {
    props: {
      eventsSectionData,
      researchData,
    },
  };
};

export default Home;
