import React from 'react'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortIdx } from "../../redux/slices/filterSlice";
import { RootState } from '../../redux/store';

import styles from "./Sort.module.scss";

type SortItem = {
  name: string;
  sortProperty: string;
}

export const list: SortItem[] = [
  { name: "популярности", sortProperty: "rating" },
  { name: "цене", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "name" },
];


const Sort: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sortIdx = useSelector((state: RootState) => state.filter.sortIdx);
  const dispatch = useDispatch();

  const sortRef = useRef<HTMLDivElement>(null);

  const sortObj = list[sortIdx];

  const onClickSort = (index: number) => {
    dispatch(setSortIdx(index));
    setIsVisible(false);
  };


  const handleClickOutside = (event: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) { setIsVisible(false); }
  };


  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className={styles.sort__label}>
        <p>Сортировка по:</p>
        <span onClick={() => setIsVisible(!isVisible)}>{sortObj.name}</span>
      </div>
      {isVisible && (
        <div className={styles.sort__popup}>
          <ul className={styles.sort__popup_list}>
            {list.map((obj, idx) => (
              <li
                className={sortIdx === idx ? styles.active : ""}
                key={idx}
                onClick={() => onClickSort(idx)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
