import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ShortBio = ({ avatar, bioTxt }) => (
  <div>
    <Img fixed={avatar} className="image-container" />
    <p className="resume-text">{bioTxt}</p>

    <style jsx>{`
      div :global(.image-container) {
        width: 100% !important;
      }

      div :global(.image-container) {
        width: 100% !important;
      }

      .resume-text {
        padding: 20px;
        margin: 0;

        @above tablet {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
    `}</style>
  </div>
);

ShortBio.propTypes = {
  bioTxt: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired
};

ShortBio.defaultProps = {};

export default ShortBio;
