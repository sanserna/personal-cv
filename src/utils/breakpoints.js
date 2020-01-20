export const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '1200px',
  extraLarge: '992px'
};

export const bpBelowMedium = `@media screen and (max-width: ${breakpoints.medium -
  1})`;

export const bpAboveSmall = `@media screen and (min-width: ${
  breakpoints.small
})`;

export const bpAboveMedium = `@media screen and (min-width: ${
  breakpoints.medium
})`;

export const bpAboveLarge = `@media screen and (min-width: ${
  breakpoints.large
})`;
