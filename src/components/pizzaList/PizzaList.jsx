import { useEffect } from "react";
import qs from "qs";

import PizzaListItem from "../pizzaListItem/PizzaListItem";
import Sceleton from "../sceleton/Sceleton";

import styles from "./PizzaList.module.scss";

import { list } from "../sort/Sort";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";

const PizzaList = () => {
  const dispatch = useDispatch();

  const categoryIdx = useSelector((state) => state.filter.categoryIdx);
  const sortIdx = useSelector((state) => state.filter.sortIdx);
  const searchString = useSelector((state) => state.searchString);

  const pizzas = useSelector((state) => state.pizzas.items);
  const isLoading = useSelector((state) => state.pizzas.loading);
  const error = useSelector((state) => state.pizzas.error);

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
          <p>{error.message}</p>
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
