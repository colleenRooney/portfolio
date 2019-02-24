import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './views/landingpage';
import About from './views/about';
import Work from './views/work';
import Resume from './views/resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
