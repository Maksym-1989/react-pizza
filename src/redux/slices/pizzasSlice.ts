import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { list } from "../../components/sort/Sort";


type FetchPizzasArgs = {categoryIdx:number, sortIdx:number}

export type PizzasItem = {
  id: number,
  imageUrl:string,
  name:string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

interface PizzasSliceState { 
   items: PizzasItem[],
  loading: boolean,
  error: boolean,
}

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetcPizzasStatus",
  async ({ categoryIdx, sortIdx }:FetchPizzasArgs) => {
    const { data } = await axios.get<PizzasItem[]>(
      `https://6294a42663b5d108c19025fe.mockapi.io/api/v1/items?category=${
        categoryIdx !== 0 ? categoryIdx : ""
      }&sortBy=${list[sortIdx].sortProperty}`
    );
    return data as PizzasItem[];
  }
);

const initialState:PizzasSliceState = {
  items: [],
  loading: false,
  error: false,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
  },

 extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state, ) => {
        state.loading = true;
      state.error = false;
      })
    builder
      .addCase(fetchPizzas.fulfilled, (state, { payload }) => {
     state.loading = false;
      state.error = false;
      state.items = payload;

      })
    builder
      .addCase(fetchPizzas.rejected, (state, { payload, error }) => {
      state.error = true;
      state.loading = false;
      state.items = [];

      })
  },
});


export default pizzasSlice.reducer;
