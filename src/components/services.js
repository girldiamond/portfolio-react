import React, { Component } from 'react';

class Services extends Component {
    render() {
      return(
        <div className="wrapper-section">
        <h1 className="sectionTitleLight">What I Do</h1>
        <h3 className="intro-light">Things I'm skilled at and passionate about.</h3>
        <div className="service-item">
        	<span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-code fa-stack-1x fa-inverse"></i>
			</span>
			<h3 className="service-heading">Front-End Technologies</h3>
			<p className="text-muted">Expert knowledge working with front-end technologies (HTML5/CSS3/JavaScript).</p>
        </div>
        <div className="service-item">
        	<span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-cog fa-stack-1x fa-inverse fa-spin"></i>
			</span>
					<h3 className="service-heading">Responsive Development</h3>
					<p className="text-muted">Excellent knowledge of recent development practices (Mobile First,OOCSS, Flexbox).</p>
        </div>
        <div className="service-item">
        	<span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="far fa-lightbulb fa-stack-1x fa-inverse fa-xs"></i>
					</span>
					<h3 className="service-heading">CSS and JavaScript Frameworks</h3>
					<p className="text-muted">Advance level knowledge in JavaScript and CSS frameworks, such as LESS, SASS, Angular and React.</p>
        </div>
         <div className="service-item">
        	<span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-vector-square fa-stack-1x fa-inverse fa-xs"></i>
					</span>
					<h3 className="service-heading">Graphic Design</h3>
					<p className="text-muted">Master understanding of web design tools such as Sketch, Photoshop and Illustrator.</p>
        </div>
         <div className="service-item">
        	<span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-bug fa-stack-1x fa-inverse fa-xs"></i>
					</span>
					<h3 className="service-heading">Debugging Development</h3>
					<p className="text-muted">Proven debugging and troubleshooting skills.</p>
        </div>
         <div className="service-item">
        	<span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fab fa-safari fa-stack-1x fa-inverse fa-xs"></i>
            
					</span>
					<h3 className="service-heading">Cross-Browser Code</h3>
					<p className="text-muted">Knowledge and experience of accessibility, usability and cross-browser issues.</p>
        </div>
        </div>
  
      )
    }
  }
  
  export default Services;