// components/ProtectedRoute.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
import { Navigate, Route, useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import CircularProgress from "@mui/material/CircularProgress";
import { getAuthenticatedUser, refreshToken } from "./redux/Auth/authSlice";
// import { isAccessTokenExpired } from "../utilities/common";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  // const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    // if (!user.accessToken || isAccessTokenExpired(user.accessToken)) {
    dispatch(refreshToken());

    // }
  }, [dispatch]);

  useEffect(() => {
    // if (!user.accessToken || isAccessTokenExpired(user.accessToken)) {
    if (user.userId === null && user.accessToken !== null) {
      console.log("------------------------------------user", user);
      dispatch(getAuthenticatedUser());
    }
    // }
  }, [user, user.accessToken]);

  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
  //   />
  // );

  if (user?.accessToken) {
    // if (isTenantSubscribed) {
    return (
      // <Route
      //   {...rest}
      //   render={() => <Component {...rest} />}
      // />
      children
    );
    // }
    // else {
    //   return <Redirect to="/subscription' />;
    // }
    // eslint-disable-next-line no-else-return
  }
  //  else {
  // console.log("logoooooooooooooooooooooooooooooooooooo");
  // return <Navigate replace={true} to="/" />;

  // setTimeout(() => {
  //   navigate("/", { replace: true });
  // }, 500);


  // }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <CircularProgress
        style={{
          color: "#fa7b03",
          height: "50px",
          width: "50px",
        }}
      />
    </div>
  );
  // return (
  //   <div
  //     style={{
  //       height: "100vh",
  //       width: "100vw",
  //     }}
  //     className=" d-flex justify-content-center align-items-center"
  //   >
  //     <CircularProgress
  //       style={{
  //         color: "#fa7b03",
  //         height: "50px",
  //         width: "50px",
  //         // marginTop: "47vh",
  //       }}
  //     />
  //   </div>
  // );
};

export default ProtectedRoute;
