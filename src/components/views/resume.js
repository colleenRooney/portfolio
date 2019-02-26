import React, { Component } from 'react';
import { Tabs, Grid, Cell } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';


class Resume extends Component {
  render() {
    return(
      <div className="resume-grid">
        <div className="banner" id="page">
          <Navbar></Navbar>
        </div>
        <Tabs></Tabs>
        <SocialLinks></SocialLinks>
        <div className="resume-container">
          <div className="resume"></div>
        </div>
        <p style={{'marginTop': '15px', 'textAlign': 'center'}}>*Sorry about the misplaced lines, I will fix this*</p>
      </div>
    )
  }
}

export default Resume;
