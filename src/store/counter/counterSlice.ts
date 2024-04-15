import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    substract(state, action: PayloadAction<number>) {
      if (state.count - action.payload < 0) {
        state.count = 0;
      }
      state.count -= action.payload;
    },
    resetCounter(state) {
      state.count = initialState.count;
    },
  },
});

export const { add, resetCounter, substract } = counterSlice.actions;

export default counterSlice.reducer;
