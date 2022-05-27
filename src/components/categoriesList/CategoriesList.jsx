import { useState } from "react";
import "./categoriesList.scss";

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
    <ul className="categories-list list">
      {categories.map((category, idx) => (
        <li
          className={activeIndex === idx ? "active" : ""}
          key={idx}
          onClick={() => setActiveIndex(idx)}
        >
          {category}
        </li>
      ))}
      ,
    </ul>
  );
};

export default CategoriesList;
