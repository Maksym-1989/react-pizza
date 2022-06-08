import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIdx: 0,
  sortIdx: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIdx: (state, { payload }) => {
      state.categoryIdx = payload;
    },
    setSortIdx: (state, { payload }) => {
      state.sortIdx = payload;
    },
  },
});

export const { setCategoryIdx, setSortIdx } = filterSlice.actions;

export default filterSlice.reducer;
