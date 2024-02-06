import { Container } from "../container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { useTranslation } from "react-i18next";

import "./intro.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { useRef, useState } from "react";
import { SliderIndex } from "../slider-index";
import { SliderButton } from "../slider-button";
import { introSliders } from "./intro-sliders";
import { Link } from "react-router-dom";

export const Intro = () => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.slideNext();
  };

  const { t } = useTranslation();

  return (
    <section className="intro">
      <Container>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="intro__slider"
          spaceBetween={10}
          slidesPerView={1}
          speed={1000}
          onSlideChange={(e) => setIndex(e.realIndex)}
          rewind={true}
        >
          {introSliders.map((item, i) => (
            <SwiperSlide key={item.id} className="intro__item">
              <div className="intro__inner">
                <span className="intro__circle" data-aos="fade-up-right"></span>
                <span
                  className="intro__circle"
                  data-aos="fade-up-right"
                  data-aos-delay="100"
                ></span>
                <span
                  className="intro__circle"
                  data-aos="fade-up-left"
                  data-aos-delay="200"
                ></span>

                <div className="flex justify-center relative">
                  <img
                    src={item.img}
                    alt="intro"
                    width={640}
                    height={640}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  />
                  <h2
                    className="intro__title"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                  >
                    Bestune<span>{item.model}Broc</span> hure
                  </h2>
                </div>

                <div className="intro__crossover">
                  <div className="intro__crossover-content relative">
                    <h3 data-aos="zoom-in-left">
                      Bestune {item.model}Brochure
                    </h3>
                    <p data-aos="zoom-in-left" data-aos-delay="200">
                      {t(`intro.${i}`)}
                    </p>

                    <Link to={item.link}>More know</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="intro__slide-index-content">
            <SliderIndex
              className="intro__slide-index"
              index={index}
              pagination={introSliders.length}
            />

            <div className="flex">
              <SliderButton
                hendleClick={handlePrev}
                className={"slider-screen__button rotate-180 relative z-10"}
              />
              <SliderButton
                hendleClick={handleNext}
                className={"slider-screen__button  relative z-10"}
              />
            </div>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};
