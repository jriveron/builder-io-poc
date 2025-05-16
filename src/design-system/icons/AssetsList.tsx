// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AssetsListIconVariant = 'outlined';
type AssetsListProps = IconProps & { variant?: AssetsListIconVariant };

const AssetsListOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.347 3.927a1 1 0 0 1 1.159-.811l11.817 2.083a1 1 0 0 1 .811 1.159l-2.43 13.787a1 1 0 0 1-1.16.811L4.728 18.873a1 1 0 0 1-.81-1.159zm1.506-2.781A3 3 0 0 0 4.378 3.58L1.946 17.367a3 3 0 0 0 2.434 3.475l11.818 2.084a3 3 0 0 0 3.475-2.433l2.431-13.788a3 3 0 0 0-2.433-3.475zm1.276 4.287a1 1 0 1 0-.347 1.97l7.879 1.388a1 1 0 0 0 .347-1.97zm-1.853 4.75a1 1 0 0 1 1.158-.811l7.879 1.389a1 1 0 0 1-.348 1.97l-7.878-1.39a1 1 0 0 1-.811-1.158m.463 3.128a1 1 0 0 0-.348 1.97l4.925.868a1 1 0 1 0 .347-1.97z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AssetsListOutlinedIcon,
} as const;

const AssetsListSVG: React.FC<AssetsListProps> = ({
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

const AssetsList = styled(AssetsListSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AssetsList;
