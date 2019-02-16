import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { author } from '../../../content/meta/config';

const ShortBio = ({ avatar }) => (
  <div>
    <Img fixed={avatar} className="image-container" />
    <p className="resume-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt
      provident tempore, magni omnis facilis accusamus laborum illum, molestiae
      ratione labore debitis architecto commodi delectus corrupti saepe quae vel
      porro!
    </p>

    <style jsx>{`
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
  avatar: PropTypes.object.isRequired
};

ShortBio.defaultProps = {};

export default ShortBio;
