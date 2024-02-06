import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { heroImages } from "./hero-images";
import "./hero-slider.scss";

export const HeroSlider = ({ swiperRef, setIndex }) => {
  return (
    <div className="slider">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        className="hero-slider"
        spaceBetween={10}
        slidesPerView={1}
        speed={1000}
        onSlideChange={(e) => setIndex(e.realIndex)}
        rewind={true}
      >
        {heroImages.map((img, index) => (
          <SwiperSlide
            key={index}
            className="hero-slider__slide"
            style={{ backgroundImage: `url(${img})` }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
