import PizzaListItem from "../pizzaListItem/PizzaListItem";
import axios from "axios";
import "./pizzaList.scss";
import { useEffect, useState } from "react";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("https://6294a42663b5d108c19025fe.mockapi.io/api/v1/items")
      .then((res) => {
        setPizzas(res.data);
      });
  }, []);
  return (
    <ul className="pizza-block list">
      {pizzas.map((obj) => (
        <PizzaListItem {...obj} key={obj.id} />
      ))}
    </ul>
  );
};

export default PizzaList;
