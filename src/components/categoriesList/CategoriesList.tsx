import { useDispatch, useSelector } from "react-redux";

import { setCategoryIdx } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

import styles from "./categoriesList.module.scss";

export const categories: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const CategoriesList: React.FC = () => {
  const categoryIdx = useSelector((state: RootState) => state.filter.categoryIdx);
  const dispatch = useDispatch();

  return (
    <ul className={styles.categories_list}>
      {categories.map((category, idx) => (
        <li
          className={categoryIdx === idx ? styles.active : ""}
          key={idx}
          onClick={() => dispatch(setCategoryIdx(idx))}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
