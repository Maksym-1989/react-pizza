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
      if (!current(state.pizzas).length) {
        state.pizzas.push(payload);
        return;
      }
      const findItem = state.pizzas.find((item) => item.id === payload.id);
      if (!Boolean(findItem)) {
        state.pizzas.push(payload);
        return;
      }

      const idxType = current(state.pizzas).findIndex(
        (item) => item.types === payload.types
      );
      const idxSize = current(state.pizzas).findIndex(
        (item) => item.sizes === payload.sizes
      );

      // if (idxType >= 0) {
      //   state.pizzas[idxType].amount++;
      // }
      // if (idxSize >= 0) {
      //   state.pizzas[idxSize].amount++;
      // }
    },
  },
});

export const { addCartPizza } = cartSlice.actions;

export default cartSlice.reducer;
