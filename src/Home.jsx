import React from "react";
import "./Home.css";

function Home() {
  const videoSource = "/BackgroundVideo.mp4";
  const logoSource = "/Logo.png";

  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="backgroundVideo">
        <source src={videoSource} type="video/mp4"></source>
      </video>
      <nav>
        <img src={logoSource} alt="Logo" className="logo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">My Projects</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Life With Ben</h1>
        <a href="#">Explore</a>
      </div>
    </div>
  );
}

export default Home;
