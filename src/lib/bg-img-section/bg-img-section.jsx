import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container } from 'react-grid-system';

import { ThemeContext } from '../../layouts';

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
      <Img fluid={background} className="bg-image-container" />
      <div className="text-wrapper">
        <Container>
          <h2 className="text-content">{children}</h2>
        </Container>
      </div>

      <style jsx>{`
        .bg-img-section :global(.bg-image-container) {
          left: 0;
          top: calc(50% - ${background.presentationHeight / 2}px);
        }
      `}</style>

      <style jsx>{`
        .bg-img-section {
          position: relative;
          max-height: 350px;
          overflow: hidden;

          @above mobile {
            max-height: 450px;
          }

          @above tablet {
            max-height: 500px;
          }
        }

        .text-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;

          @from-width tablet {
            padding: 0 100px;
          }

          @from-width desktop {
            padding: 0 150px;
          }
        }

        .text-content {
          color: ${textColor};
          margin: 0;
          text-align: center;
          text-shadow: 1px 1px 5px #393e41;
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
  background: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
    presentationHeight: PropTypes.number
  }).isRequired
};

export default BgImgSection;
