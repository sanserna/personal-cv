import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';

import { ThemeContext } from 'app-layouts/index';

const BgImgSection = ({ children, background }) => {
  const {
    color: {
      neutral: {
        gray: { a: textColor }
      }
    }
  } = useContext(ThemeContext);

  return (
    <div className="bg-img-section">
      <Container>
        <h2 className="text-content">{children}</h2>
      </Container>

      <style jsx>{`
        .bg-img-section {
          background-image: url(${background});
        }
      `}</style>

      <style jsx>{`
        .bg-img-section {
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;

          @above mobile {
            min-height: 350px;
          }

          @above tablet {
            min-height: 500px;
          }
        }

        .text-content {
          color: ${textColor};
          margin: 0;
          text-align: center;
          text-shadow: 1px 1px 5px #393e41;
          padding: 20px;

          @above mobile {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

BgImgSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  background: PropTypes.string.isRequired
};

export default BgImgSection;
