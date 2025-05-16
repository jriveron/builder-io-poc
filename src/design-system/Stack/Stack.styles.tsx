import { Theme, WithTheme } from '@emotion/react';
import {
  createResponsiveStyle,
  ResponsiveProp,
} from '@/design-system/system/variants';
import { Alignment, StackProps } from './Stack.types';

type ResponsiveAlignment = ResponsiveProp<Alignment> | Alignment;
type SpacingTokenKey = keyof Theme['space'];

export const contentJustify = (justify: ResponsiveAlignment) => {
  return createResponsiveStyle(
    (justifyContent) => `justify-content: ${justifyContent};`,
    justify
  );
};

export const contentAlign = (align: ResponsiveAlignment) => {
  return createResponsiveStyle(
    (alignItems) => `align-items: ${alignItems};`,
    align
  );
};

export const contentGap = ({
  gap,
  theme: { space },
}: WithTheme<StackProps, Theme>) => {
  if (!gap) return '';

  return createResponsiveStyle(
    (gap: SpacingTokenKey) => `gap: ${space[gap]};`,
    gap
  );
};
