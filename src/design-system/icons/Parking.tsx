// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ParkingIconVariant = 'outlined';
type ParkingProps = IconProps & { variant?: ParkingIconVariant };

const ParkingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m.857 8.5c.394 0 .655.02.833.125a.44.44 0 0 1 .178.202c.061.124.132.358.132.773s-.071.65-.132.773a.44.44 0 0 1-.178.203c-.178.104-.439.124-.833.124H11V9.5zm0 4.2H11v1.8a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1h2.899c.345 0 1.118-.003 1.804.4C15.534 8.39 16 9.298 16 10.6s-.466 2.211-1.297 2.7c-.686.403-1.459.4-1.804.4z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ParkingOutlinedIcon,
} as const;

const ParkingSVG: React.FC<ParkingProps> = ({
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

const Parking = styled(ParkingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Parking;
