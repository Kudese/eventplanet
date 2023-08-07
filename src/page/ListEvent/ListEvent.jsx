import FilterBar from "../../component/FilterBar/FilterBar";
import css from "./ListEvent.module.css"

const ListEvent = () => {
  
  return (
    <section className={css.container} >
    <div className={css.wraper} >
      <FilterBar/>
    </div>

    </section>
  )
};

export default ListEvent;
