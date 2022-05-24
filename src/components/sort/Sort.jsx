import "./sort.scss";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <p>Сортировка по:</p>
        <span>популярности</span>
      </div>
      <div class="sort__popup">
        <ul className="list">
          <li class="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
