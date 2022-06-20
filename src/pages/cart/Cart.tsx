import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartEmpty from "../../components/cartEmpty/CartEmpty";
import CartItem from "../../components/cartitem/CartItem";
import { removeAllPizzas } from "../../redux/slices/cartSlice";

import styles from "./Cart.module.scss";

const Cart: React.FC = () => {
  const { pizzas, amount, totalPricePizzas } = useSelector(
    (state: any) => state.cart
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="section cart">
      <div className="container">
        <div className={styles.cart__wrapper}>
          {pizzas.length > 0 ? (
            <>
              <div className={styles.cart__top}>
                <h2 className={styles.cart__title}>Корзина</h2>
                <button
                  onClick={() => dispatch(removeAllPizzas())}
                  className={styles.cart__clear_all_button}
                >
                  Очистить корзину
                </button>
              </div>
              <ul className={styles.cart__list}>
                {pizzas.map((item: any) => (
                  <CartItem pizza={item} key={item.id} />
                ))}
              </ul>
              <div className={styles.cart__bottom}>
                <p className={styles.cart__bottom_count}>
                  Всего пицц:
                  <span className={styles.cart__bottom_count_bold}>
                    {amount} шт.
                  </span>
                </p>
                <p className={styles.cart__bottom_price}>
                  Сумма заказа:{" "}
                  <span className={styles.cart__bottom_price_accent}>
                    {totalPricePizzas} ₽
                  </span>
                </p>
              </div>
              <div className={styles.cart__button_box}>
                <button onClick={() => navigate(-1)} className={styles.go_back}>
                  Вернуться назад
                </button>
                <button className={styles.pay}>Оплатить сейчас</button>
              </div>
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
