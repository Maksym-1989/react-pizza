import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";

import { list } from "../sort/Sort";

import PizzaListItem from "../pizzaListItem/PizzaListItem";
import Sceleton from "../sceleton/Sceleton";

import styles from "./PizzaList.module.scss";
import { RootState, useAppDispatch } from "../../redux/store";

const PizzaList: React.FC = () => {
  const dispatch = useAppDispatch();

  const categoryIdx = useSelector((state: RootState) => state.filter.categoryIdx);
  const sortIdx = useSelector((state: RootState) => state.filter.sortIdx);
  const searchString = useSelector((state: RootState) => state.searchString);

  const pizzas = useSelector((state: RootState) => state.pizzas.items);
  const isLoading = useSelector((state: RootState) => state.pizzas.loading);
  const error = useSelector((state: RootState) => state.pizzas.error);

  const filteredPizzas = pizzas.filter(({ name }) =>
    name.toLowerCase().includes(searchString.toLowerCase())
  );

  const navigate = useNavigate();
  const params = qs.parse(useLocation().search.slice(1));

  useEffect(() => {
    dispatch(fetchPizzas({ categoryIdx, sortIdx }));

    const queryString = qs.stringify({
      category: categoryIdx,
      sortBy: list[sortIdx].sortProperty,
    });

    navigate(`?${queryString}`);
  }, [categoryIdx, sortIdx, navigate, dispatch]);

  return (
    <>
      {error ? (
        <div className={styles.error__message}>
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось загрузить данные. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <ul className={styles.pizza_block}>
          {isLoading
            ? [...new Array(9)].map((_, idx) => <Sceleton key={idx} />)
            : filteredPizzas.map((obj) => (
              <PizzaListItem {...obj} key={obj.id} />
            ))}
        </ul>
      )}
    </>
  );
};

export default PizzaList;
