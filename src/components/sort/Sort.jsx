import { useState } from "react";
import styles from "./Sort.module.scss";

const Sort = ({ value, setSelected }) => {
  const [isVisible, setIsVisible] = useState(false);

  const list = ["популярности", "цене", "алфавиту"];
  const [sort, setSort] = useState(list[0]);

  const onClickSort = (name, index) => {
    setSelected(index);
    setSort(name);
    setIsVisible(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <p>Сортировка по:</p>
        <span onClick={() => setIsVisible(!isVisible)}>{sort}</span>
      </div>
      {isVisible && (
        <div className={styles.sort__popup}>
          <ul className={styles.sort__popup_list}>
            {list.map((name, idx) => (
              <li
                className={value === idx ? styles.active : ""}
                key={idx}
                onClick={() => onClickSort(name, idx)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
