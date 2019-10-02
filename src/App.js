import React, { Component } from 'react';
import './App.scss';
import Main from './components/main';
import Landing from './components/landingpage';
import {Link} from 'react-router-dom';




class App extends Component {
  render() {
  return (
    <div className="capsule">
  	<header id="Home">
  	 <div className="nav-container">	 
      <div className="wrapper-menu">
      	<div className="div-logo">
          {/*imagen de prueba*/}
          <img
          src={require('./img/isotipo.png')}
          alt="logo"
          className="logo-img"
          />
        </div>
        <label for="show-menu" className="show-menu">
          <i className="fa fa-bars fa-3x menu-bar-icon"></i>
        </label>
        <input type="checkbox" id="show-menu" role="button"/>
	        <ul id="menu" className="ul">
	          <li><a href="#home">Landing</a></li>
	          <li><a href="#about">About</a></li>
	          <li><a href="#services">What I Do</a></li>
	          <li><a href="#projects">Projects</a></li>
	          <li><a href="#contact">Contact</a></li>
	        </ul> 
      </div>{/*end wrapper*/}
      </div>{/*end nav-container*/}
    </header>

   
    <Landing/>
    <footer>
      <div class="wrapper">
        <p>copyright © Carolina Azofeifa Chinchilla 2019.</p>
        <p id="output"></p>
        
      </div>
    </footer>
    </div>
    
  );
}
}
export default App;

        
        

      	


