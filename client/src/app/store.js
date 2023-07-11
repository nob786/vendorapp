import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../views/redux/Login/loginSlice";
import registerReducer from "../views/redux/Register/RegisterSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

export default store;
