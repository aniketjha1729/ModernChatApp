import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import "./home.css";
const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    display: "flex",
    marginTop: "65px",
    zIndex: "-1",
  },
  midBody: {
    display: "flex",
    flex: "60%",
  },
  rightBody: {
    display: "flex",
    flex: "25%",
  },
}));
const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  return <div className={classes.bodyContainer}></div>;
};

export default Home;
