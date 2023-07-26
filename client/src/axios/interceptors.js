import store from "../app/store";
// import * as authActions from "../redux/actions/auth.actions";

export const addInterceptors = (instance) => {
  instance.interceptors.request.use(addAccessToken, handleRequestError);
  instance.interceptors.response.use(handleResponseOK, handleResponseError);
};

export const addAccessToken = (config) => {
  const state = store.getState();
  console.log("state-----------------", state)
  // const user = state.authReducer.user;

  // const accessToken = user.accessToken;

  // if (!accessToken) {
  //   store.dispatch(authActions.refreshToken());
  //   console.log("===============================================================================");
  //   // return config;
  // } else {
  //   return {
  //     ...config,
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };
  // }
};

export const handleRequestError = (error) => {
  // console.log("handleRequestError", error);
  return Promise.reject(error);
};

export const handleResponseOK = (response) => {
  // console.log("handleResponseOK", response);
  return response;
};

export const handleResponseError = (error) => {
  // console.log("handleResponseError", error);
  if (error.response?.status === 401) {
    // return handleRefreshToken(error.config);
  }
  return Promise.reject(error);
};