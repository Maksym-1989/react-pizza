import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <Link to="/cart" className="link">
        <span className={styles.cart__price}>520 ₽</span>
        <span className={styles.cart__amount}>3</span>
      </Link>
    </div>
  );
};

export default Cart;
