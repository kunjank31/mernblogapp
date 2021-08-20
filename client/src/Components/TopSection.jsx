import React from "react";
import MainLogo from "../img/codingkk logo.png";

const TopSection = () => {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="hero-sec">
            <div className="main-logo">
              <img src={MainLogo} alt="Hero Logo" />
            </div>
            <div className="hero-title">
              <h1>Full Stack MERN Developer</h1>
              <p>
                If you’re looking for the latest and best way to create fast
                prototyping of any web design project we are here, a complete
                wireframe ui kit!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSection;
