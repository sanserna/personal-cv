import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

/**
 * @deprecated since version 2.0
 */
const Heading = ({ children, className, style, color, tag: TagName }) => {
  const theme = useTheme();

  return (
    <TagName
      style={style}
      className={className}
      css={{
        color: color || theme.colors.dark,
        marginBottom: '0.35em',
      }}
    >
      {children}
    </TagName>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  className: '',
  style: {},
  color: '',
  tag: 'h1',
};

export default Heading;
