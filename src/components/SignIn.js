import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../redux/actions/user";
import "./css/register.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    email: "aniket@gmail.com",
    password: "Aniket@1234",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    setFormData({
      ...formData,
      email: "",
      password: "",
    });
  };

  if (user?.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">EduHubChat</h3>
          <span className="loginDesc">Connect with peers on EduHub.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="loginBox" onSubmit={onSubmit}>
              <input
                placeholder="Email"
                className="loginInput"
                name="email"
                value={email}
                onChange={onChange}
              />
              <input
                placeholder="Password"
                className="loginInput"
                name="password"
                value={password}
                onChange={onChange}
              />
              <button className="loginButton" type="submit">
                Log In
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
