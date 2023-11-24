import "./AboutContent.css";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who am I? </h1>
            <p>asdfghjkl;qwertyuiopzxcvbnm,.</p>
            <a href="/contact">
                <button className="btn">Contact</button>
            </a>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src="" alt="import from assets" className="img"/>
                </div>
                <div className="img-stack-bottom">
                    <img src="" alt="import from assets" className="img"/>
                </div>
            </div>    
        </div>    
    </div>
  )
}

export default AboutContent