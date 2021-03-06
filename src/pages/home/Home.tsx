import { useSelector } from "react-redux";

import CategoriesList from "../../components/categoriesList/CategoriesList";
import Sort from "../../components/sort/Sort";
import PizzaList from "../../components/pizzaList/PizzaList";
import Search from "../../components/search/Serch";
import { categories } from "../../components/categoriesList/CategoriesList";

import styles from "./Home.module.scss";
import { RootState } from "../../redux/store";

const Home: React.FC = () => {
  const categoryIdx = useSelector((state: RootState) => state.filter.categoryIdx);

  return (
    <section className="section">
      <div className="container">
        <Search />
        <div className={styles.navigation_block}>
          <CategoriesList />
          <Sort />
        </div>
        <div className={styles.pizza_block}>
          <h2 className={styles.pizza_block__title}>
            {categories[categoryIdx] + " пиццы"}
          </h2>
          <PizzaList />
        </div>
      </div>
    </section>
  );
};

export default Home;
