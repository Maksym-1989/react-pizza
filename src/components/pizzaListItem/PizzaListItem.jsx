import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCartPizza } from "../../redux/slices/cartSlice";

import styles from "./PizzaListitem.module.scss";

const typePizza = ["тонкое", "традиционное"];

const PizzaListItem = ({ id, imageUrl, name, types, sizes, price }) => {
  const [sizeIndex, setSyzeIndex] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);

  const cartPizzas = useSelector((state) => state.cart.pizzas);
  const currentPizza = cartPizzas.filter((item) => item.name === name);
  const cartAmount = currentPizza?.reduce(
    (acc, item) => (acc += item.amount),
    0
  );
  const dispatch = useDispatch();

  let currentPrice = 0;

  switch (sizeIndex) {
    case 1:
      currentPrice = price + 50;
      break;
    case 2:
      currentPrice = price + 100;
      break;
    default:
      currentPrice = price;
      break;
  }

  const item = {
    id: id.toString() + sizeIndex.toString() + typeIndex.toString(),
    imageUrl,
    name,
    types: typePizza[typeIndex],
    sizes: sizes[sizeIndex],
    price: currentPrice,
    amount: 1,
  };

  return (
    <li className={styles.pizza_block__item}>
      <img className={styles.pizza_block__image} src={imageUrl} alt={name} />
      <h4 className={styles.pizza_block__title}>{name}</h4>
      <div className={styles.pizza_block__selector}>
        <ul className="list">
          {types.map((type, idx) => (
            <li
              onClick={() => setTypeIndex(idx)}
              className={typeIndex === idx ? styles.active : ""}
              key={idx}
            >
              {typePizza[type]}
            </li>
          ))}
        </ul>
        <ul className="list">
          {sizes.map((size, idx) => (
            <li
              onClick={() => setSyzeIndex(idx)}
              className={sizeIndex === idx ? styles.active : ""}
              key={idx}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pizza_block__bottom}>
        <span className={styles.pizza_block__bottom_price}>
          от {currentPrice} ₽
        </span>

        <button
          className={styles.button}
          onClick={() => dispatch(addCartPizza(item))}
        >
          <svg
            className={styles.button__svg}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
          </svg>
          <p className={styles.button__text}>Добавить</p>
          {cartAmount ? (
            <span className={styles.button__span}>{cartAmount}</span>
          ) : (
            <></>
          )}
        </button>
      </div>
    </li>
  );
};

export default PizzaListItem;
