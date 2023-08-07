import { Link } from "react-router-dom";
import filters from "../../image/filters.svg";
import sort from "../../image/sort.svg";
import plus from "../../image/plus.svg";

import css from "./FilferBar.module.css"

const FilterBar = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} type="button">
        <img className={css.iconFilters}  src={filters} alt="Filter event" />
      </button>
      <button className={css.button} type="button">
        <img className={css.iconSort} src={sort} alt="Sort event" />
      </button>
      <Link className={css.link}  to="/createvent">
        
        <img className={css.iconPlus} src={plus} alt="Add event" />
      </Link>
    </div>
  );
};
export default FilterBar;
