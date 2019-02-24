/* eslint import/prefer-default-export: "off" */
import moment from 'moment';

export const formatLapseDate = config => {
  if (typeof config === 'string') {
    return config;
  }

  const { from, to } = config;
  const inputFormat = 'MM/DD/YYYY';
  const outputFormat = 'MMM YYYY';
  const momentFrom = moment(from, inputFormat);
  const momentTo = to ? moment(to, inputFormat) : moment();
  const formattedFrom = momentFrom.format(outputFormat);
  const difference = momentTo.from(momentFrom, true);

  let formattedTo;

  if (to) {
    formattedTo = momentTo.format(outputFormat);
  } else {
    formattedTo = 'actualidad';
  }

  return `${formattedFrom} -> ${formattedTo}`.concat(
    difference ? ` - ${difference}` : ''
  );
};
