import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

import styles from "./cartAmountAndTotalPrice.module.scss";

const Cart: React.FC = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPricePizzas);
  const amount = useSelector((state: RootState) => state.cart.amount);
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
