import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import {
  MarginProps,
  margins,
  textColor,
  TextColorProps,
} from '@/design-system/system/variants';
import { isChildrenProp, isDataProp } from '@/design-system/system/utils';

const headingVariants = {
  h1: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightExtraBold};
    font-size: ${typography.coreTypographyFontSizeHeadingH1};
    line-height: ${typography.coreTypographyLineHeightHeading};
  `,
  h2: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightExtraBold};
    font-size: ${typography.coreTypographyFontSizeHeadingH2};
    line-height: ${typography.coreTypographyLineHeightHeading};
  `,
  h3: ({ typography }: Theme) => css`
    font-weight: ${typography.coreTypographyFontWeightExtraBold};
    font-size: ${typography.coreTypographyFontSizeHeadingH3};
    line-height: ${typography.coreTypographyLineHeightHeading};
  `,
};

export type HeadingVariant = keyof typeof headingVariants;

export const Heading = styled('h2', {
  shouldForwardProp: (propName) =>
    isChildrenProp(propName) || isDataProp(propName),
})<
  {
    variant: HeadingVariant;
  } & MarginProps &
    TextColorProps
>`
  font-family: Montserrat, arial, sans-serif;
  ${({ theme, color }) =>
    color ? textColor : { color: theme.colors.semanticColorsTextPrimary }}
  ${({ theme, variant }) => headingVariants[variant](theme)};
  ${margins}
`;
