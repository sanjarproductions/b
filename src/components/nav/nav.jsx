import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { navList } from "./nav-list";
import "./nav.scss";
import { useTranslation } from "react-i18next";

export const Nav = ({ className = "", setOpen = () => {} }) => {
  const { t } = useTranslation();
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav__list">
        {navList.map((item, index) => (
          <li className="nav__item" key={item.id}>
            {index !== 3 ? (
              <NavLink
                className="nav__link"
                to={`/${item.link}`}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${index}`)}
              </NavLink>
            ) : (
              <Link
                className=" nav__link cursor-pointer"
                smooth={true}
                offset={-50}
                to={item.link}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${index}`)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
