import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Container = ({ children, style, className, fluid }) => (
  <div
    style={style}
    className={clsx(
      'container box-border relative mx-auto px-4',
      {
        'max-w-5xl': !fluid,
      },
      className
    )}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  style: {},
  className: '',
  fluid: false,
};

export default Container;
