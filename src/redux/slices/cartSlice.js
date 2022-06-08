import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  totalPricePizzas: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartPizza: (state, { payload }) => {
      state.pizzas.push(payload);
    },
    setTotalPricePizzas: (state, { payload }) => {
      state.totalPricePizzas += payload;
    },
  },
});

export const { setCartPizza, setTotalPricePizzas } = cartSlice.actions;

export default cartSlice.reducer;
