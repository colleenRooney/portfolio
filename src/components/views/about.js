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
          <p>hello</p>
        </div>
      </div>
      </div>
    )
  }
}

export default About;
