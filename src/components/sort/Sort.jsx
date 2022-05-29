import { useState } from "react";
import "./sort.scss";

const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);

  const list = ["популярности", "цене", "алфавиту"];
  const [sort, setSort] = useState(list[0]);

  const onClickSortCategori = (name, index) => {
    setSelected(index);
    setSort(name);
    setIsVisible(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <p>Сортировка по:</p>
        <span onClick={() => setIsVisible(!isVisible)}>{sort}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul className="list">
            {list.map((name, idx) => (
              <li
                className={selected === idx ? "active" : ""}
                key={idx}
                onClick={() => onClickSortCategori(name, idx)}
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
