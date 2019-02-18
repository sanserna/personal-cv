import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../layouts';

const SectionContainer = ({ children, style }) => {
  const {
    color: {
      neutral: {
        gray: { b: backgroundColor }
      }
    },
    space: { s: paddingY }
  } = useContext(ThemeContext);

  return (
    <div className="container" style={style}>
      <>{children}</>

      <style jsx>{`
        --container-padding-y: ${paddingY};

        .container {
          background: ${backgroundColor};
          padding: var(--container-padding-y) 0;

          &:first-of-type {
            padding-top: calc(var(--container-padding-y) * 2);
          }

          &:last-of-type {
            padding-bottom: calc(var(--container-padding-y) * 2);
          }

          @above tablet {
            padding: calc(var(--container-padding-y) * 5) 0;

            &:first-of-type {
              padding-top: calc(var(--container-padding-y) * 10);
            }

            &:last-of-type {
              padding-bottom: calc(var(--container-padding-y) * 10);
            }
          }
        }
      `}</style>
    </div>
  );
};

SectionContainer.propTypes = {
  style: PropTypes.object
};

SectionContainer.defaultProps = {
  style: {}
};

export default SectionContainer;
