import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const Paragraph = ({ children, className, style, lead }) => {
  const theme = useTheme();

  return (
    <p
      style={style}
      className={className}
      css={{
        color: theme.colors.dark,
        fontSize: lead ? theme.fontSize['3xl'] : theme.fontSize.xl,
        fontWeight: lead ? theme.fontWeight.normal : theme.fontWeight.light,
        lineHeight: lead ? theme.lineHeight.normal : theme.lineHeight.relaxed,
        paddingBottom: theme.spacing[5],
      }}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  lead: PropTypes.bool,
};

Paragraph.defaultProps = {
  className: '',
  style: {},
  lead: false,
};

export default Paragraph;
