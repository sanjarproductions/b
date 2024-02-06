import { Helmet } from "react-helmet-async";
import { Footer, Header } from "../../components";

export const Cars = () => {
  return (
    <>
      <Helmet>
        <title>Bestune Uzbekistan cars</title>
        <meta
          name="description"
          content="FAW Bestune T55,B70,T99
    Rasman Bestune brendi O'zbekistonda!
    Avtosalon: @bestune_hongqi
    Rasman 3 yil yoki 100 000km kafolat
    Ehtiyot qismlar va Servis bor"
          data-rh="true"
        />
        <link rel="canonical" href="https://bestuneuzbekistan.uz/cars" />
      </Helmet>
      <Header className="nav__black" />
      <main></main>
      <Footer />
    </>
  );
};
