import React from "react";
import { BlogType } from "@/types";

interface Props {
  data: BlogType[];
  selectedCategory: string | null;
  onCategoryChange: (category: string) => void;
}

const BlogsCategories: React.FC<Props> = ({
  data,
  selectedCategory,
  onCategoryChange,
}) => {
  const uniqueCategories = Array.from(new Set(data.map((blog) => blog.tema)));
  const categories = ["Сите", ...uniqueCategories];

  return (
    <section className="blogs-categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={
              selectedCategory === category ||
              (selectedCategory === null && category === "Сите")
                ? "active"
                : ""
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogsCategories;
