import { createSlice } from "@reduxjs/toolkit";

const Count = createSlice({
  name: "count",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value >= 1) {
        state.value -= 1;
      }
    },
    setInputValue: (state, action) => {
      const inputValue = action.payload;
      // Kiểm tra xem inputValue có chứa ký tự không phải là số không
      if (!isNaN(inputValue)) {
        state.value = Number(inputValue);
      }
    },
  },
});

export const { increment, decrement, setInputValue } = Count.actions;
export default Count.reducer;
