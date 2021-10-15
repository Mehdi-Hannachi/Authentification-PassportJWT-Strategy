import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
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
      {isAuth ? (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>
              Authentification Passport
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={"/login"}
                    onClick={() => dispatch(logout())}
                  >
                    LogOut
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>
              Authentification Passport
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/register"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/register" render={() => <UserRegister />} />
            <Route exact path="/login" render={() => <UserLogin />} />
            <PrivateRoute path="/profile" component={UserProfile} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
