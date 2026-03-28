

import React from "react";
import "../css/App.css";
import avatar from "../assets/react.svg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-left">
          <p className="intro">
            Hello! I Am <span className="name">Suman Verma</span>
          </p>

          <h1 className="title">
            A Full Stack Developer who
            <br />
            Builds modern apps by its{" "}
            <span className="highlight">code</span>...
          </h1>

          <p className="subtitle">
            Because if the backend and UI impress you, what else can?
          </p>
        </div>

        {/* Right Image */}
        <div className="home-right">
          <div className="avatar-wrapper">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;