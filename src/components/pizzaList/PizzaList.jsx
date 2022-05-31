import { useEffect, useState } from "react";

import PizzaListItem from "../pizzaListItem/PizzaListItem";
import axios from "axios";
import Sceleton from "../sceleton/Sceleton";
import styles from "./PizzaList.module.scss";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6294a42663b5d108c19025fe.mockapi.io/api/v1/items")
      .then((res) => {
        setPizzas(res.data);
        setisLoading(false);
      });
  }, []);
  return (
    <ul className={styles.pizza_block}>
      {isLoading
        ? [...new Array(9)].map((_, idx) => <Sceleton key={idx} />)
        : pizzas.map((obj) => <PizzaListItem {...obj} key={obj.id} />)}
    </ul>
  );
};

export default PizzaList;
