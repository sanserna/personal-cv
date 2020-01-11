import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'app-layouts/index';

const Badge = ({ style, color, text, textColor }) => {
  const {
    color: {
      neutral: { white },
      scheme: { primary }
    }
  } = useContext(ThemeContext);

  return (
    <>
      <span className="badge" style={style}>
        {text}
      </span>

      <style jsx>{`
        .badge {
          display: inline-block;
          padding: 0.25em 0.4em;
          font-size: 75%;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: 0.25rem;
          text-transform: capitalize;

          &:not(:last-of-type) {
            margin-right: 5px;
          }
        }
      `}</style>

      <style jsx>{`
        .badge {
          color: ${textColor || white};
          background-color: ${color || primary};
        }
      `}</style>
    </>
  );
};

Badge.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string
};

Badge.defaultProps = {
  style: {},
  color: '',
  textColor: ''
};

export default Badge;
