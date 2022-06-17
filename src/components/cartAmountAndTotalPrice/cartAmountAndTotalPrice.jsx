import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./cartAmountAndTotalPrice.module.scss";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPricePizzas);
  const amount = useSelector((state) => state.cart.amount);
  return (
    <div className={styles.cart}>
      <Link to="/cart" className="link">
        <span className={styles.cart__price}>{totalPrice} ₴</span>
        <span className={styles.cart__amount}>{amount}</span>
      </Link>
    </div>
  );
};

export default Cart;
