import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentActiveNavigationTab: 0,
};

export const TabNavigationSlice = createSlice({
  name: "tabNavigation",
  initialState,
  reducers: {
    handleClickTab: (state, action) => {
      state.currentActiveNavigationTab = action.payload;
    },
    handlePrevStep: (state) => {
      state.activeStep -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleClickTab, handlePrevStep, setActiveStep } =
  TabNavigationSlice.actions;

export default TabNavigationSlice.reducer;
