import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { FaUserAlt } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../Redux/asyncMethods/authMethod";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Auth);

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const userForm = (e) => {
    const { name, value } = e.target;
    setLoginUser((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };
  const loginForm = async (e) => {
    e.preventDefault();
    dispatch(postLogin(loginUser));
  };
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name="description" content="This is Login page" />
        <link rel="canonical" href="/login" />
      </Helmet>
      <div className="container">
        <div className="form-wrapper">
          <form method="POST" onSubmit={loginForm}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon2-adornment">
                Email
              </InputLabel>
              <Input
                id="input-with-icon2-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                }
                type="email"
                value={loginUser.email}
                name="email"
                onChange={userForm}
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon3-adornment">
                Password
              </InputLabel>
              <Input
                id="input-with-icon3-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                }
                value={loginUser.password}
                name="password"
                type="password"
                onChange={userForm}
              />
            </FormControl>
            <Button
              variant="contained"
              className="btn"
              type="submit"
              color="primary"
            >
              {loading ? 'Loading...': "Login"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
