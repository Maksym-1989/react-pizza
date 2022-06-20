import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/notFound/NotFound";
import MainLayout from "./components/mainLayout/MainLayout";

import "./assets/scss/main.scss";
import "./app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
