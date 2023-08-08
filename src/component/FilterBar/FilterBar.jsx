import { Link } from "react-router-dom";
import filters from "../../image/filters.svg";
import sort from "../../image/sort.svg";
import plus from "../../image/plus.svg";

import css from "./FilferBar.module.css";

const FilterBar = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>My events</h1>
      <button className={css.button} type="button">
        <span className={css.titleBusiness}>Business</span>
        <img className={css.iconFilters} src={filters} alt="Filter event" />
      </button>
      <button className={css.button} type="button">
        <span className={css.titleSort}>Sort by</span>
        <img className={css.iconSort} src={sort} alt="Sort event" />
      </button>
      <Link className={css.link} to="/createvent">
        <span className={css.titleAddEvent}>Add new event</span>
        <img className={css.iconPlus} src={plus} alt="Add event" />
      </Link>
    </div>
  );
};
export default FilterBar;
