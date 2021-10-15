import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  // Redirect user  to the login page if is not logged or authenticated

  if (!isAuth) return <Redirect to={`/login`} />;

  return (
    <div>
      <Route component={Component} {...rest} />
    </div>
  );
};

export default PrivateRoute;
