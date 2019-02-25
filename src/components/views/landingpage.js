import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';


class Landing extends Component {
  render() {
    return(
      <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid noSpacing='true'>
          <Cell col={12}>
          <div className="banner-text">
            <Navbar></Navbar>
          </div>
          <SocialLinks></SocialLinks>
          </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
