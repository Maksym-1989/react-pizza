import styles from "./categoriesList.module.scss";

export const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const CategoriesList = ({ value, setCategories }) => {
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
