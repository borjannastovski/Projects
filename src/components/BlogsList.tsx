import { BlogType } from "@/types";
import React from "react";
import HoverCard from "./HoverCard";

interface Props {
  data: BlogType[];
}

const BlogsList = ({ data }: Props) => {
  return (
    <section className="blog-list">
      {data.map((blog) => (
        <HoverCard key={blog.id} item={blog} />
      ))}
    </section>
  );
};

export default BlogsList;
