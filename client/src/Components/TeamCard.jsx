import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const TeamCard = (props) => {
  return (
    <>
      <div className="team-card">
        <div className="team-img">
          <img src={props.teamImage} alt="team-Img" />
        </div>
        <div className="team-name">
          <h4>Janie Pratt</h4>
          <p>CEO</p>
        </div>
        <div className="card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            et temporibus quo Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="social-media-icons">
          <NavLink to="https://facebook.com/kunjank31">
            <FaFacebook />
          </NavLink>
          <NavLink to="https://twitter.com/kujank31">
            <FaTwitter />
          </NavLink>
          <NavLink to="https://instagram.com/kunjank31">
            <FaInstagram />
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default TeamCard;
