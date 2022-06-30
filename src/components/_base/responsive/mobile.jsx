import PropTypes from 'prop-types';

import useMobileMediaQuery from 'app-hooks/use-mobile-media-query';

const Mobile = ({ children }) => {
  const isMobile = useMobileMediaQuery();

  return isMobile ? children : null;
};

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mobile;
