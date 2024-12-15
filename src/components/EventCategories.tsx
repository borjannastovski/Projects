import { EventType } from "@/types";
import React from "react";

interface Props {
  data: EventType[];
  onCategoryClick: (category: string) => void;
  activeCategory: string;
}

const EventCategories: React.FC<Props> = ({
  data,
  onCategoryClick,
  activeCategory,
}) => {
  const uniqueCategories = Array.from(new Set(data.map((event) => event.type)));
  const categories = ["Сите", ...uniqueCategories];

  return (
    <section className="blogs-categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryClick(category)}
            className={category === activeCategory ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventCategories;
