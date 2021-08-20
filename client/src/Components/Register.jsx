import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { FaUserAlt } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { postRegister } from "../Redux/asyncMethods/authMethod";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Register = () => {
  const { loading } = useSelector((state) => state.Auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const dispatch = useDispatch();
  const userForm = (e) => {
    const { name, value } = e.target;
    setUser((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };
  const registerForm = async (e) => {
    e.preventDefault();
    if (user.password !== user.cpassword) {
      return console.log("Please check your password");
    }
    dispatch(postRegister(user));
  };
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <meta name="description" content="This is Register page" />
        <link rel="canonical" href="/register" />
      </Helmet>
      <div className="container">
        <div className="form-wrapper">
          <form method="POST" onSubmit={registerForm}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon1-adornment">
                Full Name
              </InputLabel>
              <Input
                id="input-with-icon1-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                }
                value={user.name}
                name="name"
                onChange={userForm}
              />
            </FormControl>

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
                value={user.email}
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
                value={user.password}
                name="password"
                type="password"
                onChange={userForm}
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon4-adornment">
                Confirm Password
              </InputLabel>
              <Input
                id="input-with-icon4-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                }
                value={user.cpassword}
                name="cpassword"
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
              {loading ? "Loading..." : " Register"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
