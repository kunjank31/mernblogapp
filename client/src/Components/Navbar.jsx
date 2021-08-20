import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import NavLogo from "../img/bloggerlogokk.png";
import { USER_LOGOUT } from "../Redux/type/authType";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const changeMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { users } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: USER_LOGOUT });
    return window.location.reload();
  };
  const Links = users ? (
    <ul className={click ? "enable" : "disable"}>
      <li onClick={closeMobileMenu}>
        <NavLink to="/post">Write</NavLink>
      </li>
      <li onClick={closeMobileMenu}>
        <NavLink to="/dashboard">{users.name}</NavLink>
      </li>
      <li onClick={closeMobileMenu}>
        <NavLink to="/" onClick={logout}>
          Logout
        </NavLink>
      </li>
    </ul>
  ) : (
    <ul className={click ? "enable" : "disable"}>
      <li onClick={closeMobileMenu}>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li onClick={closeMobileMenu}>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li onClick={closeMobileMenu}>
        <NavLink to="/blog">Contact</NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <header id="header">
        <div className="container">
          <nav id="navbar">
            <div className="menuIcon" onClick={changeMenu}>
              {click ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className="nav-items">
              <ul className={click ? "enable" : "disable"}>
                <li onClick={closeMobileMenu}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={closeMobileMenu}>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li onClick={closeMobileMenu}>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
              <div className="logo">
                <NavLink to="/">
                  <img src={NavLogo} alt="Navbar Logo" />
                </NavLink>
              </div>
              {Links}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
