import { BlogType, EventType } from "@/types";
import React from "react";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

interface Props {
  data: BlogType | EventType;
}

const HeroSectionTypeTwo: React.FC<Props> = ({ data }) => {
  const isBlog = (data as BlogType).tip === "blog";

  return (
    <>
      <section className="forDots">
        <section className="hero-section-type-two">
          <img className="leftImg" src="./images/research4.jpg" alt="" />

          <img className="rightImg" src={data.img} alt={data.title} />

          <div className="content">
            <p className="dark-green-color">
              Истакнат {isBlog ? "блог" : "настан"}
            </p>

            <h1 className="dark-blue-color">
              {isBlog ? data.title : (data as EventType).type}
            </h1>

            {!isBlog && <p>{(data as EventType).description}</p>}

            <p>
              {isBlog ? (
                <>
                  Од{" "}
                  <span className="orangeSpan">
                    {(data as BlogType).author}
                  </span>{" "}
                  | {(data as BlogType).date}
                </>
              ) : (
                <>
                  | {(data as EventType).dateDay}{" "}
                  {(data as EventType).dateMonth},{" "}
                  {(data as EventType).dateYear}
                </>
              )}
            </p>

            <Link
              href={isBlog ? `/blogs/${data.slug}` : `/events/${data.slug}`}
            >
              <button>Прочитај повеќе</button>
            </Link>
          </div>
        </section>
        <img className="dots-img" src="/images/dots-2.png" alt="" />
      </section>
      <SocialIcons />
    </>
  );
};

export default HeroSectionTypeTwo;
