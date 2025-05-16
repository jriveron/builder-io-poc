import { css, SerializedStyles } from '@emotion/react';
import { BreakpointKey, mq } from '../responsive';

export type BreakpointKeyWithoutSm = Exclude<BreakpointKey, 'sm'>;
export type ResponsiveProp<T> = Partial<Record<BreakpointKey, T>>;

type ResponsiveStyle = <T>(
  styleFn: (prop: T) => SerializedStyles | string,
  prop: ResponsiveProp<T> | T
) => SerializedStyles | string;

const orderedBreakpoints = ['sm', 'md', 'lg', 'xl'] as const;

const sortResponsiveConfig = (keyA: BreakpointKey, keyB: BreakpointKey) => {
  return orderedBreakpoints.indexOf(keyA) - orderedBreakpoints.indexOf(keyB);
};

export function isResponsiveProp<T>(
  obj: ResponsiveProp<T> | T
): obj is ResponsiveProp<T> {
  if (typeof obj === 'object' && obj) {
    const keys = Object.keys(obj);
    return (
      // Check if all keys are valid breakpoints
      keys.length > 0 &&
      keys.every((key) => orderedBreakpoints.includes(key as BreakpointKey))
    );
  }

  return false;
}

/**
 * Return a set of Emotion styles for a given prop
 */
export const createResponsiveStyle: ResponsiveStyle = (styleFn, prop) => {
  if (!isResponsiveProp(prop)) {
    return styleFn(prop);
  }

  // extract SM to avoid having it in the responsive values
  // and creating a media query for it with (min-width: 0)
  const { sm = null, ...responsiveValues } = prop;

  // sort responsive values by breakpoint
  const sortedResponsiveValues = Object.entries(responsiveValues).sort(
    ([keyA], [keyB]) =>
      sortResponsiveConfig(keyA as BreakpointKey, keyB as BreakpointKey)
  );

  const defaultStyle = sm ? styleFn(sm) : '';

  // Create dynamic styles for each breakpoint
  const responsiveStyles = sortedResponsiveValues.map(([key, value]) => {
    return css`
      ${mq.up(key as BreakpointKeyWithoutSm)} {
        ${styleFn(value)}
      }
    `;
  });

  return css([defaultStyle, ...responsiveStyles]);
};
