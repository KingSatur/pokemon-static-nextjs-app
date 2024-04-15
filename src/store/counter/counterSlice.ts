import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounter(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    add(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    substract(state, action: PayloadAction<number>) {
      if (state.count - action.payload < 0) {
        state.count = 0;
        return;
      }
      state.count -= action.payload;
    },
    resetCounter(state) {
      state.count = initialState.count;
    },
  },
});

export const { add, resetCounter, substract, initCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
