import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';

class SocialLinks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className="social-links">
            {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>

            {/* Twitter */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </div>
        );
    }
}

export default SocialLinks;

