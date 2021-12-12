import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Inbox, Mail, Menu } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#3F51B5",
    color: "#FFFFFF",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  leftMenu: {
    display: "flex",
    justifyContent: "space-between",
    width: 150,
    cursor: "Pointer",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandName: {
    marginRight: theme.spacing(15),
  },
}));

const Navbar = (props) => {
  const { window } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useSelector((state) => state);

  const logoutUser = () => {
    dispatch(logout());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {user.user ? (
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <Typography
              variant="h6"
              style={{ color: "white" }}
              onClick={logoutUser}
            >
              Logout
            </Typography>
          </ListItem>
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.brandName}>
            EduHub Chat
          </Typography>
          <div className={classes.leftMenu}>
            {!user.user ? (
              <>
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
              </>
            ) : (
              <>
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "white" }}
                    onClick={logoutUser}
                  >
                    Logout
                  </Typography>
                </div>
              </>
            )}
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
