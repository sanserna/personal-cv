import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ style, stepColor, lapse, title, desc }) => (
  <>
    <li className="item">
      <h5 className="item__lapse">{lapse}</h5>
      <div className="item__detail-content">
        <h4 className="item__title">{title}</h4>
        <p className="item__desc">{desc}</p>
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
          border: solid 1px ${stepColor};
          left: -8px;
          top: 2px;
        }

        &:last-of-type {
          padding-bottom: 0;
        }
      }

      .item__lapse,
      .item__title {
        margin-top: 0;
        margin-bottom: 0;
      }

      .item__detail-content {
        padding-left: 40px;
      }

      .item__lapse {
        flex-shrink: 0;
        padding-left: 40px;
        padding-bottom: 20px;
      }

      .item__title {
        text-transform: uppercase;
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
  desc: PropTypes.string.isRequired
};

Item.defaultProps = {
  style: {}
};

export default Item;
