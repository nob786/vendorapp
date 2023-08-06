/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance, secure_instance } from "../../../axios/axios-config";
import { getCookie, setCookie } from "../../../utilities/utils";

// Create an initial state for the auth slice
const initialState = {
  loading: false,
  error: null,
  AdPostSuccessAlert: false,
  AdPostErrorAlert: false,
  vendorAds: [],
};

export const handleCreateNewAd = createAsyncThunk(
  "Ads/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await secure_instance.request({
        url: "/api/ads/",
        method: "Post",
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

export const handleEditAd = createAsyncThunk(
  "Ads/edit",
  async (data, { rejectWithValue }) => {
    const dataToEdit = data.data;
    try {
      const response = await secure_instance.request({
        url: `/api/ads/${data.adID}/`,
        method: "Patch",
        data: dataToEdit,
      });
      return response.data; // Assuming your loginAPI returns data with access_token, user_id, and role_id
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

export const listVendorAds = createAsyncThunk(
  "Ads/list",
  async (data, { rejectWithValue }) => {
    try {
      const response = await secure_instance.request({
        url: "/api/ads/",
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

// Create the loginSlice
export const AdsSlice = createSlice({
  name: "Ads",
  initialState,
  reducers: {
    handleResgisterationStatus: (state) => {
      state.isRegistered = false;
    },
    handleUpdateAds: (state, action) => {
      state.vendorAds = action.payload;
    },
    handleUpdateAdPostSuccessAlerting: (state, action) => {
      state.AdPostSuccessAlert = action.payload;
    },
    handleUpdateAdPostErrorAlerting: (state, action) => {
      state.AdPostErrorAlert = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleCreateNewAd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleCreateNewAd.fulfilled, (state, action) => {
        state.loading = false;
        state.AdPostSuccessAlert = true;
        console.log("action.payload", action.payload);
      })
      .addCase(handleCreateNewAd.rejected, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.AdPostErrorAlert = action.payload;
        // state.error = action.payload;
      })
      .addCase(handleEditAd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleEditAd.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action.payload", action.payload);
      })
      .addCase(handleEditAd.rejected, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(listVendorAds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listVendorAds.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorAds = action.payload.data;
        console.log("action.payload", action.payload);
      })
      .addCase(listVendorAds.rejected, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  handleResgisterationStatus,
  handleUpdateAds,
  handleUpdateAdPostSuccessAlerting,
  handleUpdateAdPostErrorAlerting,
} = AdsSlice.actions;

// Export the reducer and actions
export default AdsSlice.reducer;
