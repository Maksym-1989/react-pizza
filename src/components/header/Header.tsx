import React from 'react'
import Cart from "../cartAmountAndTotalPrice/cartAmountAndTotalPrice";
import Logo from "../logo/Logo";

import styles from "./header.module.scss";

const Header: React.FC = () => {
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
