import React from 'react';
import PropTypes from 'prop-types';

import { CardContext } from './card';

const Title = ({ children, className, style }) => (
  <CardContext.Consumer>
    {({ darkColor }) => (
      <>
        <h3 className="card-title">{children}</h3>

        <style jsx>{`
          .card-title {
            color: ${darkColor};
            margin: 0;
            text-transform: uppercase;
            padding-bottom: 30px;

            &::after {
              content: '';
              background: ${darkColor};
              border-radius: 15px 0 30px 15px;
              display: block;
              height: 10px;
              margin-top: 30px;
              width: 40px;
            }
          }
        `}</style>
      </>
    )}
  </CardContext.Consumer>
);

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Title.defaultProps = {
  className: '',
  style: {}
};

export default Title;
