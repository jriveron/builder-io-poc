import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Content } from '@radix-ui/react-tooltip';

import { px2rem } from '@/design-system/system/utils';

const tooltipAnimation = ({ theme }: { theme: Theme }) => css`
  transform-origin: var(--radix-tooltip-content-transform-origin);
  animation: tooltip ${theme.timing.coreMotionDurationMedium}ms
    cubic-bezier(0.47, 0, 0.23, 1.38) forwards;

  @keyframes tooltip {
    from {
      opacity: 0;
      transform: scale(0.2);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const TooltipContent = styled(Content)`
  background-color: ${({ theme }) =>
    theme.colors.semanticColorsTextPrimaryInverse};
  padding-inline: ${({ theme }) => theme.space.coreSpacing05};
  padding-block: ${({ theme }) => theme.space.coreSpacing03};
  border-radius: ${({ theme }) => theme.radii.coreRadiusS};
  color: ${({ theme }) => theme.colors.semanticColorsTextPrimaryInverse};
  max-width: ${px2rem(200)};
  max-height: var(--radix-tooltip-content-available-height);

  ${tooltipAnimation}
`;
