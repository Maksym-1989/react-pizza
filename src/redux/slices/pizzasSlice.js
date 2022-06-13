import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { list } from "../../components/sort/Sort";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetcPizzasStatus",
  async ({ categoryIdx, sortIdx }) => {
    const { data } = await axios.get(
      `https://_6294a42663b5d108c19025fe.mockapi.io/api/v1/items?category=${
        categoryIdx !== 0 ? categoryIdx : ""
      }&sortBy=${list[sortIdx].sortProperty}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    // setSearchString: (state, { payload }) => {
    //   return payload;
    // },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [fetchPizzas.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
    },
    [fetchPizzas.rejected]: (state, { payload, error }) => {
      state.error = error;
      state.loading = false;
      state.items = [];
      console.log(payload);
    },
  },
});

// export const { setSearchString } = pizzasSlice.actions;

export default pizzasSlice.reducer;
