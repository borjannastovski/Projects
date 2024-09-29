import React from "react";

const Benefits = () => {
  return (
    <>
      <section className="forDots">
        <section className="benefits">
          <img className="image-1" src="/images/learnMore1.jpg" alt="" />
          <img className="image-2" src="/images/learnMore2.jpg" alt="" />
          <div className="individual">
            <h2>Бенефити од индивидуално зачленување</h2>
            <ul>
              <li>Едукативни настани</li>
              <li>Најнови информации и случувања</li>
              <li>Ширење на мрежата на контакти</li>
              <li>Вклучување во работењето на МАЧР</li>
              <li>HR огласи за работа</li>
            </ul>
          </div>
          <div className="corporate">
            <h2>Бенефити од корпоративно зачленување</h2>
            <ul>
              <li>Претставник во корпоративниот одбор на МАЧР</li>
              <li>Можности за промоција на вашата компанија</li>
              <li>Ширење на мрежата регионално и интернационално</li>
              <li>Попусти на HR настани, обуки, конференции и сл.</li>
              <li>HR огласи за работа</li>
            </ul>
          </div>
        </section>
        <img className="benefits-1" src="/images/dots-9.png" alt="" />
        <img className="benefits-2" src="/images/dots-10.png" alt="" />
        <img className="benefits-3" src="/images/dots-11.png" alt="" />
      </section>
    </>
  );
};

export default Benefits;
