import React from 'react';
import PropTypes from 'prop-types';

import { CardContext } from './card';

const Section = ({ children, className, style }) => (
  <CardContext.Consumer>
    {({ sectionBorderColor, sectionWidth, sectionPadding, darkColor }) => (
      <div className={`card-section ${className}`} style={style}>
        <span className="card-section__text">{children}</span>

        <style jsx>{`
          .card-section {
            border: 0.5px solid ${sectionBorderColor};
            width: ${sectionWidth};
            padding: ${sectionPadding};

            .card-section__text {
              color: ${darkColor};
            }
          }
        `}</style>
      </div>
    )}
  </CardContext.Consumer>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Section.defaultProps = {
  className: '',
  style: {}
};

export default Section;
