import React from 'react';
import PropTypes from 'prop-types';

import sectionContainerStyles from './section-container.module.scss';

const SectionContainer = ({ children, style }) => (
  <div className={sectionContainerStyles.container} style={style}>
    {children}
  </div>
);

SectionContainer.propTypes = {
  style: PropTypes.object
};

SectionContainer.defaultProps = {
  style: {}
};

export default SectionContainer;
