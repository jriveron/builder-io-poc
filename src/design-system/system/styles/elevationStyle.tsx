import { css, Theme } from '@emotion/react';
import { px2rem } from '@/design-system/system/utils';

export const elevationHighlight = ({
  theme: { colors },
}: {
  theme: Theme;
}) => css`
  box-shadow: 0 ${px2rem(8)} ${px2rem(24)} ${px2rem(-4)}
      ${colors.semanticColorsShadowsHighlightKeyLight},
    0 ${px2rem(4)} ${px2rem(8)} 0
      ${colors.semanticColorsShadowsHighlightAmbientLight};
`;

export const elevationFloating = ({
  theme: { colors },
}: {
  theme: Theme;
}) => css`
  box-shadow: 0 ${px2rem(4)} ${px2rem(4)} 0
      ${colors.semanticColorsShadowsFloatingKeyLight},
    0 ${px2rem(6)} ${px2rem(24)} 0
      ${colors.semanticColorsShadowsFloatingAmbientLight};
`;

export const elevationModal = ({ theme: { colors } }: { theme: Theme }) => css`
  box-shadow: 0 ${px2rem(4)} ${px2rem(16)} 0
      ${colors.semanticColorsShadowsModalKeyLight},
    0 ${px2rem(12)} ${px2rem(48)} 0
      ${colors.semanticColorsShadowsModalAmbientLight};
`;
