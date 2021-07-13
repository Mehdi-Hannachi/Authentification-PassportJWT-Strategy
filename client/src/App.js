import logo from "./logo.svg";
import "./App.css";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";

import { Link, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <button onClick={localStorage.removeItem("token")}>Logout</button>

        <Route exact path="/register" render={() => <UserRegister />} />
        <Route exact path="/login" render={() => <UserLogin />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
      </header>
    </div>
  );
}

export default App;
