import { Link, Outlet } from "react-router-dom";
import logo from "../image/logo.svg";
import search from "../image/search.svg";
import shape from "../image/shape.svg";
import css from "../Header/Header.module.css";
const Header = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.logoWraper}>
          <Link to={"list"}>
            <img src={logo} alt="Company `s logo" />
          </Link>
          <div className={css.chooseLanguage}>
            <span className={css.language}>uk</span>
            <button className={css.buttonChooseLanguage}>
              <img src={shape} alt="Choose a language" />
            </button>
            {/* <span>todo</span> */}
          </div>
        </div>
        <div className={css.searchContainer}>
          <img className={css.searchIcon} alt="Search" src={search} />
          <input className={css.search} type="text" />
        </div>
      </header>
      <Outlet  />
    </div>
  );
};

export default Header;
