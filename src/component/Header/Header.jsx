import { Link, Outlet } from "react-router-dom";

import logo from "../../image/logo.svg";
import shape from "../../image/shape.svg";

import css from "../Header/Header.module.css";
import SearchInput from "../SearchInput/SearchInput";
const Header = () => {
  const screenWidth = window.screen.width;
  console.log(screenWidth);
  return (
    <>
      <div className={css.wraper}>
        <div className={css.container}>
          <header className={css.header}>
            <div className={css.logoWraper}>
              <Link className={css.linkLogo} to={"list"}>
                <img src={logo} alt="Company `s logo" />
              </Link>
              {screenWidth >= 768 && <SearchInput />}
              <div className={css.chooseLanguage}>
                <span className={css.language}>uk</span>
                <button className={css.buttonChooseLanguage}>
                  <img src={shape} alt="Choose a language" />
                </button>
                {/* <span>todo</span> */}
              </div>
            </div>
            {screenWidth >= 768 || <SearchInput />}
          </header>
        </div>
      </div>
      <div className={css.background}>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
