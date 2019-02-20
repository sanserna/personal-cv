import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, backgroundColor, color }) => (
  <>
    <div className="progress">
      <span className="progress__value">{value}%</span>
      <div className="progress__bar" />
    </div>

    <style jsx>{`
      .progress {
        display: flex;
        height: 0.8rem;
        font-size: 0.75rem;
        background-color: ${backgroundColor};
        position: relative;

        &,
        .progress__bar {
          border-radius: 25px 0 50px 25px;
        }

        .progress__value {
          position: absolute;
          font-size: 1.3em;
          top: -1.5rem;
          left: ${value - 3}%;
          font-style: italic;
          font-weight: bold;
        }

        .progress__bar {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          text-align: center;
          white-space: nowrap;
          background-color: ${color};
          transition: width 0.6s ease;
          width: ${value}%;
        }
      }
    `}</style>
  </>
);

ProgressBar.propTypes = {
  value: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

ProgressBar.defaultProps = {
  value: 0,
  backgroundColor: '#f3f2f2',
  color: '#706e6b'
};

export default ProgressBar;
