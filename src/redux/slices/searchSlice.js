import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchString",
  initialState: "",
  reducers: {
    setSearchString: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export default searchSlice.reducer;
