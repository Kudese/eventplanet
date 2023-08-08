import { useEffect, useState } from "react";
import FilterBar from "../../component/FilterBar/FilterBar";
import css from "./ListEvent.module.css";
import axios from "axios";
import Card from "../../component/Card/Card";

const ListEvent = () => {
  const [data, setData] = useState();
  const page = 1;
  const limit = 8;
  const dataBase = async (page, limit) => {
    const list = await axios.get(
      `https://64cdfeed0c01d81da3ee6c08.mockapi.io/event/event?page=${page}&limit=${limit}`
    );
    console.log(list);
    setData(() => list.data);
  };
  useEffect(() => {
    dataBase(page, limit);
  }, [page, limit]);
  console.log(data);

  return (
    <section className={css.container}>
      <FilterBar />
      <div className={css.grid}>
        {data?.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </section>
  );
};

export default ListEvent;
