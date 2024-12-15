import React from "react";
import SocialIcons from "./SocialIcons";
import { useRouter } from "next/router";
import Link from "next/link";
interface Props {
  title: string;
  button: string;
}

const HeroSectionTypeOne = ({ title, button }: Props) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <section className="forDots">
        <section
          className="heroSectionTypeOne"
          data-aos={isHomePage ? "fade-down" : undefined}
        >
          <div className="images">
            <img
              className="leftImg"
              src="./images/hero-section-type-one-image-1.jpg"
              alt="Image 1"
            />
            <img
              className="rightImg"
              src="./images/hero-section-type-one-image-2.jpg"
              alt="Image 2"
            />
          </div>
          <div className="content">
            <div className="title">
              <h1>{title}</h1>
              <h3>Македонска Асоцијација за Човечки Ресурски</h3>
            </div>
            <div className="button">
              <p>Придружи ни се: </p>
              <Link href="/signup">
                <button className="btn-on-hover">{button}</button>
              </Link>
            </div>
          </div>
        </section>
        <img className="dots-img" src="/images/dots-2.png" alt="" />
      </section>
      <SocialIcons />
    </>
  );
};

export default HeroSectionTypeOne;
