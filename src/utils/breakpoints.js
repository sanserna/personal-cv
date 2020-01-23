export const breakpoints = {
  small: 576,
  medium: 768,
  large: 1200,
  extraLarge: 992
};

export const bpBelowMedium = `@media screen and (max-width: ${breakpoints.medium -
  1}px)`;

export const bpAboveSmall = `@media screen and (min-width: ${
  breakpoints.small
}px)`;

export const bpAboveMedium = `@media screen and (min-width: ${
  breakpoints.medium
}px)`;

export const bpAboveLarge = `@media screen and (min-width: ${
  breakpoints.large
}px)`;
