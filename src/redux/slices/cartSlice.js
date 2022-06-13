import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  totalPricePizzas: 0,
  amount: 0,
};

const findById = (state, payload) =>
  state.pizzas.find((item) => item.id === payload.id);

const setAmount = (state) =>
  state.pizzas.reduce((acc, item) => acc + item.amount, 0);
const setTotalPrice = (state) =>
  state.pizzas.reduce((acc, item) => (acc += item.price * item.amount), 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartPizza: (state, { payload }) => {
      const findItem = findById(state, payload);
      if (findItem) {
        findItem.amount++;
      } else {
        state.pizzas.push(payload);
      }

      state.totalPricePizzas += payload.price;
      state.amount = setAmount(state);
    },
    removeAllPizzas: (state) => {
      state.pizzas = [];
      state.totalPricePizzas = 0;
      state.amount = 0;
    },
    deletePizza: (state, { payload }) => {
      state.pizzas = state.pizzas.filter((obj) => obj.id !== payload.id);
      state.totalPricePizzas -= payload.price * payload.amount;
      state.amount = setAmount(state);
    },

    increment: (state, { payload }) => {
      const findItem = findById(state, payload);
      findItem.amount++;
      state.amount = setAmount(state);
      state.totalPricePizzas = setTotalPrice(state);
    },
    decrement: (state, { payload }) => {
      const findItem = findById(state, payload);
      findItem.amount--;
      state.amount = setAmount(state);
      state.totalPricePizzas = setTotalPrice(state);
    },
  },
});

export const {
  addCartPizza,
  removeAllPizzas,
  deletePizza,
  increment,
  decrement,
} = cartSlice.actions;

export default cartSlice.reducer;
