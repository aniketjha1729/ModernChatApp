import React, { useState, useEffect } from "react";
import { Link, useRoutes } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
  Grid,
} from "@material-ui/core";
import {
  Inbox,
  Menu,
  SettingsPower,
  Chat,
  Person,
  Search,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#3F51B5",
    color: "#FFFFFF",
  },
  navContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  rightMenu: {
    flex: "20%",
    [theme.breakpoints.down("sm")]: {
      flex: "0%",
    },
  },
  leftMenu: {
    display: "flex",
    justifyContent: "flex-end",
    flex: "80%",
    [theme.breakpoints.down("sm")]: {
      flex: "100%",
      justifyContent: "space-bewteen",
    },
  },
  authContainer: {
    display: "flex",
    width: "150px",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandName: {
    marginRight: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileBrand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
  },
  afterLoginContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  userSettingContainer: {
    display: "flex",
    justifyContent: "space-around",
    cursor: "pointer",
    flex: "10%",
   
  },
  userSearch: {
    display: "flex",
    flex: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: "30px",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",
    },
  },
}));

const Navbar = (props) => {
  const { window } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useSelector((state) => state);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logoutUser = () => {
    dispatch(logout());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div className={classes.drawerContainer}>
      <div className={classes.mobileBrand}>
        <h1>EduHub</h1>
      </div>
      <Divider />
      <List>
        {user.user ? (
          <>
            <ListItem>
              <ListItemIcon style={{ color: "white" }}>
                <SettingsPower />
              </ListItemIcon>
              <Typography variant="h6" style={{ color: "white" }}>
                Groups
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ color: "white" }}>
                <Inbox />
              </ListItemIcon>
              <Typography variant="h6" style={{ color: "white" }}>
                People
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ color: "white" }}>
                <SettingsPower />
              </ListItemIcon>
              <Typography variant="h6" style={{ color: "white" }}>
                Groups
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ color: "white" }}>
                <Inbox />
              </ListItemIcon>
              <Typography variant="h6" style={{ color: "white" }}>
                People
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ color: "white" }}>
                <SettingsPower />
              </ListItemIcon>
              <Typography variant="h6" style={{ color: "white" }}>
                Groups
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ color: "white" }}>
                <Inbox />
              </ListItemIcon>
              <Typography variant="h6" style={{ color: "white" }}>
                People
              </Typography>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{ color: "white" }}
                  onClick={handleDrawerToggle}
                >
                  Log In
                </Typography>
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{ color: "white" }}
                  onClick={handleDrawerToggle}
                >
                  Sign Up
                </Typography>
              </Link>
            </ListItem>
          </>
        )}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <div className={classes.navContainer}>
            <div className={classes.rightMenu}>
              <Typography variant="h5" noWrap className={classes.brandName}>
                EduHub
              </Typography>
            </div>
            <div className={classes.leftMenu}>
              {!user?.user ? (
                <div className={classes.authContainer}>
                  <div>
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                      <Typography variant="h6" style={{ color: "white" }}>
                        Login
                      </Typography>
                    </Link>
                  </div>
                  <div>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <Typography variant="h6" style={{ color: "white" }}>
                        SignUp
                      </Typography>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={classes.afterLoginContainer}>
                  <div className={classes.userSearch}>
                    <form action="">
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "100%" }}>
                          <input type="text" className={classes.searchInput} />
                        </div>
                        <button style={{ height: "30px" }}>
                          <Search />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className={classes.userSettingContainer}>
                    <div>
                      <Person style={{ fontSize: "30px" }} />
                    </div>
                    <div>
                      <Chat style={{ fontSize: "30px" }} />
                    </div>
                    <div>
                      <SettingsPower
                        onClick={logoutUser}
                        style={{ fontSize: "30px" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav
        className={classes.drawer}
        style={{ backgroundColor: "blue" }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Navbar;
