// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type WalletIconVariant = 'outlined';
type WalletProps = IconProps & { variant?: WalletIconVariant };

const WalletOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M16.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M17 5.603a1 1 0 0 0-1.258-.966l-11 2.933A1 1 0 0 0 4 8.537V9H2v-.463a3 3 0 0 1 2.227-2.9l11-2.932A3 3 0 0 1 19 5.603V7h-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: WalletOutlinedIcon,
} as const;

const WalletSVG: React.FC<WalletProps> = ({
  title,
  variant = 'outlined',
  ...props
}) => {
  const IconComponent = IconVariants[variant];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent {...props}>{title && <title>{title}</title>}</IconComponent>
  );
};

const Wallet = styled(WalletSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Wallet;
