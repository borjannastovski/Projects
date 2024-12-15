import React from "react";
import SocialIcons from "./SocialIcons";

const HeroSectionTypeFour = () => {
  return (
    <>
      <section className="forDots">
        <section className="hero-section-four">
          <div className="images">
            <img
              className="img-1"
              src="/images/hero-section-type-one-image-1.jpg"
              alt=""
            />
            <img className="img-2" src="/images/signUp1.png" alt="" />
          </div>
          <div className="content">
            <div className="join-us">
              <h1>Придружи ни се!</h1>
            </div>
            <div className="benefits-hero">
              <p>Сакаш да се информираш подетално за бенефитите?</p>
            </div>
            <button>Прочитај повеќе</button>
          </div>
        </section>
        <img className="dots-img" src="/images/dots-2.png" alt="" />
      </section>
      <SocialIcons />
    </>
  );
};

export default HeroSectionTypeFour;
