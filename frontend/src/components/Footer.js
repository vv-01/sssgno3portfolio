import "../components/Footer.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p>Address line one</p>
                        <p>Address line 2</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        Contact number
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        Email ID
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Lorem Epsum...................................
                    ...........................................
                    ...............................................
                    ..............................................
                </p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer