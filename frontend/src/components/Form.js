import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" required placeholder="Name"></input>
            <label>Email</label>
            <input type="email" required placeholder="mail"></input>
            <label>Subject</label>
            <input type="text" required placeholder="Subject"></input>
            <label>Message</label>
            <textarea type="text" required placeholder="Type your message here" rows="6"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form