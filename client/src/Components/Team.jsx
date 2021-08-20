import React from "react";
import TeamCard from "./TeamCard";
import teamImage1 from "../img/1.jpg";
import teamImage2 from "../img/42.jpg";
import teamImage3 from "../img/85.jpg";

const Team = () => {
  return (
    <>
      <section className="team section">
        <div className="container">
          <h2 className="sec-head">The Team</h2>
          <div className="team-wrapper">
            <TeamCard teamImage={teamImage1} />
            <TeamCard teamImage={teamImage3} />
            <TeamCard teamImage={teamImage2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
