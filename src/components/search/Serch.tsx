import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { setSearchString } from "../../redux/slices/searchSlice";
import { RootState } from "../../redux/store";

import styles from "./Search.module.scss";

const Serch: React.FC = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const searchString = useSelector((state: RootState) => state.searchString);

  const inputValue = useDebounce(value, 400);

  useEffect(() => {
    dispatch(setSearchString(inputValue));
  }, [dispatch, inputValue]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchString(""));
    setValue("");
    inputRef.current?.focus();

  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={(event) => onChangeInput(event)}
      />
      {searchString && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Serch;
