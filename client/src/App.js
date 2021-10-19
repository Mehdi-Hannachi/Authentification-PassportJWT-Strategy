import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import { getProfile } from "./JS/actions/userActions";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  //  Check if user is authenticate action

  // Check if user is logged and authenticated since the application is mounted or updated
  useEffect(() => {
    const getUser = () => {
      dispatch(getProfile());
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className="App">
      <NavBar />
      <div className="auth-wrapper">
        <Switch>
          <Route exact path="/register" render={() => <UserRegister />} />
          <Route exact path="/login" render={() => <UserLogin />} />
          <PrivateRoute path="/profile" render={() => <UserProfile />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
