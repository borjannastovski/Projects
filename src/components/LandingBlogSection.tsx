import Link from "next/link";
import React from "react";

const LandingBlogSection = () => {
  return (
    <>
      <section className="forDots">
        <section className="landing-blog-section">
          <img
            className="landingBlogs-1"
            src="./images/landingBlogs-1.jpg"
            alt=""
            data-aos="fade-right"
          />
          <img
            className="landingBlogs-2"
            src="./images/landingBlogs-2.jpg"
            alt=""
            data-aos="fade-right"
          />
          <img
            data-aos="fade-left"
            className="landingBlogs-3"
            src="./images/landingBlogs-3.jpg"
            alt=""
          />
          <div className="landing-blogs-title" data-aos="fade-left">
            <h1>
              Кажи ги своите мислења и поврзи се со останатите HR ентузијасти
            </h1>
            <p>
              Во нашиот <span>блог</span> одсега ке можеш да разменуваш мислења
              на актуелни теми со останатите корисници
            </p>
          </div>
          <div className="landing-blogs-button" data-aos="fade-right">
            <p>Упати се уште сега кон</p>
            <Link href="/blogs">
              <button>Нашиот блог</button>
            </Link>
          </div>
        </section>
        <img className="dots-img" src="/images/dots-3.png" alt="" />
      </section>
    </>
  );
};

export default LandingBlogSection;
