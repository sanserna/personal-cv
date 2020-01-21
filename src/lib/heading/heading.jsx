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
        fontSize: theme.fontSize['4xl'],
        padding: `${theme.spacing[3]} 0`,
        '&::after': {
          content: '""',
          background: theme.colors.primary,
          display: 'inline-block',
          height: '6px',
          marginTop: theme.spacing[1],
          marginLeft: theme.spacing[1],
          width: '45px'
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
