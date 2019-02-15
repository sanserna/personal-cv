import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardContext = React.createContext({});

const Card = ({ theme, children, style }) => {
  const childrenCount = React.Children.count(children);
  const [cardTheme, setCardTheme] = useState({
    backgroundColor: theme.color.neutral.white,
    sectionBorderColor: theme.color.neutral.gray.b,
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
          background-color: ${theme.color.neutral.white};
          border-collapse: collapse;
          border: 1px solid ${theme.color.neutral.gray.a};
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
        <div className="section" style={style}>
          {children}
        </div>

        <style jsx>{`
          .section {
            border: 1px solid ${cardTheme.sectionBorderColor};
            width: ${cardTheme.sectionWidth};
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
