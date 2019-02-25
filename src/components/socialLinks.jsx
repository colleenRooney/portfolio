import React from 'react';

class SocialLinks extends React.Component {

    render() {
        return (
          <div className="social-links">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/colleen-rooney-524ba4113/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="https://github.com/colleenRooney" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>

            {/* Twitter */}
            <a href="https://img.itch.zone/aW1hZ2UvMTUzMzQwLzcwMjU1OC5wbmc=/original/FkET0M.png" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </div>
        );
    }
}

export default SocialLinks;

