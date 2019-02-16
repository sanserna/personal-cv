import React from 'react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children, theme, style }) => (
  <>
    <div className="container" style={style}>
      {children}
    </div>
    <style jsx>{`
      --container-padding-y: ${theme.space.s};

      .container {
        background: ${theme.color.neutral.gray.b};
        padding: var(--container-padding-y) 0;

        &:nth-child(2) {
          padding-top: calc(var(--container-padding-y) * 2);
        }

        &:last-child {
          padding-bottom: calc(var(--container-padding-y) * 2);
        }

        @above tablet {
          padding: calc(var(--container-padding-y) * 5) 0;

          &:nth-child(2) {
            padding-top: calc(var(--container-padding-y) * 10);
          }

          &:last-child {
            padding-bottom: calc(var(--container-padding-y) * 10);
          }
        }
      }
    `}</style>
  </>
);

SectionContainer.propTypes = {
  theme: PropTypes.object.isRequired,
  style: PropTypes.object
};

SectionContainer.defaultProps = {
  style: {}
};

export default SectionContainer;
