import pizzas from "../../db.json";
import PizzaListItem from "../pizzaListItem/PizzaListItem";
import "./pizzaList.scss";

const PizzaList = () => {
  return (
    <ul className="pizza-block list">
      {pizzas.map((obj) => (
        <PizzaListItem {...obj} />
      ))}
    </ul>
  );
};

export default PizzaList;
