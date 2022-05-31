import { useState } from "react";
import styles from "./categoriesList.module.scss";

const CategoriesList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <ul className={styles.categories_list}>
      {categories.map((category, idx) => (
        <li
          className={activeIndex === idx ? styles.active : ""}
          key={idx}
          onClick={() => setActiveIndex(idx)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
