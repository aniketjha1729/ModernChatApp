import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/user";

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
    <div></div>
  );
};

export default Register;
