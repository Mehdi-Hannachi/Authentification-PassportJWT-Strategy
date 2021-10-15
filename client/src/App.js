import "./App.css";
import { useEffect } from "react";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";
import { useDispatch, useSelector } from "react-redux";

import { Link, Route} from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import { getProfile, logout } from "./JS/actions/userActions";

function App() {
  const dispatch = useDispatch();
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
        <Route exact path="/profile" render={() => <UserProfile />} />
      </header>
    </div>
  );
}

export default App;
