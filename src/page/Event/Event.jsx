import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./Event.module.css";
import arrow_left from "../../image/arrow_left.svg";
const Event = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [post, setPost] = useState();
  const params = useParams();
  console.log(params.id);
  const event = async (params) => {
    const data = await axios.get(
      `https://64cdfeed0c01d81da3ee6c08.mockapi.io/event/event/${params.id}`
    );
    console.log("asd", data.data);
    setPost(() => data?.data);
  };
  console.log(post);

  useEffect(() => {
    event(params);
  }, [params]);
  let hour;
  let time;
  try {
    time = post.date.substring(5, 10).replace("-", ".");
    hour = post.date.substring(11, 16).startsWith("0")
      ? post.date.substring(11, 16).slice(1)
      : post.date.substring(11, 16);
  } catch (error) {}

  return (
    <div className={css.conteiner}>
      <button className={css.goBack} onClick={goBack}>
        <img className={css.imgBack} src={arrow_left} alt="button back" />
        <span className={css.spanBack}>Back</span>
      </button>
      <h2 className={css.title}>{post?.title}</h2>

      <div className={css.card}>
        <img className={css.img} src={post?.picture} alt={post?.category} />
        <p className={css.description}>{post?.description}</p>
        <div className={css.wraperLabel}>
          <div className={css.label}>{post?.category}</div>
          <div className={css.label}>{post?.priority}</div>
          <div className={css.label}> {post?.location}</div>
          <div className={css.label}>
            {hour} at {time}
          </div>
        </div>
        <div className={css.bthWraper}>
          <button className={css.btnEdit}>Edit</button>
          <button className={css.btnDelite}>Delete event</button>
        </div>
      </div>
    </div>
  );
};
export default Event;
