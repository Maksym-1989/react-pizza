import "./sort.scss";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <p>Сортировка по:</p>
        <span>популярности</span>
      </div>
      <div className="sort__popup">
        <ul className="list">
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
