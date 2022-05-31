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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cart;
