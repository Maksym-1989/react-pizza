import { createSlice, current } from "@reduxjs/toolkit";


export type CartItemObj = {
  id: string,
  imageUrl:string,
  name:string,
  types: string,
  sizes: number,
  price: number,
  amount: number,
}

interface CartSliceState {
  pizzas: CartItemObj[],
  totalPricePizzas: number,
  amount: number,

}

const initialState:CartSliceState = {
  pizzas: [],
  totalPricePizzas: 0,
  amount: 0,
};

const findById = (state:CartSliceState, payload:CartItemObj) =>
  state.pizzas.find(( item:CartItemObj) => item.id === payload.id);

const setAmount = (state:CartSliceState) =>
  state.pizzas.reduce((acc: number, item:CartItemObj) => acc + item.amount, 0);

const setTotalPrice = (state:CartSliceState) =>
  state.pizzas.reduce((acc: number, item:CartItemObj) => (acc += item.price * item.amount), 0);

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
      const findItem: CartItemObj | undefined = findById(state, payload);
      if (findItem) {      findItem.amount++;
}
      state.amount = setAmount(state);
      state.totalPricePizzas = setTotalPrice(state);
    },
    decrement: (state, { payload }) => {
      const findItem: CartItemObj | undefined = findById(state, payload);
      if (findItem) {       if (current(findItem).amount <= 1) return;
      findItem.amount--;
}
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
