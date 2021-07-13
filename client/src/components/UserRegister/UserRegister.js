import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../JS/actions/userActions";

const UserRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();

  const register = () => {
    const newUser = {
      fullName,
      email,
      adress,
      password,
    };

    dispatch(userRegister(newUser));

    setFullName("");
    setEmail("");
    setAdress("");
    setPassword("");
  };

  return loading ? (
    <h1>Please wait ....</h1>
  ) : (
    <div>
      <h1>User Register form</h1>
      <input
        type="text"
        name=""
        placeholder="FullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        name=""
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name=""
        value={adress}
        placeholder="Adress"
        onChange={(e) => setAdress(e.target.value)}
      />
      <input
        type="password"
        name=""
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => register()}>Register</button>
    </div>
  );
};

export default UserRegister;
