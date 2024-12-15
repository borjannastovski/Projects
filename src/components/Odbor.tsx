import { BoardType } from "@/types";
import React from "react";
import OdborCard from "./OdborCard";

interface Props {
  data: BoardType[];
}

const Odbor: React.FC<Props> = ({ data }) => {
  return (
    <section className="board">
      <h2>Одбор на МАЧР</h2>
      <div className="board-list">
        {data.map((item) => (
          <OdborCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Odbor;
