import React from 'react'
import "./header.css"
import logoImg from "../../assets/logo.png"

const Header = () => {
  return (
  
    <nav>
    <div class="container">
        <div className="nav-main">
            <div className="logo">
               <a href="#"> <img src={logoImg} alt="" /></a>
            </div>
            <div className="manu">
                <ul>
                <li> <a href="#"> Portfolio</a></li>
                <li> <a href="#"> Blog</a></li>
                <li> <a href="#"> Hire Me</a></li>
                </ul>
            </div>
        </div>
    </div>

</nav>

  
    
  )
}

export default Header
