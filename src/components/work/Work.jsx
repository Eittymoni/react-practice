
import React from 'react'
import "./work.css"
import javaImg from "../../assets/logo-javascript 1.png"
import vectorImg from "../../assets/Vector (1).png"
import nodeImg from "../../assets/nodejs-icon 1.png"
import mongoImg from "../../assets/mongo 1.png"

function Work() {
  return (
    <section id="what">
        <div className="container">
          <div className='what-text'>
            <h3> What I do</h3>
            <p>I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>   
        </div>
          <div className='what-items'>
            <div className="items-box">
                <img src={javaImg} alt="pic" />
                <h3>Vanilla JavaScript</h3>
                <p>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="items-box">
                <img src={vectorImg} alt="pic" />
                <h3>React</h3>
                <p>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="items-box">
                <img src={nodeImg} alt="" srcset="" />
                <h3>Node.js</h3>
                <p>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                
            </div>
            <div className="items-box">
                <img src={mongoImg} alt="" />
                <h3> MongoDB</h3>
                <p>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
            </div>
         </div>
       </section>
  )
}

export default Work
