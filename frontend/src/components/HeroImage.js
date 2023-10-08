import "./HeroImage.css";
import React from 'react';
import IntroImg from '../assets/intro.jpg';

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="introImg" src={IntroImg} alt="Something went wrong"/>
        </div>
        <div>
          <p>HI, I'M A FINANCE ADVISOR.</p>
          <h1>finance advisor</h1>
          <div>
            <link to="/project" className="btn">
              Projects
            </link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage