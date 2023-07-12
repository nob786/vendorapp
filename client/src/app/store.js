import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../views/redux/Login/loginSlice";
import registerReducer from "../views/redux/Register/RegisterSlice";
import stepperReducer from "../views/redux/Stepper/StepperSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    stepper: stepperReducer,
  },
});

export default store;
