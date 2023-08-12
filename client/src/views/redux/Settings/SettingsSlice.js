/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance, secure_instance } from "../../../axios/axios-config";
import { getCookie, setCookie } from "../../../utilities/utils";

// Create an initial state for the auth slice
const initialState = {
  companyInformation: {
    id: null,
    user: {
      email: "",
      first_name: "",
      last_name: "",
      phone: null,
      newsletter: false,
      terms_acceptance: true,
      id: 10,
    },
    name: "",
    is_active: true,
    postal_code: null,
    fiscal_code: null,
    address: "",
    firm_number: null,
    bank_name: null,
    bank_iban: null,
    image: null,
    country: null,
  },
  loading: false,
  error: null,
};

export const setCompanyInformation = createAsyncThunk(
  "settings/setCompanyInfo",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await secure_instance.request({
        url: `/api/companies/${id}/`,
        method: "Get",
      });

      return response.data; // Assuming your loginAPI returns data with access_token, user_id, and role_id
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

export const editCompanyInformation = createAsyncThunk(
  "settings/editCompanyInfo",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await secure_instance.request({
        url: `/api/companies/${id}/`,
        method: "PATCH",
        data,
      });

      return response.data; // Assuming your loginAPI returns data with access_token, user_id, and role_id
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getAuthenticatedUser = createAsyncThunk(
//   "auth/authenticatedUser",
//   async () => {
//     const response = await secure_instance.request({
//       url: "/api/users/me/",
//       method: "GET",
//     });
//     return response.data;
//   }
// );

// Create the loginSlice
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // handleResgisterationStatus: (state) => {
    //   state.isRegistered = false;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCompanyInformation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setCompanyInformation.fulfilled, (state, action) => {
        state.loading = false;
        const { data } = action.payload;
        // console.log("action.payload", action.payload);
        state.companyInformation = data;
      })
      .addCase(setCompanyInformation.rejected, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editCompanyInformation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCompanyInformation.fulfilled, (state, action) => {
        state.loading = false;
        const { data } = action.payload;
        // console.log("action.payload", action.payload);
        state.companyInformation = data;
      })
      .addCase(editCompanyInformation.rejected, (state, action) => {
        // console.log(action);
        state.loading = false;
        // state.error = action.payload;
      });
    // .addCase(refreshToken.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(refreshToken.fulfilled, (state, action) => {
    //   state.loading = false;
    //   const { access_token, user_id, role_id } = action.payload;
    //   state.user.accessToken = access_token;
    //   state.user.userId = user_id;
    //   state.user.role = role_id;
    // })
    // .addCase(refreshToken.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const { handleResgisterationStatus, handleLoginStatusFalse } =
  settingsSlice.actions;

// Export the reducer and actions
export default settingsSlice.reducer;