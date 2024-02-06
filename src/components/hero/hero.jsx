import { Container } from "../container";
import { heroImages } from "../hero-slider/hero-images";

import "./hero.scss";

import { SliderButton } from "../slider-button";
import { SliderIndex } from "../slider-index";
import { useTranslation } from "react-i18next";

const heroTexts = ["BestuNE t55", "BestuNE t33"];

export const Hero = ({ index, handlePrev, handleNext }) => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <Container className="hero__container">
        <div className="hero__inner">
          <div className="flex"></div>

          <div className="hero__content">
            <div>
              <h2 className="hero__title" data-aos="zoom-in-right">
                {heroTexts[index]}
              </h2>
              <p className="hero__text">{t(`hero.${index}`)}</p>
            </div>

            <div className="hero__slider">
              <SliderIndex index={index} pagination={heroImages.length} />

              <div className="flex">
                <SliderButton
                  hendleClick={handlePrev}
                  className={"rotate-180"}
                />
                <SliderButton hendleClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
