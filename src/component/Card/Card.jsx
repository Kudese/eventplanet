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
  //"2098-07-20T12:45:10.935Z"
  const time = date.substring(5, 10).replace("-", ".");
  const hour = date.substring(11, 16).startsWith("0")
    ? date.substring(11, 16).slice(1)
    : date.substring(11, 16);
  console.log(time, hour);
  return (
    <div className={css.card} id={id}>
        <img className={css.img} src={picture} alt={category} />
      <div className={css.timeConteiner}>
        <span classtName={css.time}>
          {hour} at {time}
        </span>
        <span className={css.location}>{location}</span>
      </div>
      <h2 className={css.title}>{title}</h2>
      <p>{description}</p>

      <span> </span>
      <div className={css.info}>
        <span className={css.category}>{category}</span>
        <span className={css.priority}>{priority}</span>
      </div>
    </div>
  );
};
export default Card;
