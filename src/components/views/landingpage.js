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
          <div className="banner">
            <Navbar></Navbar>
          </div>
          <SocialLinks></SocialLinks>
          </Cell>
          </Grid>
          <div className="float-text" style={{'width': '20%', 'background-color': 'white', 'opacity': '0.8'}}>
            <p>UNDER CONSTRUCTION<br/>
            <hr></hr>
            <em>Sorry about the flashing. <br/>I'm new to this whole web-dev thing
            and working on resolving it<br/>-- 02/26/2019</em></p>
          </div>
      </div>
    )
  }
}

export default Landing;
