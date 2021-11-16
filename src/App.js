import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import UserPrivateRoute from "./routes/UserPrivateRoute";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<UserPrivateRoute />}>
            <Route element={<Home />} />
          </Route>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
