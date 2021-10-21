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

  let years = momentTo.diff(momentFrom, 'year');
  momentFrom.add(years, 'years');

  let months = momentTo.diff(momentFrom, 'months');
  momentFrom.add(months, 'months');

  const days = momentTo.diff(momentFrom, 'days');

  if (days >= 15) {
    months++;

    if (months >= 12) {
      months = 0;
      years++;
    }
  }

  let formattedTo;
  let difference = '';

  if (years) {
    difference += `${years} año${years <= 1 ? '' : 's'}`;
  }

  if (months) {
    const monthsTxt = `${months} mes${months <= 1 ? '' : 'es'}`;
    difference += years ? `, ${monthsTxt}` : monthsTxt;
  }

  if (to) {
    formattedTo = momentTo.format(outputFormat);
  } else {
    formattedTo = 'actualidad';
  }

  return `${formattedFrom} -> ${formattedTo}`.concat(
    difference ? ` - ${difference}` : ''
  );
};
