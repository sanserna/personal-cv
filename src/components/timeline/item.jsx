import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Typography from 'app-base-components/typography';

const Item = ({ lapse, title, desc, subtitle }) => {
  const bulletClassName = `
    before:content-['']
    before:absolute
    before:h-4
    before:w-4
    before:bg-white
    before:border
    before:rounded-lg
    before:border-primary
    before:-left-2
    before:top-1
  `;

  return (
    <li
      className={clsx(
        'text-dark relative pb-16 pl-10 last:pb-0',
        bulletClassName
      )}
    >
      <Typography variant="body">{lapse}</Typography>
      <Typography className="pt-3" variant="h4" colorVariant="primary">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle" colorVariant="secondary">
          {subtitle}
        </Typography>
      )}
      {desc && <Typography className="pt-3">{desc}</Typography>}
    </li>
  );
};

Item.propTypes = {
  lapse: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  subtitle: PropTypes.string,
};

Item.defaultProps = {
  desc: '',
  subtitle: '',
};

export default Item;
