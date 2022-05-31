import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <li className={styles.cart__item}>
      <img
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="pizza"
        className={styles.cart__img}
      />
      <div className={styles.cart__item_description}>
        <h3 className={styles.cart__item_subtitle}>Сырный цыпленок</h3>
        <p className={styles.cart__item_text}>тонкое тесто, 26 см.</p>
      </div>
      <div>
        <button className={styles.cart__item_amount}>
          <span>-</span>
        </button>
        <span className={styles.cart__item_amount_span}>2</span>
        <button className={styles.cart__item_amount}>+</button>
      </div>
      <p className={styles.cart__item_price}>770 ₽</p>
      <button className={styles.cart__item_delete}>+</button>
    </li>
  );
};

export default CartItem;
