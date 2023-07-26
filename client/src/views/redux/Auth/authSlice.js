import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../axios/axios-config';
import { toggleLoginView } from '../Login/loginSlice';
import { toggleRegisterView } from '../Register/RegisterSlice';
// import { loginAPI, refreshTokenAPI } from '../api/auth'; // Replace with your actual API functions

// Create an initial state for the auth slice
const initialState = {
  user: {
    accessToken: null,
    userId: null,
    role: null,
  },
  loading: false,
  error: null,
};

// Asynchronous action to handle login
export const handleRegister = createAsyncThunk('auth/register', async (data) => {
  try {
    const response = await instance.request({
      url: "/api/companies/",
      method: "Post",
      data
    });
    // window.location.replace("/");
    return response.data; // Assuming your loginAPI returns data with access_token, user_id, and role_id
  } catch (error) {
    // Handle login error here if needed
    throw error;
  }
});

export const handleLogin = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await instance.request({
      url: "/api/token/?accept=application/json",
      method: "Post",
      data: {
        email: email,
        password: password,
      }
    });
    return response.data; // Assuming your loginAPI returns data with access_token, user_id, and role_id
  } catch (error) {
    // Handle login error here if needed
    throw error;
  }
});

// Asynchronous action to handle token refresh
// export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
//   try {
//     const response = await refreshTokenAPI(); // Implement your refreshTokenAPI function
//     return response.data; // Assuming your refreshTokenAPI returns data with access_token, user_id, and role_id
//   } catch (error) {
//     // Handle token refresh error here if needed
//     throw error;
//   }
// });

// Create the loginSlice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.loading = false;
        const { access, user } = action.payload;
        state.user.accessToken = access;
        state.user.userId = user.id;
        state.user.role = user.role;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(handleRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleRegister.fulfilled, (state, action) => {
        state.loading = false;
        // show login view
        // toggleLoginView());
        // hide register view
        // toggleRegisterView());
        // const { access, user } = action.payload;
        // state.user.accessToken = access;
        // state.user.userId = user.id;
        // state.user.role = user.role;
      })
      .addCase(handleRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
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

// Export the reducer and actions
export default authSlice.reducer;
