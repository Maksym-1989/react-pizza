import { Link } from "react-router-dom";
import "./cart.scss";
const Cart = () => {
  return (
    <div className="cart">
      <Link to="/cart" className="link">
        <span className="cart__price">520 ₽</span>
        <span className="cart__amount">3</span>
      </Link>
    </div>
  );
};

export default Cart;
