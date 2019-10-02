import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Gallery from 'lightbox-alex-react';


import foto1 from '../img/foto1.gif';
import foto2 from '../img/foto2.jpg';
import foto3 from '../img/foto3.jpg';
import foto4 from '../img/foto4.jpg';
import foto5 from '../img/foto5.jpg';
import foto6 from '../img/foto6.jpg';
import foto7 from '../img/foto7.png';

const pictures = [foto1,foto2,foto3,foto4,foto5,foto6,foto7];
const thumbnails =[foto1,foto2,foto3,foto4,foto5,foto6,foto7];


class Projects extends Component {
		
    render() {

    	const displayPosts = (
    		<Tabs defaultIndex ={0} onSelect = {index => console.log(index)}>
    			<TabList>
    				<Tab>Graphic Design</Tab>
    				<Tab>HTML & CSS</Tab>
			      <Tab>React</Tab>
			      <Tab>Angular</Tab>
		      </TabList>
		      
		      {/*Panel 1*/}
		      <TabPanel>
			      <Gallery files={pictures} thumbnails={thumbnails}/>
			    </TabPanel>

			    {/* Panel 2*/}
			    <TabPanel>
		        <div className="col-folio">
				      <div className="cont-prjct">
					      <img
		              src={require('../img/creativio.jpg')}
		              alt="reactimg"
		              className="react-img"
		              />
							    <div class="overlay">
								    <a href="https://girldiamond.github.io/Creativio" target = "_blank" class="icon-folio" title="User Profile">
									    <i class="fas fa-link"></i>
									  </a>
								  </div>
							</div>
					  </div>
						<div className="col-folio">
				      <div className="cont-prjct">
					      <img
		              src={require('../img/astronomy.jpg')}
		              alt="reactimg"
		              className="react-img"
		              />
							    <div class="overlay">
								    <a href="https://girldiamond.github.io/Astronomy" target = "_blank" class="icon-folio" title="User Profile">
									    <i class="fas fa-link"></i>
									  </a>
								  </div>
							</div>
						</div>
						<div className="col-folio">
				      <div className="cont-prjct">
					      <img
		              src={require('../img/backOne.jpg')}
		              alt="reactimg"
		              className="react-img"
		              />
							    <div class="overlay">
								    <a href="https://girldiamond.github.io/BackOne" target = "_blank" class="icon-folio" title="User Profile">
									    <i class="fas fa-link"></i>
									  </a>
								  </div>
							</div>
						</div>
			    </TabPanel>
           
			    {/*Panel 3*/}
			    <TabPanel>
			      <div className="col-folio">
				      <div className="cont-prjct">
					      <img
		              src={require('../img/foto8.jpg')}
		              alt="reactimg"
		              className="react-img"
		              />
							    <div className="overlay">
								    <a href="https://en.wikipedia.org/wiki/Mario" target = "_blank" className="icon-folio" title="User Profile">
									    <i class="fas fa-link"></i>
									  </a>
								  </div>
							</div>
						</div>
			    </TabPanel>
			    {/*Panel 4*/}
			    <TabPanel>
			    <h3 className="making-projects">Working in new projects.</h3>
			    <div className="constructor">
			    	<i class="fas fa-tools fa-10x"></i>
			    </div>
			    </TabPanel>
    		</Tabs>
    	)
      return(
        <div className="wrapper-section">
        <h1 className="sectionTitleDark">Projects</h1>
        <h3 className="intro">Some of my latest work.</h3>
				{displayPosts} 
        </div>
      )
    }
  }
			      


			      

	            



  
  export default Projects;