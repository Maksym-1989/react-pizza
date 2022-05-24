import Header from "./components/header/Header";
import "./assets/scss/main.scss";
import "./app.scss";
import CategoriesList from "./components/categoriesList/CategoriesList";
import Sort from "./components/sort/Sort";
import PizzaList from "./components/pizzaList/PizzaList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
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
      </main>
    </div>
  );
}

export default App;
