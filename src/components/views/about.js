import React, { Component } from 'react';
import { Tabs, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';

class About extends Component {
  render() {
    return(
      <div className="about">
        <div className="banner-text">
          <Navbar></Navbar>
        </div>
        <Tabs></Tabs>
        <SocialLinks></SocialLinks>
        <div className="about-grid">
        <div className="image">
        </div>
        <div className='bio'>
          <h1>About Me</h1>
          <hr style={{"width": "90%", "margin": "auto"}}/>
          <p>Current <strong>Masters of Computer Science</strong> student at Portland 
            State University. Expected graduation of <strong>March 2020.</strong><br/></p>
            
            <p>I discovered my love of coding after graduating with a degree in
            Biochemistry. I am excited to be a part of building inovative and useful 
            software. Currently employeed as <em>Research Computing Software and Systems
             Support Technician.</em> My interest includes, but is not limited to, the
            the intersection of Molecular Biology and Computer Science.<br/>
            </p>
            <p className="internship"><strong>Actively seeking Summer 2019 internships</strong><br/>
            Will to rellocate for the right opportunity</p>
      
        </div>
      </div>
      </div>
    )
  }
}

export default About;
