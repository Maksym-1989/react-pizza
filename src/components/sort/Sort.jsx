import { useState } from "react";
import styles from "./Sort.module.scss";

export const list = [
  { name: "популярности", sortProperty: "rating" },
  { name: "цене", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "name" },
];
const Sort = ({ value, setSelected }) => {
  const [isVisible, setIsVisible] = useState(false);

  const sortObj = list[value];

  const onClickSort = (index) => {
    setSelected(index);
    setIsVisible(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <p>Сортировка по:</p>
        <span onClick={() => setIsVisible(!isVisible)}>{sortObj.name}</span>
      </div>
      {isVisible && (
        <div className={styles.sort__popup}>
          <ul className={styles.sort__popup_list}>
            {list.map((obj, idx) => (
              <li
                className={value === idx ? styles.active : ""}
                key={idx}
                onClick={() => onClickSort(idx)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
