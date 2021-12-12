import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../redux/actions/user";
import clsx from "clsx";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import loginImg from "../static/signimg.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
  signinContainer: {
    paddingTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  signImage: {
    backgroundImage: `url(${loginImg})`,
    height: 550,
    backgroundPosition: "center",
  },
  formFields: {
    marginTop: theme.spacing(4),
  },
  signinIcon: {
    fontSize: "40px",
    marginLeft: "45%",
  },
  signinText: {
    fontSize: "25px",
    marginLeft: "43%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "41%",
    },
  },
}));

const SignIn = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    email: "aniket@gmail.com",
    password: "Aniket@1234",
    showPassword: false,
  });
  const classes = useStyles();
  const { email, password } = formData;
  const handleClickShowPassword = () => {
    console.log("helr");
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
    <div className={classes.container}>
      <Grid container>
        <Grid item sm={1}>
          <div></div>
        </Grid>
        <Grid item sm={6}>
          <div className={classes.signImage}></div>
        </Grid>
        <Grid item sm={5} xs={12}>
          <Container className={classes.signinContainer}>
            <Lock color="primary" className={classes.signinIcon} />
            <Typography className={classes.signinText}>Log In</Typography>
          </Container>
          <Container>
            <form onSubmit={onSubmit}>
              <div className={classes.formFields}>
                <TextField
                  id="outlined-basic"
                  label="Email Address*"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className={classes.formFields}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={formData.showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={onChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {formData.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </div>
              <div className={classes.formFields}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Log In
                </Button>
              </div>
            </form>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
