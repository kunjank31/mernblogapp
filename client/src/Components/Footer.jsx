import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../img/bloggerlogokk.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div className="main">
              <div className="footer-logo">
                <img src={FooterLogo} alt="Footer Logo" />
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                accusamus.
              </p>
              <div className="social-media-icons">
              <NavLink to='https://facebook.com/kunjank31'>
                <FaFacebook />
              </NavLink>
              <NavLink to='https://twitter.com/kujank31'>
                <FaTwitter />
              </NavLink>
              <NavLink to='https://instagram.com/kunjank31'>
                <FaInstagram />
              </NavLink>
              </div>
            </div>
            <div className="posts-section-footer">
              <div className="recent-posts border">
              <h3>Recent Posts</h3>
              <ul>
                <li>
                  <NavLink to="/">How to make</NavLink>
                </li>
                <li>
                  <NavLink to="/">how to </NavLink>
                </li>
                <li>
                  <NavLink to="/">Build Project</NavLink>
                </li>
                <li>
                  <NavLink to="/">Career</NavLink>
                </li>
              </ul>
            </div>
              <div className="latest-posts border">
              <h3>Previous Posts</h3>
              <ul>
                <li>
                  <NavLink to="/">How to make</NavLink>
                </li>
                <li>
                  <NavLink to="/">how to </NavLink>
                </li>
                <li>
                  <NavLink to="/">Build Project</NavLink>
                </li>
                <li>
                  <NavLink to="/">Career</NavLink>
                </li>
              </ul>
            </div>
              <div className="contact border">
              <h3>Contact</h3>
              <ul>
                <li>
                  <NavLink to="/">How to make</NavLink>
                </li>
                <li>
                  <NavLink to="/">how to </NavLink>
                </li>
                <li>
                  <NavLink to="/">Build Project</NavLink>
                </li>
                <li>
                  <NavLink to="/">Career</NavLink>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
