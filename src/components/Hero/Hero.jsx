import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero.png";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero1">
        <h4>Skip the travel! Find Online</h4>

        <h2>
          Medical <span className="med">Centers</span>
        </h2>

        <p>
          Connect instantly with a 24x7 specialist or choose to
          video visit a particular doctor
        </p>

        <Button className="button">Find centers</Button>
      </div>

      <div className="hero2">
        <img src={HeroImage} alt="Doctor and healthcare professional" />
      </div>
    </div>
  );
}