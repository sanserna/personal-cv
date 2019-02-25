import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-grid-system';

import { ThemeContext } from '../../layouts';

const PlainCard = ({ style, title, text, link, background }) => {
  const {
    color: {
      special: { link: linkColor }
    }
  } = useContext(ThemeContext);

  return (
    <Container fluid>
      <div className="plain-card">
        <Row align="center" nogutter>
          <Col xs={12} lg={6} xl={5}>
            <Img
              fluid={background}
              className="plain-card__img"
              imgStyle={{ margin: 0 }}
            />
          </Col>

          <Col xs={12} lg={6} xl={7}>
            <div className="plain-card__body">
              <h3 className="plain-card__title">{title}</h3>
              <p className="plain-card__text">{text}</p>
              {link && (
                <div style={{ paddingTop: 5 }}>
                  <Link to={link} className="plain-card__link">
                    Continuar leyendo
                  </Link>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .plain-card {
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;

          .plain-card__body {
            padding: 1rem;
          }

          :global(.plain-card__img) {
            border-top-left-radius: calc(0.25rem - 1px);
            border-top-right-radius: calc(0.25rem - 1px);

            @above tablet {
              border-top-left-radius: calc(0.25rem - 1px);
              border-top-right-radius: 0;
              border-bottom-left-radius: calc(0.25rem - 1px);
            }
          }

          .plain-card__title {
            margin-top: 0;
            margin-bottom: 0.75rem;
          }

          .plain-card__text {
            margin-bottom: 0;
          }
        }
      `}</style>

      <style jsx>{`
        .plain-card {
          :global(.plain-card__link) {
            color: ${linkColor};
            text-decoration: none;
            text-shadow: none;
            background-image: none;
            background-color: transparent;
          }
        }
      `}</style>
    </Container>
  );
};

PlainCard.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  background: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  }).isRequired
};

PlainCard.defaultProps = {
  style: {},
  link: ''
};

export default PlainCard;
