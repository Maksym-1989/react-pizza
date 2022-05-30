import "./logo.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo__link link" to="/">
        <img className="logo__img" src={logo} alt="logo" width="70" />
        <span className="logo__span">React pizza</span>
      </Link>
    </div>
  );
};

export default Logo;
