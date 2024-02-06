import { useRef, useState } from "react";
import {
  Collage,
  ContactUs,
  Footer,
  Header,
  Hero,
  HeroSlider,
  Interior,
  Intro,
  Video,
} from "../../components";

import { Helmet } from "react-helmet-async";
import "./home.scss";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.slideNext();
  };

  return (
    <>
      <Helmet>
        <title>Bestune Uzbekistan</title>
        <meta
          name="description"
          content="FAW Bestune T55,B70,T99
    Rasman Bestune brendi O'zbekistonda!
    Avtosalon: @bestune_hongqi
    Rasman 3 yil yoki 100 000km kafolat
    Ehtiyot qismlar va Servis bor"
          data-rh="true"
        />
        <link rel="canonical" href="https://bestuneuzbekistan.uz/" />
      </Helmet>

      <div className="home__hero">
        <HeroSlider swiperRef={swiperRef} setIndex={setIndex} />
        <Header />
        <Hero index={index} handleNext={handleNext} handlePrev={handlePrev} />
      </div>

      <main>
        <Interior />
        <Intro />
        <Video />
        <Collage />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
};
