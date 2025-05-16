import { css, Theme } from '@emotion/react';

/**
 * Style function that allows you to apply Montserrat fontFamily and fallbacks
 *
 * /!\ Try as often as possible to use Typography components
 */
export const montserratTextFamily = () => ({
  fontFamily: 'var(--core-typography-font-family-product)',
});

/**
 * Style functions mapped on variants t1, t2, t3 that apply sizing font styles.
 *
 * /!\ Try as often as possible to use Text component
 */
export const textVariants = {
  t1: ({ typography }: Theme) => css`
    font-size: ${typography.coreTypographyFontSizeTextT1};
    line-height: ${typography.coreTypographyLineHeightText};
  `,
  t2: ({ typography }: Theme) => css`
    font-size: ${typography.coreTypographyFontSizeTextT2};
    line-height: ${typography.coreTypographyLineHeightText};
  `,
  t3: ({ typography }: Theme) => css`
    font-size: ${typography.coreTypographyFontSizeTextT3};
    line-height: ${typography.coreTypographyLineHeightText};
  `,
};

export type TextVariant = keyof typeof textVariants;

/**
 * Style functions mapped on variants `light`, `default`, `medium` and `bold` that apply font weight style.
 *
 * /!\ Try as often as possible to use Text component
 */
export const textWeights = {
  light: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightLight};
  `,
  default: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightDefault};
  `,
  medium: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightMedium};
  `,
  bold: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightBold};
  `,
};

export type TextWeight = keyof typeof textWeights;
