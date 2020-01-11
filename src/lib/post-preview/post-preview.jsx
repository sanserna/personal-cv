import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-grid-system';

import { ThemeContext } from 'app-layouts/index';
import Badge from '../badge';

const PostPreview = ({
  style,
  className,
  title,
  text,
  link,
  img,
  categories
}) => {
  const {
    color: {
      special: { link: linkColor }
    }
  } = useContext(ThemeContext);

  return (
    <>
      <div className={`post-preview ${className}`} style={style}>
        <Row align="center" nogutter>
          <Col xs={12} lg={6} xl={5}>
            <Img
              fluid={img}
              className="post-preview__img"
              imgStyle={{ margin: 0 }}
            />
          </Col>

          <Col xs={12} lg={6} xl={7}>
            <div className="post-preview__body">
              <h3 className="post-preview__title">{title}</h3>
              {categories.length > 0 && (
                <div className="categories">
                  {categories.map((category, index) => (
                    /* eslint-disable react/no-array-index-key */
                    <Badge key={index} text={category} />
                    /* eslint-enable react/no-array-index-key */
                  ))}
                </div>
              )}
              <p className="post-preview__text">{text}</p>
              {link && (
                <div style={{ paddingTop: 5 }}>
                  <Link to={link} className="post-preview__link">
                    Continuar leyendo
                  </Link>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .post-preview {
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;

          .post-preview__body {
            padding: 1rem;
          }

          :global(.post-preview__img) {
            border-top-left-radius: calc(0.25rem - 1px);
            border-top-right-radius: calc(0.25rem - 1px);

            @above tablet {
              border-top-left-radius: calc(0.25rem - 1px);
              border-top-right-radius: 0;
              border-bottom-left-radius: calc(0.25rem - 1px);
            }
          }

          .post-preview__title {
            margin-top: 0;
            margin-bottom: 0.75rem;
          }

          .post-preview__text {
            margin-bottom: 0;
          }

          .categories {
            margin-bottom: 0.2rem;
          }
        }
      `}</style>

      <style jsx>{`
        .post-preview {
          :global(.post-preview__link) {
            color: ${linkColor};
            text-decoration: none;
            text-shadow: none;
            background-image: none;
            background-color: transparent;
          }
        }
      `}</style>
    </>
  );
};

PostPreview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  }).isRequired
};

PostPreview.defaultProps = {
  style: {},
  className: '',
  link: '',
  categories: []
};

export default PostPreview;
