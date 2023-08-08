import css from "../SearchInput/SearchInput.module.css";
import search from "../../image/search.svg";
const SearchInput = () => {
  return (
    <div className={css.searchContainer}>
      <img className={css.searchIcon} alt="Search" src={search} />
      <input
        className={css.search}
        type="text"
        placeholder="Search by keywords"
      />
    </div>
  );
};

export default SearchInput;
