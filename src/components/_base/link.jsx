import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, className, to, ...props }) => {
  const internal = /^\/(?!\/)/.test(to);
  const baseClassName = 'hover:underline';

  if (internal) {
    return (
      <GatsbyLink className={clsx(baseClassName, className)} to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a
      className={clsx(baseClassName, className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  className: '',
  to: '',
};

export default Link;
