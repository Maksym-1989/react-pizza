import "./logo.scss";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <a className="logo__link link" href="">
        <img className="logo__img" src={logo} alt="logo" width="70" />
        <span className="logo__span">React pizza</span>
      </a>
    </div>
  );
};

export default Logo;
