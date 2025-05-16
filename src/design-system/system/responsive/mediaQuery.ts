import { type BreakpointKey } from './breakpoints';
import { getMediaQuery, responsiveConfig } from './responsiveConfig';

/**
 * Style function targeting everything between the provided breakpoints
 *
 * @example
 * const StyledComp = styled.div`
 *   ${mq.between('sm','lg')} {
 *     color: red;
 *   }
 * `;
 */
const between = (min: BreakpointKey, max: BreakpointKey) => {
  const { minWidth } = responsiveConfig[min];
  const { minWidth: minWidthMax } = responsiveConfig[max];

  const query = getMediaQuery({ minWidth, maxWidth: minWidthMax - 1 });

  return `@media ${query}`;
};

/**
 * Style function targeting everything bigger than the provided breakpoint.
 *
 * @example
 * const StyledComp = styled.div`
 *   ${mq.up('lg')} {
 *     color: red;
 *   }
 * `;
 */
const up = (breakPoint: Exclude<BreakpointKey, 'sm'>) => {
  const { minWidth } = responsiveConfig[breakPoint];
  const query = getMediaQuery({ minWidth });

  return `@media ${query}`;
};

/**
 * Emotion style function everything smaller than the provided breakpoint.
 *
 * @example
 * const StyledComp = styled.div`
 *   ${mq.down('md')} {
 *     color: red;
 *   }
 * `;
 */
const down = (breakPoint: Exclude<BreakpointKey, 'sm'>) => {
  const { minWidth } = responsiveConfig[breakPoint];
  const query = getMediaQuery({ maxWidth: minWidth - 1 });

  return `@media ${query}`;
};

/**
 * Emotion style function targeting the given breakpoint.
 *
 * @example
 * const StyledComp = styled.div`
 *   ${mq.only('sm')} {
 *     color: red;
 *   }
 * `;
 */
const only = (breakPoint: BreakpointKey) => {
  return `@media ${responsiveConfig[breakPoint].query}`;
};

/**
 * Emotion media query utilities to be used in CSS template string
 */
export const mq = {
  between,
  up,
  down,
  only,
};
