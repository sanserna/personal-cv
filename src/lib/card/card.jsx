import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../layouts';

const CardContext = React.createContext({});

const Card = ({ children, className, style }) => {
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
    sectionWidth: `${100 / childrenCount}%`,
    cardTitleColor: neutralColors.gray.i
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

Card.Section = ({ children, className, style }) => (
  <CardContext.Consumer>
    {cardTheme => (
      <div className={`card__section ${className}`} style={style}>
        <span>{children}</span>

        <style jsx>{`
          .card__section {
            border: 0.5px solid ${cardTheme.sectionBorderColor};
            width: ${cardTheme.sectionWidth};
            padding: ${cardTheme.sectionPadding};
          }
        `}</style>
      </div>
    )}
  </CardContext.Consumer>
);

Card.Section.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

Card.Section.defaultProps = {
  className: '',
  style: {}
};

Card.Title = ({ children, className, style }) => (
  <CardContext.Consumer>
    {cardTheme => (
      <>
        <h3 className="card-title">{children}</h3>

        <style jsx>{`
          .card-title {
            margin: 0;
            text-transform: uppercase;
            padding-bottom: 30px;

            &::after {
              content: '';
              background: ${cardTheme.cardTitleColor};
              border-radius: 15px 0 30px 15px;
              display: block;
              height: 10px;
              margin-top: 30px;
              width: 40px;
            }
          }
        `}</style>
      </>
    )}
  </CardContext.Consumer>
);

Card.Title.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

Card.Title.defaultProps = {
  className: '',
  style: {}
};

export default Card;
