import CartEmpty from "../../components/cartEmpty/CartEmpty";
import CartItem from "../../components/cartitem/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <section className="section cart">
      <div className="container">
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__top}>
            <h2 className={styles.cart__title}>Корзина</h2>
            <button className={styles.cart__clear_all_button}>
              Очистить корзину
            </button>
          </div>
          <ul className={styles.cart__list}>
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
          <div className={styles.cart__bottom}>
            <p className={styles.cart__bottom_count}>
              Всего пицц:
              <span className={styles.cart__bottom_count_bold}>3 шт.</span>
            </p>
            <p className={styles.cart__bottom_price}>
              Сумма заказа:{" "}
              <span className={styles.cart__bottom_price_accent}>900 ₽</span>
            </p>
          </div>
          <div className={styles.cart__button_box}>
            <button className={styles.go_back}>Вернуться назад</button>
            <button className={styles.pay}>Оплатить сейчас</button>
          </div>
        </div>
        {/* <CartEmpty /> */}
      </div>
    </section>
  );
};

export default Cart;
