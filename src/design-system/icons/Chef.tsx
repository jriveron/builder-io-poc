// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ChefIconVariant = 'outlined';
type ChefProps = IconProps & { variant?: ChefIconVariant };

const ChefOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 6a3.5 3.5 0 0 0-1.167 6.801 1 1 0 0 1-.666 1.886A5.502 5.502 0 0 1 7.5 4a1 1 0 0 1 0 2M15.5 5a1 1 0 0 1 1-1 5.5 5.5 0 0 1 1.833 10.687 1 1 0 1 1-.666-1.886A3.502 3.502 0 0 0 16.5 6a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 12.74a1 1 0 0 1 1 1V16h10v-2.26a1 1 0 1 1 2 0V19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5.26a1 1 0 0 1 1-1M17 18H7v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM12 4a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 1-2 0 5.5 5.5 0 1 1 11 0 1 1 0 1 1-2 0A3.5 3.5 0 0 0 12 4"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ChefOutlinedIcon,
} as const;

const ChefSVG: React.FC<ChefProps> = ({
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

const Chef = styled(ChefSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Chef;
