import { css, Theme } from '@emotion/react';
import { px2rem } from '@/design-system/system/utils';

export const hideBrowserFocusRing = () => css`
  outline-style: solid;
  outline-color: transparent;
`;

export const focusRingDefault = ({
  theme: { colors },
}: {
  theme: Theme;
}) => css`
  ${hideBrowserFocusRing()}
  box-shadow: 0 0 0 ${px2rem(2)} ${colors.semanticColorsTextPrimaryInverse},
    0 0 0 ${px2rem(4)} ${colors.semanticColorsTextPrimary};
`;

export const focusRingInner = ({ theme: { colors } }: { theme: Theme }) => css`
  ${hideBrowserFocusRing()}
  box-shadow: inset 0 0 0 ${px2rem(
    2
  )} ${colors.semanticColorsTextPrimaryInverse},
    inset 0 0 0 ${px2rem(4)} ${colors.semanticColorsTextPrimary};
`;
