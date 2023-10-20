import "./HeroImage.css";
import React from 'react';
import IntroImg from '../assets/intro.jpg';
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="introImg" src={IntroImg} alt="Something went wrong"/>
        </div>
        <div className="content">
          <p>HI, I'M A FINANCE ADVISOR.</p>
          <h1>finance advisor</h1>
          <div>
            <Link to="/project" className="btn">projects</Link>
            <Link to="/contact" className="btn btnLight">contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage