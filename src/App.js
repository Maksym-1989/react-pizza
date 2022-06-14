import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/notFound/NotFound";

import "./assets/scss/main.scss";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
