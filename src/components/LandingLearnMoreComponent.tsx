import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const LandingLearnMoreComponent = () => {
  return (
    <>
      <section className="forDots">
        <section className="landing-learnmore-section">
          <img
            className="orangeImg"
            src="./images/learnMore2.jpg"
            alt=""
            data-aos="fade-right"
          />
          <img
            className="greyImg"
            src="./images/learnMore1.jpg"
            alt=""
            data-aos="fade-left"
          />
          <div className="learnMore" data-aos="fade-right">
            <h1>Дознај повеќе за нас и нашите цели и задачи!</h1>
            <p>
              Нашиот огранок за коучинг е формиран 22 април 2019 година и е
              првата мрежа за професионални ментори во земјава.
            </p>
            <Link href="/aboutus">
              <button>Повеќе за нас</button>
            </Link>
          </div>
          <div className="greyDiv" data-aos="fade-right">
            <p>
              Сакаш да бидеш во тек со нас и најновите содржини што ги
              споделуваме?
            </p>
          </div>
          <div className="orangeDiv" data-aos="fade-left">
            <p>
              Претплати се на нашиот информативен билтен и никогаш повеќе не
              пропуштај важни настани и известувања
            </p>
          </div>
          <div className="bilten-card" data-aos="fade-left">
            <FontAwesomeIcon icon={faLink} />
            <div className="bilten-card-content">
              <h4>МАЧР билтен</h4>
              <p>contact@mhra.mk</p>
            </div>
          </div>
        </section>
        <img
          className="dots-img lan-learn-img-1"
          src="/images/dots-5.png"
          alt=""
        />
        <img
          className="dots-img lan-learn-img-2"
          src="/images/dots-6.png"
          alt=""
        />
      </section>
    </>
  );
};

export default LandingLearnMoreComponent;
