import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';

class About extends Component {
  render() {
    return(
      <div>
        <div className="banner-text">
          <Navbar></Navbar>
        </div>
        <SocialLinks></SocialLinks>
        <div className="about-grid">
        <Grid>
          <Cell col={4}>
          <Card shadow={1} style={{width: '512px', 
          height: '512px', 
          margin: 'auto', 
          background: 'url(https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13880197_10209880495519722_5716428322345645940_n.jpg?_nc_cat=111&_nc_ht=scontent-sea1-1.xx&oh=1fc789084a3bc358c6c8b2e683ebb4bc&oe=5D26A989)', 
          backgroundPosition: 'center'}}>
            <CardTitle expand />
          </Card>
          </Cell>
          <Cell col={4}>
          <Card shadow={1} style={{width: '1000', margin: 'auto'}}>
            <CardText>
              Machine Learning Final Project
            </CardText>
          </Card>
          </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}

export default About;
