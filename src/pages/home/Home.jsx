import { useState } from "react";

import CategoriesList from "../../components/categoriesList/CategoriesList";
import Sort from "../../components/sort/Sort";
import PizzaList from "../../components/pizzaList/PizzaList";
import Search from "../../components/search/Serch";

import { categories } from "../../components/categoriesList/CategoriesList";

import styles from "./Home.module.scss";

const Home = () => {
  const [categoriesActive, setCategoriesActive] = useState(0);
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <section className="section">
      <div className="container">
        <Search value={search} onSearch={setSearch} />
        <div className={styles.navigation_block}>
          <CategoriesList
            value={categoriesActive}
            setCategories={setCategoriesActive}
          />
          <Sort value={selected} setSelected={setSelected} />
        </div>
        <div className={styles.pizza_block}>
          <h2 className={styles.pizza_block__title}>
            {categories[categoriesActive] + " пиццы"}
          </h2>
          <PizzaList
            category={categoriesActive}
            sortIdx={selected}
            search={search}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
