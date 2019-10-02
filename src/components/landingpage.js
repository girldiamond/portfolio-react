import React, { Component } from 'react';
import Pdf from '../files/carolinaAzofeifaChinchilla.pdf';
import AboutMe from './aboutme';
import Services from './services';
import Projects from './projects';
import Contact from './contact';
import ReactDOM from "react-dom";
import TextAnimation from "react-animate-text";
import { Animation } from '@blackbox-vision/styled-animation';

class Landing extends Component {
    render() {

      return(
        <div id={'home'} class="mainWrapper">
          <section className="landing-section clearfix"> 
          	<div className="wrapper-section">
          		<img
              src={require('../img/me.png')}
              alt="avatar"
              className="avatar-img"
              />
          		<div className="banner-text">
              
          			<h1 className="title-name">Hello, I Am Carolina</h1>
          			<h1 className="career-title">Web Developer and Designer</h1>
              
          		<hr/>
    					<p>HTML/CSS | Bootstrap | Javascript | React | Angular | Photoshop | SQL SERVER | PHP</p>
    					<Animation name="bounce" duration="4s" timing="ease-out">
              <a className="btn-cv" href = {Pdf} target = "_blank">Download CV</a>
              </Animation>;
          		</div>
          	</div>
          </section>
          <section id={'about'} className="about-section clearfix"> 
              <AboutMe/>   
          </section>
          <section id={'services'} className="services-section clearfix">
            <Services/>
          </section>
          <section id={'projects'} className="projects-section clearfix">
            <Projects/>
          </section>
          <section id={'contact'} className="contact-section clearfix">
            <Contact/>
          </section>
        </div>      
      )
    }
  }
            
            
            
             
            
           
            
             
  
  export default Landing;


                
                
                

  							
              
                  
                  
              
              
              
            