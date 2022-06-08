import { useState } from "react";

import CategoriesList from "../../components/categoriesList/CategoriesList";
import Sort from "../../components/sort/Sort";
import PizzaList from "../../components/pizzaList/PizzaList";
import Search from "../../components/search/Serch";

import { categories } from "../../components/categoriesList/CategoriesList";

import styles from "./Home.module.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const [search, setSearch] = useState("");

  const categoryIdx = useSelector((state) => state.filter.categoryIdx);

  return (
    <section className="section">
      <div className="container">
        <Search value={search} onSearch={setSearch} />
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
