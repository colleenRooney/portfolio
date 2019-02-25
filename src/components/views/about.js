import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';

class About extends Component {
  render() {
    return(
      <div className="about-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} noSpacing={true}>
          <div className="banner-text">
            <Navbar></Navbar>
          </div>
          <SocialLinks></SocialLinks>
          <Card shadow={1} style={{width: '512px', height: '512px', margin: '10px', background: 'url(https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13880197_10209880495519722_5716428322345645940_n.jpg?_nc_cat=111&_nc_ht=scontent-sea1-1.xx&oh=1fc789084a3bc358c6c8b2e683ebb4bc&oe=5D26A989)', backgroundPosition: 'center'}}>
            <CardTitle expand />
          </Card>
          </Cell>
          <Cell>
            <Card shadow={1} style={{width: '500px'}}>

            </Card>
          </Cell>
          </Grid>
      </div>
    )
  }
}

export default About;
