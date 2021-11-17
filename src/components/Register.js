import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testAction, userRegister } from "../redux/actions/user";
import "./css/register.css";

const Register = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state);
  // console.log(user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    dispatch(userRegister(name, email, password));
    setFormData({
      ...formData,
      email: "",
      password: "",
      name: "",
    });
  };

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
                placeholder="Name"
                className="loginInput"
                name="name"
                value={name}
                onChange={onChange}
              />
              <input
                placeholder="Email"
                className="loginInput"
                name="email"
                value={email}
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                name="password"
                value={password}
                onChange={onChange}
              />
              <button type="submit" className="loginButton">
                Sign Up
              </button>
              <button className="loginRegisterButton">Log into Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
