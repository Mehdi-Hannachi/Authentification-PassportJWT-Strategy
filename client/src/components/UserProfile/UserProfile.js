import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="Admin"
            className="rounded-circle"
            width="150"
          />
          <div className="mt-3">
            <h4>{user.fullName}</h4>
            <p className="text-secondary mb-1">{user.email}</p>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">{user.adress}</p>
            <button className="btn btn-primary">Follow</button>
            <button className="btn btn-outline-primary">Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
