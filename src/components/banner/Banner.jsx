import React from 'react'
import "./banner.css"
import manImg from "../../assets/man.png"
import sunImg from "../../assets/sun.png"

function Banner() {
  return (
    <section id='banner'>
        <div className="container">
        <div className="banner-text">
                <h2>Hi, I  am</h2>
                <h3>Mary Hardy</h3>
                <p> Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
            </div>
            <div className="banner-button">
                <a href="#"> Download CV</a>
                <a href="#"> Contact</a>
            </div>
             <div class="man">
                <img src={manImg} alt="man" />
            </div>
            <div class="sun">
                <img src={sunImg} alt="sun" />
              
            </div>
        </div>
       

    </section>
  )
}

export default Banner
