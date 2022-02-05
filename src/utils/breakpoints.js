export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const bpBelowMedium = `
  @media screen and (max-width: ${breakpoints.md - 1}px)
`;

export const bpAboveSmall = `
  @media screen and (min-width: ${breakpoints.sm}px)
`;

export const bpAboveMedium = `
  @media screen and (min-width: ${breakpoints.md}px)
`;

export const bpAboveLarge = `
  @media screen and (min-width: ${breakpoints.lg}px)
`;
