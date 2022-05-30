import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Logo />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
