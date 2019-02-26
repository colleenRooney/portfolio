import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, 
  CardActions, Button } from 'react-mdl';
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
        <div className="projects-container">
          {/* Full Stack */}
          <Card shadow={1} className="code-card">
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >
              Course Visualization
            </CardTitle>
            <CardText>
              Full Stack Final Project
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Code</Button>
            </CardActions>
          </Card>

          {/* ML */}
          <Card shadow={1} className="code-card">
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >
              MRI Lesion Detection
            </CardTitle>
            <CardText>
              Machine Learning Final Project
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Code</Button>
            </CardActions>
          </Card>

          {/* PyGame */}
          <Card shadow={1} className="code-card">
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >
              PyGame
            </CardTitle>
            <CardText>
              Learned PyGame for summer 2018 tutoring.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Code</Button>
            </CardActions>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-container" id="art-container">
          <div className="float-text" id="lone-peak">
            <p>Lone Peak, 2016, Oil on canvas</p>
          </div>
          <div className="float-text" id="olive-farmer">
            <p>Olive Farmer, 2013, Oil on paper</p>
          </div>
          <br/>
          <div className="float-text" id="netter">
            <p>Anatomical studies based on work by Frank Netter MD, 2016, 
              Pen on paper</p>
          </div>
          <div className="float-text" id="louise">
            <p>Louise, 2011,  digitally altered colored pencil</p>
          </div>
        </div>
      )
    }
  }



  render() {
    return(
      <div>
          <div className="banner" id="page">
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
