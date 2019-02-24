import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="add-a-class-colleen">
        <Layout>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
