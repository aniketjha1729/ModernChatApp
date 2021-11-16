import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
