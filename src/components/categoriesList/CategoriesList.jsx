import styles from "./categoriesList.module.scss";

const CategoriesList = ({ value, setCategories }) => {
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
          className={value === idx ? styles.active : ""}
          key={idx}
          onClick={() => setCategories(idx)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
