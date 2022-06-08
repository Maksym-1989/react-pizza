import { useEffect, useState } from "react";
import axios from "axios";

import PizzaListItem from "../pizzaListItem/PizzaListItem";
import Sceleton from "../sceleton/Sceleton";
import styles from "./PizzaList.module.scss";
import { list } from "../sort/Sort";
import { useSelector } from "react-redux";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryIdx = useSelector((state) => state.filter.categoryIdx);
  const sortIdx = useSelector((state) => state.filter.sortIdx);
  const searchString = useSelector((state) => state.searchString);

  const filteredPizzas = pizzas.filter(({ name }) =>
    name.toLowerCase().includes(searchString.toLowerCase())
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6294a42663b5d108c19025fe.mockapi.io/api/v1/items?category=${
          categoryIdx !== 0 ? categoryIdx : ""
        }&sortBy=${list[sortIdx].sortProperty}`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [categoryIdx, sortIdx]);
  return (
    <ul className={styles.pizza_block}>
      {isLoading
        ? [...new Array(9)].map((_, idx) => <Sceleton key={idx} />)
        : filteredPizzas.map((obj) => <PizzaListItem {...obj} key={obj.id} />)}
    </ul>
  );
};

export default PizzaList;
