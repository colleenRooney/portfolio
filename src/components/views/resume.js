import React, { Component } from 'react';
import { Tabs, Grid, Cell } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';


class Resume extends Component {
  render() {
    return(
      <div className="resume-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} noSpacing={true}>
          <div className="banner-text">
            <Navbar></Navbar>
          </div>
          <Tabs></Tabs>
          <SocialLinks></SocialLinks>
          </Cell>
          </Grid>
      </div>
    )
  }
}

export default Resume;
