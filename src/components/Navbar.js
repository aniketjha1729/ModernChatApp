import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";
import { toggleNavbar } from "../redux/actions/navToggle";
import { MdMenu } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    backgroundColor: "#3F51B5",
    width: "100%",
    display: "flex",
    position: "fixed",
    top: "0",
    color: "white",
    height: "60px",
  },
  leftContainer: {
    display: "flex",
    flex: "70%",
    alignItems: "center",
  },
  menuBar: {
    marginLeft: "25px",
    marginRight: "15px",
    cursor: "pointer",
  },
  rightContainer: {
    flex: "30%",
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, toogleNav } = useSelector((state) => state);

  useEffect(() => {
    console.log(user, toogleNav);
  }, [user]);

  const logoutUser = () => {
    dispatch(logout());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleNavMenu = () => {
    console.log("toggleNavMenu");
    dispatch(toggleNavbar());
  };

  return (
    <div className={classes.navContainer}>
      <div className={classes.leftContainer}>
        <Typography variant="h5" className={classes.menuBar}>
          <MdMenu onClick={toggleNavMenu} />
        </Typography>
        <Typography variant="h4">ChatApp</Typography>
      </div>
      <div className={classes.rightContainer}>Aniket Kr Jha</div>
    </div>
  );
};

export default Navbar;
