import React, { Component } from 'react';

class About extends Component {
    render() {
      return(
        <div className="wrapper-section">
	        <h1 className="sectionTitleLight">About Me</h1>
	        <h3 class="intro-light">Let's break the ice a little.</h3>
	        <div className="foto-img-div">
		        <img
		        src={require('../img/me5.png')}
		        alt="me"
		        className="foto-me"
		        />
	        </div>
	        <div className="info-me">
	        	<h1 className="hi">HELLO !</h1>
		        <p>I'm Carolina, Web developer and designer from Costa Rica.
		        I have a degree in web design and development from Cenfotec university. 
		        I’ve been trained on a number of different technologies. 
		        I have rich experience in web site design and building and customization. 
		        I love to talk with you about our unique.</p>
						<ul className="info-ul">
						  <li><span className="icon"><i class="fas fa-lg fa-laptop-code"></i></span>I'm a person who never gives up and works hard.</li>
						  <li><span className="icon"><i class="fas fa-lg fa-code"></i></span>I'm ready to adapt to any current and future technology.</li>
						  <li><span className="icon "><i class="fas fa-lg fa-handshake"></i></span>I totally commit to my work.</li>
						</ul>
	        </div>
        </div>
      )
    }
  }
  
  export default About;
		  





	        
		       
