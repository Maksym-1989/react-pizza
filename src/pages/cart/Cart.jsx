import { useSelector } from "react-redux";
import CartEmpty from "../../components/cartEmpty/CartEmpty";
import CartItem from "../../components/cartitem/CartItem";
import styles from "./Cart.module.scss";
import { removeAllPizzas } from "../../redux/slices/cartSlice";
import { useNavigate, useRoutes } from "react-router-dom";

const Cart = () => {
  const { pizzas, amount, totalPricePizzas } = useSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();

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
                {pizzas.map((item) => (
                  <CartItem pizza={item} />
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
