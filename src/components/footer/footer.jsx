import { Container } from "../container";
import logo from "../../assets/logo.svg";

import "./footer.scss";
import { Nav } from "../nav";
import { socialMedia } from "./social-media";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__top-content">
            <a className="footer__logo logo" href="/">
              <img
                className="logo__img"
                src={logo}
                alt="site logo"
                width={52}
                height={69}
              />
            </a>

            <Nav className="block" />

            <ul className="footer__list">
              {socialMedia.map((media, index) => (
                <li className="footer__social-media" key={index}>
                  <a href={media.link}>
                    <img
                      src={media.logo}
                      alt="social media"
                      width={18}
                      height={18}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__bottom-content">
            <p>
              Copyright 2023 <span>Bestune</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
