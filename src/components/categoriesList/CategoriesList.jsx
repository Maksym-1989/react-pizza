import "./categoriesList.scss";

const CategoriesList = () => {
  return (
    <ul className="categories-list list">
      <li className="active">Все</li>
      <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li>
    </ul>
  );
};

export default CategoriesList;
