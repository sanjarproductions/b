import { Link } from "react-router-dom";
import { Container, Footer, Form, Header } from "../../components";

import "./into-processes.scss";
import { Helmet } from "react-helmet-async";

export const IntoProcesses = () => {
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

      <Header
        className="IntoProcesses nav__black"
        button="buttton__black"
        humburger={"humberger-black"}
        headerLang="lang-black"
      />
      <main className="process__main">
        <Container>
          <div>
            <h2 className="process__title text-center">
              Sorry, site is under construction ⏱️,
              <Link
                className="text-blue-500 ml-2 hover:opacity-50 transition-opacity"
                to={"/"}
              >
                ← Go to back
              </Link>
            </h2>

            <div className="process__form-content">
              <h3 className="process__form-title">Contact us</h3>

              <Form className="process__form" />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
