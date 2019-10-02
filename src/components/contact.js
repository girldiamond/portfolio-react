import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactImageMagnify from 'react-image-magnify';
import watchImg from '../img/reactimg.png';

  




class Contact extends Component {
  render () {
      return (
        <div className="wrapper-section">
        <h1 className="sectionTitleLight">Contact</h1>
        <h3 className="intro-light">I'd love to hear from you.</h3>
        
      
        {/*details*/}
        <div className="sectionDetails">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>
              <p>San José, Costa Rica.</p>
            </li> 
            <li>
              <p>Phone number <span>&#58;</span> (506) 8687-5562</p>
            </li> 
            <li>    
              <p>Email <span>&#58;</span> 
              <a href="mailto:epicarol87@gmail.com?Subject=Hello" className="email">epicarol87@gmail.com</a></p>
            </li> 
            <li>
              
              <ul className="socialNav">  
                <li>
                  <a target="_blank" href="https://www.facebook.com/carolinaBelieve87">
                     <span className="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
               </li> 
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/carolinazofeifac">
                     <span className="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li> 
                <li>
                  <a target="_blank" href="skype:epic-arol87?chat">
                    <span className="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fab fa-skype fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li> 
                <li>
                  <a target="_blank" href=" https://wa.me/50686875562?text=I'm%20interested%20in%20your%20projects.%20Let's%20work%20together.">
                    <span className="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li> 
                
              </ul> 
            </li>
          </ul>
        </div>
        </div>
      )
  
  }//end render
}
 

  


 


        
      




 export default Contact;