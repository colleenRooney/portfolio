import React, { Component } from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
}

render() {
  return (
    <div className="nav-bar">
      <h1><a href="/">Colleen Rooney</a></h1>
      <ul>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/resume">Resume</a>
      </ul>
    </div>
    );
  }
}

export default Navbar;

