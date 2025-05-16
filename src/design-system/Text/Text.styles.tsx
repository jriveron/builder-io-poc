import styled from '@emotion/styled';
import {
  type MarginProps,
  margins,
  type TextColorProps,
  textColor,
} from '@/design-system/system/variants';
import {
  isBasicProp,
  isChildrenProp,
  isDataProp,
} from '@/design-system/system/utils';
import {
  montserratTextFamily,
  textVariants,
  textWeights,
} from '@/design-system/system';
import type { TextVariant, TextWeight } from '@/design-system/system';
import { css, Theme } from '@emotion/react';

export const Text = styled('p', {
  shouldForwardProp: (propName) =>
    isChildrenProp(propName) || isDataProp(propName) || isBasicProp(propName),
})<
  {
    variant: TextVariant;
    weight: TextWeight;
  } & MarginProps &
    TextColorProps
>`
  ${montserratTextFamily}
  ${({ theme, color }) =>
    color ? textColor : { color: theme.colors.semanticColorsTextPrimary }}
  ${({ theme, variant }) => textVariants[variant](theme)};
  ${({ theme, weight }) => textWeights[weight](theme)};
  ${margins}
`;

export const textT1Default = (theme: Theme) => css`
  ${montserratTextFamily()};
  ${textVariants.t1(theme)};
  ${textWeights.default(theme)};
`;
