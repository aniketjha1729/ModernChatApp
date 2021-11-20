import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../redux/actions/user";


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
    <div>
      
    </div>
  );
};

export default SignIn;
