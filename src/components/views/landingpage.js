import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Navbar from '../navBar';


class Landing extends Component {
  render() {
    return(
      <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12}>
          <div className="banner-text">
            <Navbar></Navbar>
          </div>
          </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
