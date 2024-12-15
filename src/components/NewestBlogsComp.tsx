import { BlogType } from "@/types";
import HoverCard from "@/components/HoverCard";
import React from "react";

interface Props {
  data: BlogType[];
}

const NewestBlogsComp = ({ data }: Props) => {
  return (
    <section className="newest-blogs">
      <h1>Најнови блогови</h1>
      <div className="cards">
        {data.map((blog) => (
          <HoverCard key={blog.id} item={blog} />
        ))}
      </div>
    </section>
  );
};

export default NewestBlogsComp;
