import BlogContent from "@/components/BlogContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import HeroSectionTypeThree from "@/components/HeroSectionTypeThree";
import NewestBlogsComp from "@/components/NewestBlogsComp";
import { BlogType } from "@/types";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface Props {
  blogData: BlogType;
  blogsData: BlogType[];
}

const BlogArticle: NextPage<Props> = ({ blogData, blogsData }) => {
  return (
    <section className="relative-section">
      <HeroSectionTypeThree data={blogData} />
      <Carousel />
      <Breadcrumbs url={blogData.tip} />
      <BlogContent data={blogData} />
      <img className="dots-blog-index" src="/images/dots-7.png" alt="" />
      <NewestBlogsComp data={blogsData} />
      <img className="dots-left-blog" src="/images/dots-7.png" alt="" />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsRes = await fetch(`${API_URL}/blogs`);
  if (!blogsRes.ok) {
    console.error(`Failed to fetch blogs: ${blogsRes.statusText}`);
    return { paths: [], fallback: false };
  }
  const blogsData: BlogType[] = await blogsRes.json();
  const paths = blogsData.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const blogsRes = await fetch(`${API_URL}/blogs?slug=${params.slug}`);
    const blogDataArray = await blogsRes.json();

    if (!blogDataArray || blogDataArray.length === 0) {
      return {
        notFound: true,
      };
    }

    const blogsResData = await fetch(`${API_URL}/blogs`);
    if (!blogsResData.ok) {
      console.error(
        `Failed to fetch blogs for random selection: ${blogsResData.statusText}`
      );
      return { notFound: true };
    }

    const blogsData: BlogType[] = await blogsResData.json();
    const shuffledBlogs = blogsData.sort(() => 0.5 - Math.random());
    const randomBlogs = shuffledBlogs.slice(0, 4);
    return {
      props: {
        blogData: blogDataArray[0],
        blogsData: randomBlogs,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default BlogArticle;
