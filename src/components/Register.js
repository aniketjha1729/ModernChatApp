import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/user";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
  cardContainer: {
    width: 200,
    height: 200,
    border: 1,
    backgroundColor: "blue",
    marginTop: 40,
    marginLeft: 100,
    position: "relative",
  },
  badge: {
    width: "100px",
    height: "100px",
    backgroundColor: "limegreen",
    position: "absolute",
    bottom: "0px",
    right: "-50px",
  },
}));

const Register = () => {
  const classes = useStyles();
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
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <div className={classes.badge}></div>
      </div>
    </div>
  );
};

export default Register;
