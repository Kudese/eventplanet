import { useNavigate } from "react-router-dom";
import arrow_left from "../../image/arrow_left.svg";
import css from "./CreateEvent.module.css";
const CreateEvent = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={css.conteiner}>
      <button className={css.goBack} onClick={goBack}>
        <img className={css.imgBack} src={arrow_left} alt="button back" />
        <span className={css.spanBack}>Back</span>
      </button>
      <h2 className={css.title}>Create new event</h2>
      <form className={css.form}>
        <label className={css.label}>
          Title
          <input className={css.titleInput} type="text" />
        </label>
        <label className={css.label}>
          Description
          <input className={css.descriptionInput} type="text" />
        </label>
        <label className={css.label}>
          Select date
          <input className={css.dateInput} type="date" />
        </label>
        <label className={css.label}>
          Select time
          <input className={css.timeInput} type="time" />
        </label>
        <label className={css.label}>
          Location
          <input className={css.locationInput} type="text" />
        </label>
        <label className={css.label}>
          Category
          <input className={css.categoryInput} type="text" />
        </label>
        <label className={css.label}>
          Add picture
          <input disabled className={css.pictureInput} type="file" alt="" />
        </label>
        <label className={css.label}>
          Priority
          <input className={css.priority} type="text" />
        </label>
      </form>
      <button className={css.button} type="submit">
        Add event
      </button>
    </div>
  );
};
export default CreateEvent;
