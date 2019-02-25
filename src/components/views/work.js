import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Navbar from '../navBar';
import SocialLinks from '../socialLinks';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Full Stack */}
          <Card shadow={1} style={{width: '512px', margin: '10px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >
              Course Visualization
            </CardTitle>
            <CardText>
              Full Stack Final Project
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>

          {/* ML */}
          <Card shadow={1} style={{width: '512px', margin: '10px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >
              MRI Lesion Detection
            </CardTitle>
            <CardText>
              Machine Learning Final Project
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
          <Card shadow={1} style={{width: '512px', margin: '10px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >
            </CardTitle>
            <CardText>
              Title, Medium, Year
            </CardText>
          </Card>
      )
    }
  }



  render() {
    return(
      <div>
          <div className="banner-text">
            <Navbar></Navbar>
          </div>
          <SocialLinks></SocialLinks>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Code</Tab>
          <Tab>Art</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
