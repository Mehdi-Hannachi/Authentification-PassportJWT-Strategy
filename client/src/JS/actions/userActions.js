import {
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../constants/userActionsType";
import axios from "axios";

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const res = await axios.post(
      "http://localhost:7500/user/register",
      newUser
    );

    console.log(res);
    console.log(res.data);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data });
  }
};

export const userLogin = (userCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("http://localhost:7500/user/login", userCred);

    localStorage.setItem("token", res.data.token);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.response.data });
  }
};
