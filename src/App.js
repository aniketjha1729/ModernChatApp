import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import UserPrivateRoute from "./routes/UserPrivateRoute";
import { useDispatch } from "react-redux";
import { setUserAuthToken } from "./utils/AuthToken";
import { loadUserData } from "./redux/actions/user";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.usertoken) {
      setUserAuthToken(localStorage.usertoken);
      dispatch(loadUserData());
    }
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<UserPrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
