import React from 'react'
import "./about.css"

function About() {
  return (
    <section id="about"> 
    <div className="container ">
        <div className='about-main'>
        <h3>About Me</h3>
        <p>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
        <div className="about-inner">
            <div className="about-item">
                <p>Name:</p>
                <h3>Mary Hardy </h3>
            </div>
            <div className="about-item">
                <p>Email:</p>
                <h3> info@gmail.com </h3>
            </div>
            <div className="about-item">
                <p>Date of birth:</p>
                <h3>11 November 1987 </h3>
            </div>
            <div className="about-item">
                <p> From:</p>
                <h3>Los Angeles, USA </h3>
            </div>
        </div>
        </div>
    </div>
  </section>
  )
}

export default About
