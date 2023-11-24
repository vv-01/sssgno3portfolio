import "../components/Card.css"

import React from 'react'

const Card = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> heading </h3>
          <span className="bar"></span>
          <p className="btc">$10000</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <a href="/contact" className="btn">
            contact now
          </a>
        </div>
        <div className="card">
          <h3> heading </h3>
          <span className="bar"></span>
          <p className="btc">$10000</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <a href="/contact" className="btn">
            contact now
          </a>
        </div>
        <div className="card">
          <h3> heading </h3>
          <span className="bar"></span>
          <p className="btc">$10000</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <p> -3pages-</p>
          <a href="/contact" className="btn">
            contact now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card