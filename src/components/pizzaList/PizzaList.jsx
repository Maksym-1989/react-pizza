import "./pizzaList.scss";

const PizzaList = () => {
  return (
    <ul className="pizza__list">
      <li className="pizza__item">
        <img
          class="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
        <h4>Чизбургер-пицца</h4>
        <div class="pizza-block__selector">
          <ul className="list">
            <li class="active">тонкое</li>
            <li>традиционное</li>
          </ul>
          <ul className="list">
            <li class="active">26 см.</li>
            <li>30 см.</li>
            <li>40 см.</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default PizzaList;
