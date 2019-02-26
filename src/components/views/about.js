import React, { Component } from 'react';
import { Tabs } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';

class About extends Component {
  render() {
    return(
      <div className="about">
        <div className="banner" id="page">
          <Navbar></Navbar>
        </div>
        <Tabs></Tabs>
        <SocialLinks></SocialLinks>

        <div className="about-container">
          <div className="image" id="profile-photo"></div>
          <div className="float-text" id='bio'>
            <h1>About Me</h1>
            <hr style={{"width": "95%", "margin": "auto", "marginTop": "0px"}}/>
            <p>Current <strong>Masters of Computer Science</strong> student at Portland 
              State University. Expected graduation of <strong>March 2020.</strong><br/></p>
              
              <p>I discovered my love of coding after graduating with a BS of
              Biochemistry. I am excited to be a part of building inovative and useful 
              software. Currently employeed as a <em>Research Computing Software and Systems
              Support Technician.</em> My interests include, but is not limited to, the
              the intersection of Scientific Research and Computer Science.<br/>
              </p>
              <p className="internship"><strong>Actively seeking Summer 2019 internships</strong><br/>
              Will to rellocate for the right opportunity</p>
          </div>
          <div className="float-text" id="misc">
            <h1>Other Interests</h1>
            <hr style={{"width": "95%", "margin": "auto", "marginTop": "0px"}}/>
            <p>When not coding, I enjoy spending my time painting or playing outside with my dog.
              You may have recognized the topography of one very beautiful ditch on the landing page. 
              Some of my favorite adventures and activities inclue:
              <ul>
                <li>Rafting the Grand Canyon</li>
                <li>Hiking from Cape Alava WA to Bozeman MT by way of the <a href="https://www.pnt.org/">PNT</a>
                and <a href="https://continentaldividetrail.org/">CDT</a>
                </li>
                <li>Climbing the Grand Teton</li>
                <li>Volunteering as a Ski Patroller for Big Sky Ski Patrol for 2 seasons</li>
                <li>Creating</li>
                <li>Tackling challenging problems</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
