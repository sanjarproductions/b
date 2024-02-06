import { useTranslation } from "react-i18next";
import { Container } from "../container";
import { collageImgs } from "./collage-imgs";

import "./collage.scss";

export const Collage = () => {
  const { t } = useTranslation();
  return (
    <section className="collage">
      <Container>
        <div className="collage__inner">
          <div className="collage__title">
            <h2 data-aos="fade-down-right">
              <span className="collage__span" data-aos="fade-down-left"></span>
              <strong className="collage__text" data-aos="fade-down-right">
                {t("collage")}
              </strong>
            </h2>
          </div>

          {collageImgs.map((img, index) => (
            <div className={`collage__img${index + 1}`} key={index}>
              <img
                src={img.href}
                alt="collage"
                width={img.width}
                height={img.height}
                data-aos={img.aos}
                data-aos-delay={img.deley}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
