// * Warning: To handle responsiveness you should use the utily functions
// * Breakpoints are for internal use only and can change,
// * this object is not supposed to be part of the public API
export const BREAKPOINTS = {
  sm: 0,
  md: 600,
  lg: 840,
  xl: 1024,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type BreakpointValue = (typeof BREAKPOINTS)[BreakpointKey];
