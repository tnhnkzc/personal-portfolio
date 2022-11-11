import React, { useEffect, useState } from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "./icon";
import { Input } from "./Input";
import { signup, signin } from "../../actions/auth";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState(initialState);
 
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "119267361450-s5vanhk669lld8f4ojurerdaaldphptn.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign in was unsuccessful! Try again later.");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleShowPassword = () => {
    setShowPassword((prevValue) => {
      return !prevValue;
    });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <form className={classes.form}>
      <Grid className={classes.formGrid} container spacing={2}>
        {isSignup && (
          <>
            <Input
              name="username"
              label="Username"
              handleChange={handleChange}
              autoFocus
            />
          </>
        )}
        <Input
          name="email"
          label="Email Address"
          handleChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          label="Password"
          handleChange={handleChange}
          type={showPassword ? "text" : "password"}
          handleShowPassword={handleShowPassword}
        />
      </Grid>
      <Container>
        <GoogleLogin
          clientId="496647822264-hj4l3f3i50de649810b6fpmri1iforva.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              className={classes.googleButton}
              color="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              variant="contained"
              startIcon={<Icon />}
            >
              Google Sign In
            </Button>
          )}
          buttonText="Login"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Container>
      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        color="primary"
      >
        {isSignup ? "Sign Up" : "Sign In"}
      </Button>
      <Button onClick={switchMode}>
        {isSignup
          ? "Already have an account? Sign In!"
          : "Don't have an account? Sign Up!"}
      </Button>
    </form>
  );
};

export default Auth;
