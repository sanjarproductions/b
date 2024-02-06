import interiorPhoto1 from "../../assets/interior-img1.png";
import interiorPhoto2 from "../../assets/interior-img2.png";
import { Container } from "../container";

import "./interior.scss";

const interiorTexts = ["Bestune t55", "Bestune t33", "Bestune b70 "];

export const Interior = () => {
  return (
    <section className="interior overflow-hidden">
      <Container>
        <div className="interior__inner">
          <div className="interior__left-content">
            <div className="interior__texts">
              <ul className="interior__list">
                {interiorTexts.map((text, index) => (
                  <li
                    className="interior__item"
                    key={index}
                    data-aos="fade-up-right"
                    data-aos-delay={`${index}00`}
                  >
                    <span>{text}</span>
                    <svg
                      width="39"
                      height="33"
                      viewBox="0 0 39 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.0386 4.87397L1.391 31.126M36.0386 4.87397L31.5799 29.8379M36.0386 4.87397L10.7994 2.41175"
                        stroke="black"
                        strokeWidth="4"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>

            <div className="interior__img-1" data-aos="zoom-in-up">
              <img
                src={interiorPhoto1}
                alt="interior 1"
                width={420}
                height={280}
              />
            </div>
          </div>

          <div data-aos="fade-up-left">
            <img
              src={interiorPhoto2}
              alt="interior 2"
              width={430}
              height={680}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
