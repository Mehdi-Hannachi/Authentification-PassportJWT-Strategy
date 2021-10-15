import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  

  // Redirect user  to the login page if is not logged or authenticated
  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return <div>Profile</div>;
};

export default UserProfile;
