import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PlainCard = ({ style, title, text, background }) => {
  return (
    <div className="post-item">
      <Img fluid={background} className="post-item__img-top" />

      <div className="post-item__body">
        <h3 className="post-item__title">{title}</h3>
        <p className="post-item__text">{text}</p>
      </div>

      <style jsx>{`
        .post-item {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;

          .post-item__body {
            flex: 1 1 auto;
            padding: 1rem;
          }

          :global(.post-item__img-top) {
            border-top-left-radius: calc(0.25rem - 1px);
            border-top-right-radius: calc(0.25rem - 1px);
            margin-bottom: 0;
            width: 100%;
          }

          .post-item__title {
            margin-top: 0;
            margin-bottom: 0.75rem;
          }

          .post-item__text {
            position: relative;
            margin-bottom: 1rem;
            line-height: 1.4em;
            height: 4.2rem;
            overflow: hidden;

            &:after {
              content: '';
              text-align: right;
              position: absolute;
              bottom: 0;
              right: 0;
              width: 70%;
              height: 1.2em;
              background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 1) 50%
              );
            }
          }
        }
      `}</style>
    </div>
  );
};

PlainCard.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  }).isRequired
};

PlainCard.defaultProps = {
  style: {}
};

export default PlainCard;
