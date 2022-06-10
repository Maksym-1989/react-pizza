import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  totalPricePizzas: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartPizza: (state, { payload }) => {
      // state.pizzas.push(payload);
      // state.totalPricePizzas += payload.price;

      if (!current(state.pizzas).length) {
        state.pizzas.push(payload);
        return;
      }
      const findItem = state.pizzas.find((item) => item.id === payload.id);
      if (!Boolean(findItem)) {
        state.pizzas.push(payload);
        return;
      }

      // const idxType = current(state.pizzas).findIndex(
      //   (item) => item.types === payload.types
      // );
      // const idxSize = current(state.pizzas).findIndex(
      //   (item) => item.sizes === payload.sizes
      // );
      // console.log("size", idxSize);

      // if (idxType === -1) {
      //   state.pizzas.push(payload);
      // }
      // if (idxSize === -1) {
      //   state.pizzas.push(payload);
      // }
      // if (idxType >= 0) {
      //   state.pizzas[idxType].amount++;
      // }
      // if (idxSize >= 0) {
      //   state.pizzas[idxSize].amount++;
      // }
    },
    removeAllPizzas: (state) => {
      state.pizzas = [];
      state.totalPricePizzas = 0;
    },
    deletePizza: (state, { payload }) => {
      state.pizzas.filter((obj) => obj.id !== payload.id);
      state.totalPricePizzas -= payload.price;
    },
  },
});

export const { addCartPizza, removeAllPizzas, deletePizza } = cartSlice.actions;

export default cartSlice.reducer;
