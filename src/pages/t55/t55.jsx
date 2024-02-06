import { Helmet } from "react-helmet-async";
import { ContactUs, Footer, Header, Intro } from "../../components";

export const T55 = () => {
  return (
    <>
      <Helmet>
        <title>T55</title>
        <meta
          name="description"
          content="FAW Bestune T55,B70,T99
    Rasman Bestune brendi O'zbekistonda!
    Avtosalon: @bestune_hongqi
    Rasman 3 yil yoki 100 000km kafolat
    Ehtiyot qismlar va Servis bor"
          data-rh="true"
        />
        <link rel="canonical" href="https://bestuneuzbekistan.uz/cars/t55" />
        <link rel="icon" href="../../assets/logo.svg" />
      </Helmet>

      <Header className="nav__black" />
      <main>
        <Intro />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};
