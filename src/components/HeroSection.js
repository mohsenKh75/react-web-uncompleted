import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import videos from "../videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={videos} autoPlay loop muted />
      <h1>besondere Erfahrungen!</h1>
      <p>Beste Komponisten</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {" "}
          Clicken Sie
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          Schauen Sie an! <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
