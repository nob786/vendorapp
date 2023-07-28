import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../views/redux/Login/loginSlice";
import registerReducer from "../views/redux/Register/RegisterSlice";
import stepperReducer from "../views/redux/Stepper/StepperSlice";
import authSlice from "../views/redux/Auth/authSlice";
import TabNavigationReducer from "../views/redux/TabNavigation/TabNavigationSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  login: loginReducer,
  register: registerReducer,
  stepper: stepperReducer,
  tabNavigation: TabNavigationReducer,
});

export default rootReducer;
