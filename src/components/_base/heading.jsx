import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const Heading = ({ children, className, style, tag: TagName }) => {
  const theme = useTheme();

  return (
    <TagName
      style={style}
      className={className}
      css={{
        color: theme.colors.dark,
        marginBottom: theme.spacing[5],
        '&::after': {
          content: '"_"',
          color: theme.colors.primary,
          fontWeight: theme.fontWeight.bold,
          paddingLeft: theme.spacing[1]
        }
      }}
    >
      {children}
    </TagName>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Heading.defaultProps = {
  className: '',
  style: {},
  tag: 'h1'
};

export default Heading;
