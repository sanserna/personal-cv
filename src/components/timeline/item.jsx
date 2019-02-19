import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ style, stepColor, lapse, title, desc, subtitle }) => (
  <>
    <li className="item">
      <h5 className="item__lapse">{lapse}</h5>
      <div className="item__detail-content">
        <h4 className="item__title">{title}</h4>
        {subtitle && <h5 className="item__subtitle">{subtitle}</h5>}
        {desc && <p className="item__desc">{desc}</p>}
      </div>
    </li>

    <style jsx>{`
      .item {
        position: relative;
        padding-bottom: 50px;
        padding-top: 3px;

        &::before {
          content: ' ';
          position: absolute;
          height: 16px;
          width: 16px;
          background: #fff;
          border-radius: 50%;
          border: solid 1.5px ${stepColor};
          left: -8px;
          top: 2px;
        }

        &:last-of-type {
          padding-bottom: 0;
        }
      }

      .item__lapse,
      .item__title,
      .item__subtitle {
        margin-top: 0;
        margin-bottom: 0;
      }

      .item__detail-content {
        padding-left: 40px;
      }

      .item__lapse {
        flex-shrink: 0;
        flex-basis: 180px;
        padding-left: 40px;
        padding-bottom: 20px;
      }

      .item__title {
        text-transform: uppercase;
      }

      .item__subtitle {
        padding-top: 5px;
      }

      .item__desc {
        color: #706e6b;
      }

      @above mobile {
        .item {
          display: flex;
        }

        .item__lapse {
          padding-right: 40px;
          padding-bottom: 0;
        }

        .item__detail-content {
          padding-left: 0;
        }
      }
    `}</style>
  </>
);

Item.propTypes = {
  style: PropTypes.object,
  stepColor: PropTypes.string.isRequired,
  lapse: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  subtitle: PropTypes.string
};

Item.defaultProps = {
  style: {},
  desc: '',
  subtitle: ''
};

export default Item;
