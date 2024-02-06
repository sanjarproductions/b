import { Container } from "../container";
import { contacts } from "./contacts";

import "./contact-us.scss";
import { Form } from "../form";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="contact-us">
        <Container>
          <div className="contact-us__inner">
            <ul className="contact-us__list">
              {contacts.map((item, index) => (
                <li className="contact-us__item" key={index}>
                  <h3 data-aos="zoom-in-right">{t(`contacts.${index}`)}:</h3>

                  {item.text.map((link, i) => (
                    <a
                      className="contact-us__link"
                      key={i}
                      href={item.link[i]}
                      target="_blank"
                      data-aos="zoom-in-right"
                    >
                      {link}
                    </a>
                  ))}
                </li>
              ))}
            </ul>

            <Form />
          </div>
        </Container>
      </section>
    </>
  );
};
