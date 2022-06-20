import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const [value, setValue] = useState(6);
  const navigate = useNavigate();

  setInterval(() => {
    setValue(value - 1);
  }, 1000);

  setTimeout(() => {
    navigate("/");
  }, 6000);

  return (
    <div className="container">
      <div className={styles.not_found}>
        <h2>Произошла ошибка 😕</h2>
        <p>К сожалению, такой страницы не существует.</p>
        <p>Вы будете перенаправлены на главную страницу через {value} сек.</p>
      </div>
    </div>
  );
};

export default NotFound;
