import "./App.css";
import { useEffect } from "react";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import { getProfile, logout } from "./JS/actions/userActions";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);

  //  Check if user authenticated action
  const getUser = () => {
    dispatch(getProfile());
  };

  // Check if user is logged and authenticated since the application is mounted or updated
  useEffect(() => {
    getUser();
  }, [isAuth]);

  return (
    <div className="App">
      <header className="App-header">
        {isAuth ? (
          <>
            {" "}
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}

        <Route exact path="/register" render={() => <UserRegister />} />
        <Route exact path="/login" render={() => <UserLogin />} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </header>
    </div>
  );
};

export default App;
