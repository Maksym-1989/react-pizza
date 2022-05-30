import CategoriesList from "../components/categoriesList/CategoriesList";
import Sort from "../components/sort/Sort";
import PizzaList from "../components/pizzaList/PizzaList";

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="navigation-block">
          <CategoriesList />
          <Sort />
        </div>
        <div className="pizza-block">
          <PizzaList />
        </div>
      </div>
    </section>
  );
};

export default Home;
