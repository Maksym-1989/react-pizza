import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.logo__link} to="/">
        <img className={styles.logo__img} src={logo} alt="logo" width="70" />
        <span className={styles.logo__span}>React pizza</span>
      </Link>
    </div>
  );
};

export default Logo;
