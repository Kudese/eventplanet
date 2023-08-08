import { Link } from "react-router-dom";
import css from "./Card.module.css";
const Card = (data) => {
  const {
    title,
    id,
    description,
    category,
    location,
    picture,
    priority,
    date,
  } = data.card;

  const time = date.substring(5, 10).replace("-", ".");
  const hour = date.substring(11, 16).startsWith("0")
    ? date.substring(11, 16).slice(1)
    : date.substring(11, 16);

  return (
    <Link className={css.link} to={`/list/${id}`}>
      <div className={css.card} id={id}>
        <img className={css.img} src={picture} alt={category} />
        <div className={css.timeConteiner}>
          <span classtName={css.time}>
            {hour} at {time}
          </span>
          <span className={css.location}>{location}</span>
        </div>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
        <div className={css.info}>
          <span className={css.category}>{category}</span>
          <span className={css.priority}>{priority}</span>
        </div>
      </div>
    </Link>
  );
};
export default Card;
