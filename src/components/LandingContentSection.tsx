import React from "react";
import LandingContentSectionCard from "./LandingContentSectionCard";

const titles = [
  "Едукативни настани",
  "Најнови информации и случувања",
  "Ширење на мрежата на контакти",
  "Вклучување во работењето на МАЧР",
  "HR огласи за работа",
];

const LandingContentSection = () => {
  return (
    <section className="landing-content-section">
      <div className="left-side" data-aos="fade-right">
        {titles.map((title, index) => (
          <LandingContentSectionCard
            key={index}
            title={title}
            number={index + 1}
          />
        ))}
      </div>

      <div className="benefiti-MHRA" data-aos="fade-left">
        <h1>Бенефити од зачленување во МАЧР</h1>
        <p>
          Македонската асоцијација за човечки ресурси - МАЧР како невладино,
          непрофитно и непартиско здружение на граѓани, продолжува со
          остварување на својата мисија за промоција и унапредување на
          професијата управување со човечките ресурси, како и создавање и
          имплементирање на највисоките професионални стандарди и развој на
          човечкиот капитал во Република Македонија како единствен ентитет од
          овој вид во земјава.
        </p>
      </div>
    </section>
  );
};

export default LandingContentSection;
