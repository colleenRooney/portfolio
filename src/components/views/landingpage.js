import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} noSpacing={true}>
	    <h1>TEST</h1>
          </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;

