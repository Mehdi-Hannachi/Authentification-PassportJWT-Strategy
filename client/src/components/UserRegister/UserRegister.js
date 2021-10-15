import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../../JS/actions/userActions";
import Loader from "../Loader/Loader";

const UserRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();

  // Dispatch usr register action
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
    <Loader />
  ) : (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Full name</label>
        <input
          type="text"
          className="form-control"
          placeholder="FullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          value={adress}
          placeholder="Adress"
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={() => register()}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to={`/login`}>sign in? </Link>
      </p>
    </form>
  );
};

export default UserRegister;
