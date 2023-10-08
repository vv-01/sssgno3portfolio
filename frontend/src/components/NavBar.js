import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../components/NavBar.css";
import {FaBars, FaTimes} from "react-icons/fa";


const NavBar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to='/'>
            <h1>PortFolio</h1>
        </Link>
        <ul className= {click ? "navMenu active" : "navMenu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/project">Projects</Link>
          </li>
          <li>
          <Link to="/about">About Me</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{color: "#fff"}}/>
            ) : (
              <FaBars size={20} style={{color: "#fff"}}/>
              )
          }
        </div>
    </div>
  );
}

export default NavBar;