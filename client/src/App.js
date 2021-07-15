import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";
import { useDispatch, useSelector } from "react-redux";

import { Link, Route, useHistory } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import { getProfile } from "./JS/actions/userActions";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector((state) => state.userReducer.user);
  // const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);

  const getUser = () => {
    dispatch(getProfile());
  };

  useEffect(() => {
    getUser();
  }, [isAuth]);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/login");
          }}
        >
          Logout
        </button>

        <Route exact path="/register" render={() => <UserRegister />} />
        <Route exact path="/login" render={() => <UserLogin />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
      </header>
    </div>
  );
}

export default App;
