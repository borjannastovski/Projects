import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import HeroSectionTypeOne from "@/components/HeroSectionTypeOne";
import MissionVision from "@/components/MissionVision";
import Odbor from "@/components/Odbor";
import Pretsedatel from "@/components/Pretsedatel";
import { BoardType } from "@/types";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  boardData: BoardType[];
}

const AboutUs: NextPage<Props> = ({ boardData }) => {
  return (
    <section>
      <HeroSectionTypeOne title="Запознај го тимот" button="Прочитај повеќе" />
      <Carousel />
      <Breadcrumbs url="aboutUs" />
      <MissionVision />\
      <img className="aboutus-dots" src="/images/dots-12.png" alt="" />
      <Pretsedatel />
      <Odbor data={boardData} />
    </section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const boardRed = await fetch("http://localhost:5001/board");
  const boardData: BoardType[] = await boardRed.json();
  return {
    props: {
      boardData,
    },
  };
};

export default AboutUs;
