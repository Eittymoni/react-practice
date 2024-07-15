import React from 'react'
import "./footer.css"
import fbImg from "../../assets/fb.png"
import twtImg from "../../assets/twt.png"
import insImg from "../../assets/ins.png"

function Footer() {
  return (
    <section id="footer">
    <div className="container"> 
        <div className="footer-item">
            <div className="f-connect">
                <h3>Lets Connect</h3>
                <p>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                    <div class="icon">
                        
                        <div class="fb"> <a href="https://web.facebook.com/"> <img src={fbImg} alt="" /></a></div>
                        <div class="twt"> <a href="https://web.twiter.com/"> <img src={twtImg} alt=""/></a></div>
                        <div class="ins"> <a href="https://web.instagram.com/"> <img src={insImg} alt=""/></a></div>  
                       
                    </div>
            </div>
            <div className="f-message">
                <h3>Let’s Message me</h3>
                <form>
                <input type="text" size="50" placeholder=" Your name"  /> <br/> <br/> 
                    
                    <input type="text" size="50" placeholder="Your email"/> <br/> <br/>
                    <textarea name="" id="" cols="48" rows="10" placeholder="Message"></textarea> <br/>
                </form>
                
               
                
              
                <div className="submit-button">
                    <a href="#"> Submit</a>
                </div>
            
        </div>
    </div>
    </div>
</section>
  )
}

export default Footer
