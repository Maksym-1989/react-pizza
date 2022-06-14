import { useNavigate } from "react-router-dom";

import shopingCart from "../../assets/images/shopping-cart.png";

import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.cart_empty}>
      <span className={styles.cart_empty__span}>😕</span>
      <h2 className={styles.cart_empty__title}>Корзина пустая</h2>
      <p className={styles.cart_empty__text}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img
        className={styles.cart_empty__img}
        src={shopingCart}
        alt="shopping cart"
      />
      <button
        onClick={() => navigate(-1)}
        className={styles.cart_empty__button}
      >
        Вернуться назад
      </button>
    </div>
  );
};

export default CartEmpty;
