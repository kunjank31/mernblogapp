import React from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "../img/1.jpg";

const SliderCard = ({ sliderCard }) => {
  return (
    <>
      <div className="slider-card">
        <NavLink to={`/blog/${sliderCard.slug}`}>
          <div className="card-img">
            <img src={sliderCard.fileName} alt="Card-Img" />
            <div className="title">
              <h3>How to make tea ?</h3>
            </div>
          </div>
        </NavLink>
        <div className="card-content">
          <p>{sliderCard.metaDesc.slice(0, 120)}...</p>
          <div className="user">
            <div className="user-details">
              <div className="author-icon">
                <img src={MainLogo} alt="Author Icon" />
              </div>
              <div className="author">
                <h5>By {sliderCard.userName}</h5>
                <p>22 Oct 2018</p>
              </div>
            </div>
            <div className="learn">
              <NavLink to="/about">Learn More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderCard;
