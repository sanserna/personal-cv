import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const linkStyles = theme => ({
  lineHeight: theme.lineHeight.none,
  color: theme.colors.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Link = ({ children, className, to, ...props }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink className={className} to={to} css={linkStyles} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a
      className={className}
      css={linkStyles}
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
