import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../JS/actions/userActions";
import { Redirect } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const login = () => {
    const cred = {
      email,
      password,
    };

    dispatch(userLogin(cred));
    setEmail("");
    setPassword("");
  };

  return isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <div>
      <input
        type="text"
        name=""
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name=""
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default UserLogin;
