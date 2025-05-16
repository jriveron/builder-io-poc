import styled from '@emotion/styled';
import { css, keyframes, Theme } from '@emotion/react';

import {
  MarginProps,
  margins,
  paddings,
} from '@/design-system/system/variants';
import React from 'react';

const shimmer = keyframes`
  to {
    background-position-x: 0%;
  }
`;

const linearGradient =
  (variant: 'default' | 'on') =>
  ({ theme: { colors } }: { theme: Theme }) =>
    variant === 'on'
      ? css`linear-gradient(-45deg, ${colors.semanticColorsSkeletonSkeletonEnd} 40%, ${colors.semanticColorsSkeletonSkeletonStart} 50%, ${colors.semanticColorsSkeletonSkeletonEnd} 60%);`
      : css`linear-gradient(-45deg, ${colors.semanticColorsSkeletonOnSkeletonEnd} 40%, ${colors.semanticColorsSkeletonOnSkeletonStart} 50%, ${colors.semanticColorsSkeletonOnSkeletonEnd} 60%);`;

export const Skeleton = styled('div', {
  shouldForwardProp: (propName) => !['height', 'variant'].includes(propName),
})<
  {
    flex?: string;
    height: string;
    width?: string;
    variant: 'default' | 'on';
  } & MarginProps
>`
  display: block;
  height: ${({ height }) => height};
  width: ${({ width = 'auto' }) => width};
  background: ${({ variant }) => linearGradient(variant)};
  background-size: 300%;
  background-position-x: 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
  @media (prefers-reduced-motion) {
    animation: ${shimmer} 7s infinite linear;
  }
  border-radius: ${({ theme }) => theme.radii.coreRadiusS};
  flex: ${({ flex }) => flex || '1'};
  ${margins}
  ${paddings}
`;

export const Nbsp = () => <>&nbsp;</>;
