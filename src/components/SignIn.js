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
    [theme.breakpoints.down("sm")]: {
      marginLeft: "45%",
    },
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
  });
  const classes = useStyles();
  const { email, password } = formData;

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
        <Grid item sm={7}>
          <div className={classes.signImage}></div>
        </Grid>
        <Grid item sm={5} xs={12}>
          <Container className={classes.signinContainer}>
            <Lock color="primary" className={classes.signinIcon} />
            <Typography className={classes.signinText}>Log In</Typography>
          </Container>
          <Container>
            <form action="">
              <div className={classes.formFields}>
                <TextField
                  id="outlined-basic"
                  label="Email Address*"
                  variant="outlined"
                  fullWidth
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
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
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
