import { useEffect, useState } from "react";

import PizzaListItem from "../pizzaListItem/PizzaListItem";
import axios from "axios";
import Sceleton from "../sceleton/Sceleton";
import styles from "./PizzaList.module.scss";
import { list } from "../sort/Sort";

const PizzaList = ({ category, sortIdx }) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6294a42663b5d108c19025fe.mockapi.io/api/v1/items?category=${
          category !== 0 ? category : ""
        }&sortBy=${list[sortIdx].sortProperty}`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [category, sortIdx]);
  return (
    <ul className={styles.pizza_block}>
      {isLoading
        ? [...new Array(9)].map((_, idx) => <Sceleton key={idx} />)
        : pizzas.map((obj) => <PizzaListItem {...obj} key={obj.id} />)}
    </ul>
  );
};

export default PizzaList;
