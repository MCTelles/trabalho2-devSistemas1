import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Home } from "./views/Home/Home";
import { Login } from "./views/Login/Login";
import { CreateAccount } from "./views/CreateAccount/CreateAccount";
// import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export { App };
