import { px2em } from '@/design-system/system/utils';
import {
  BREAKPOINTS,
  type BreakpointKey,
  type BreakpointValue,
} from './breakpoints';

export type ResponsiveConfig = Record<
  BreakpointKey,
  { minWidth: BreakpointValue; maxWidth: number | null; query: string }
>;

export const getMediaQuery = ({
  minWidth,
  maxWidth,
}: {
  minWidth?: number | null;
  maxWidth?: number | null;
}) => {
  const min = minWidth && minWidth > 0 ? `(min-width: ${px2em(minWidth)})` : '';
  const max = maxWidth ? `(max-width: ${px2em(maxWidth)})` : '';

  return min && max ? `${min} and ${max}` : `${min}${max}`;
};

const getResponsiveConfig = (): ResponsiveConfig => {
  const breakpointPairs = Object.entries(BREAKPOINTS) as [
    BreakpointKey,
    BreakpointValue
  ][];

  return breakpointPairs.reduce((acc, [key, value], index) => {
    const [, nextValue = null] = breakpointPairs[index + 1] ?? [];

    const minWidth = value;
    const maxWidth = nextValue ? nextValue - 1 : nextValue;

    acc[key] = {
      minWidth,
      maxWidth,
      query: getMediaQuery({ minWidth, maxWidth }),
    };

    return acc;
  }, {} as ResponsiveConfig);
};

export const responsiveConfig = getResponsiveConfig();
