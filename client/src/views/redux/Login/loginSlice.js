import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModal: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.isLoginModal = !state.isLoginModal;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoginModal, decrement, incrementByAmount } = loginSlice.actions;

export default loginSlice.reducer;
