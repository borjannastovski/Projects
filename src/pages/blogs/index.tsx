import React, { useState } from "react";
import BlogsCategories from "@/components/BlogsCategories";
import BlogsIntro from "@/components/BlogsIntro";
import BlogsList from "@/components/BlogsList";
import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import HeroSectionTypeTwo from "@/components/HeroSectionTypeTwo";
import NewestBlogs from "@/components/NewestBlogs";
import { BlogType, EventType, JobType } from "@/types";
import { GetStaticProps, NextPage } from "next";

interface Props {
  randomBlog: BlogType;
  blogsData: BlogType[];
  randomEvents: EventType[];
  jobData: JobType[];
}

const Blogs: NextPage<Props> = ({
  randomBlog,
  blogsData,
  randomEvents,
  jobData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === "Сите" ? null : category);
  };

  const filteredBlogs = selectedCategory
    ? blogsData.filter((blog) => blog.tema === selectedCategory)
    : blogsData;
  const headerText =
    selectedCategory === null ? "СИТЕ БЛОГОВИ" : `ТЕМА: ${selectedCategory}`;

  return (
    <>
      <HeroSectionTypeTwo data={randomBlog} />
      <Carousel />
      <Breadcrumbs />
      <BlogsIntro />
      <NewestBlogs
        data1={blogsData}
        randomEvents={randomEvents}
        jobData={jobData}
      />
      <img className="dots-blog-index" src="/images/dots-7.png" alt="" />
      <BlogsCategories
        data={blogsData}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {headerText && <h2 className="headerText">{headerText}</h2>}
      <BlogsList data={filteredBlogs} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogsRes = await fetch("http://localhost:5001/blogs");
  const blogsData: BlogType[] = await blogsRes.json();
  const eventsRes = await fetch("http://localhost:5001/events");
  const eventData: EventType[] = await eventsRes.json();
  const jobsRes = await fetch("http://localhost:5001/jobs");
  const jobData: JobType[] = await jobsRes.json();

  const randomBlog = blogsData[Math.floor(Math.random() * blogsData.length)];

  const getRandomEvents = (events: EventType[], count: number): EventType[] => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomEvents = getRandomEvents(eventData, 2);

  return {
    props: {
      randomBlog,
      blogsData,
      randomEvents,
      jobData,
    },
  };
};

export default Blogs;
