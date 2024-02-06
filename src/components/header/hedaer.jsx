import { Drawer, Select } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Container } from "../container";
import { Nav } from "../nav";

import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import "./header.scss";

const getLanguage = localStorage.getItem("lang") || "en";

export const Header = ({ className = "", humburger = "", headerLang = "" }) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(getLanguage);
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback((lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    window.location.reload();
  }, []);
  useEffect(() => {
    setLanguage(getLanguage);
    i18n.changeLanguage(getLanguage);
  }, [getLanguage]);

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <a className="header__logo logo" href="/">
            <img
              className="logo__img"
              src={logo}
              alt="site logo"
              width={52}
              height={69}
            />
          </a>

          <Nav className={className} />
          <div className="flex items-center">
            <Select
              className={`header__lang mr-7 md:mr-2 ${headerLang}`}
              value={language}
              options={[
                {
                  label: "Rus",
                  value: "ru",
                },
                {
                  label: "Eng",
                  value: "en",
                },
                {
                  label: "Uzb",
                  value: "uz",
                },
              ]}
              onChange={handleChangeLanguage}
            />
            <Humburger
              className={humburger}
              open={open}
              setOpen={() => setOpen(true)}
            />
          </div>
        </div>
      </Container>

      <Drawer
        width={"80%"}
        rootClassName="header__drawer"
        title={
          <div className="flex justify-end">
            <Humburger setOpen={() => setOpen(false)} open={open} />
          </div>
        }
        closable={false}
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        zIndex={11}
      >
        <Nav className="nav-mobile" setOpen={setOpen} />
      </Drawer>
    </header>
  );
};

function Humburger({ setOpen, open, className = "" }) {
  return (
    <button
      onClick={setOpen}
      className={`header__humburger ${className} ${
        open ? "header__humburger-open" : ""
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
