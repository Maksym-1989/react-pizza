import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
