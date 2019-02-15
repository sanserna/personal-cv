import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../layouts';

const CardContext = React.createContext({});

const Card = ({ children, style }) => {
  const {
    color: { neutral: neutralColors },
    card: {
      section: {
        padding: { default: sectionPadding }
      }
    }
  } = useContext(ThemeContext);
  const childrenCount = React.Children.count(children);
  const [cardTheme] = useState({
    sectionPadding,
    backgroundColor: neutralColors.white,
    sectionBorderColor: neutralColors.gray.b,
    sectionWidth: `${100 / childrenCount}%`
  });

  return (
    <CardContext.Provider value={cardTheme}>
      <div className="container">
        <div className="card" style={style}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 0 20px;
          margin-left: auto;
          margin-right: auto;

          @above tablet {
            width: 640px;
          }

          @from-width 992px {
            width: 970px;
          }

          @above desktop {
            width: 1200px;
          }
        }

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

Card.Section = ({ children, style }) => (
  <CardContext.Consumer>
    {cardTheme => (
      <>
        <div className="card__section" style={style}>
          {children}
        </div>

        <style jsx>{`
          .card__section {
            border: 1px solid ${cardTheme.sectionBorderColor};
            width: ${cardTheme.sectionWidth};
            padding: ${cardTheme.sectionPadding};
          }
        `}</style>
      </>
    )}
  </CardContext.Consumer>
);

Card.propTypes = {
  style: PropTypes.object
};

Card.defaultProps = {
  style: {}
};

export default Card;
