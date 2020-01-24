import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'app-layouts/index';
import Section from './card-section';
import Title from './card-title';

export const CardContext = React.createContext({});

const Card = ({ children, className, style }) => {
  const {
    color: {
      neutral: neutralColors,
      scheme: { dark: darkColor }
    },
    card: {
      section: {
        padding: { default: sectionPadding }
      }
    }
  } = useContext(ThemeContext);
  const childrenCount = React.Children.count(children);
  const [cardTheme] = useState({
    sectionPadding,
    darkColor,
    backgroundColor: neutralColors.white,
    sectionBorderColor: neutralColors.gray.b,
    sectionWidth: `${100 / childrenCount}%`
  });

  return (
    <CardContext.Provider value={cardTheme}>
      <div className={`card ${className}`} style={style}>
        {children}
      </div>

      <style jsx>{`
        .card {
          display: flex;
          flex-wrap: wrap;
          background-color: ${neutralColors.white};
          border-collapse: collapse;
          border: 1px solid ${neutralColors.gray.a};
          box-shadow: 0.1rem 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </CardContext.Provider>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Card.defaultProps = {
  className: '',
  style: {}
};

// Setup card compound components items
Card.Section = Section;
Card.Title = Title;

export default Card;
