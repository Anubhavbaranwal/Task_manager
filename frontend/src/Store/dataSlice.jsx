import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "Slice",
  initialState: {
    add: false,
  },
  reducers: {
    addfunc: (state, action) => {
      console.log(state.add);
      state.add = !state.add;
    },
  },
});

export const { addfunc } = DataSlice.actions;

export default DataSlice.reducer;
