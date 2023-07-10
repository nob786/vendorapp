import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../views/redux/Login/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
