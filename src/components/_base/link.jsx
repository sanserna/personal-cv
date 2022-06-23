import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';

import Typography from 'app-base-components/typography';

const Link = ({ children, className, to, colorVariant, ...props }) => {
  const internal = /^\/(?!\/)/.test(to);
  const baseClassName = 'text-primary hover:underline';

  if (internal) {
    return (
      <Typography colorVariant={colorVariant}>
        <GatsbyLink
          className={clsx(baseClassName, className)}
          to={to}
          {...props}
        >
          {children}
        </GatsbyLink>
      </Typography>
    );
  }

  return (
    <a
      className={clsx(baseClassName, className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <Typography colorVariant={colorVariant}>{children}</Typography>
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
  colorVariant: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light']),
};

Link.defaultProps = {
  className: '',
  to: '',
  colorVariant: 'dark',
};

export default Link;
