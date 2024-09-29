import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LandingConferenceSection = () => {
  return (
    <>
      <section className="forDots">
        <section className="landing-conference-section" data-aos="zoom-out">
          <div className="leftSide">
            <h1>
              Најголемиот HR настан на нашите простори - Годишната HR
              конференција на МАЧР
            </h1>
            <p>
              Меѓународна размена на искуства во полето на човечки ресурси и
              константно движење во чекор со светските трендови.
            </p>
            <div className="president">
              <img src="./images/president.jpg" alt="" />
              <div className="name">
                <h4>м-р Дарко Петровски</h4>
                <p>Претседател на МАЧР</p>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <img className="bigPicture" src="./images/events_2.jpg" alt="" />
            <div className="small-pic-box">
              <img
                className="smallPicture"
                src="./images/landingConferenceSmall.jpg"
                alt=""
              />
            </div>
            <div className="buy-card">
              <FontAwesomeIcon icon={faLink} />
              <div className="buy-card-content">
                <h4>Купи Карта</h4>
                <p>mhraconference.com</p>
              </div>
            </div>
          </div>
        </section>
        <img className="dots-img conf-img" src="/images/dots-4.png" alt="" />
      </section>
    </>
  );
};

export default LandingConferenceSection;
