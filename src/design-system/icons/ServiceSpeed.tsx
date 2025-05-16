// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ServiceSpeedIconVariant = 'outlined';
type ServiceSpeedProps = IconProps & { variant?: ServiceSpeedIconVariant };

const ServiceSpeedOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 2a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1 8 8 0 0 1-4.124 7A8 8 0 0 1 20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1 8 8 0 0 1 4.124-7A8 8 0 0 1 4 5m8 8a6 6 0 0 0-5.917 5h11.834A6 6 0 0 0 12 13M6.083 6a6.002 6.002 0 0 0 11.834 0zM5 21a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ServiceSpeedOutlinedIcon,
} as const;

const ServiceSpeedSVG: React.FC<ServiceSpeedProps> = ({
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

const ServiceSpeed = styled(ServiceSpeedSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ServiceSpeed;
