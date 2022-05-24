import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
