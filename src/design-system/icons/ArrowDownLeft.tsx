// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ArrowDownLeftIconVariant = 'outlined';
type ArrowDownLeftProps = IconProps & { variant?: ArrowDownLeftIconVariant };

const ArrowDownLeftOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.707 5.293a1 1 0 0 1 0 1.414L8.414 18H18.48a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V6.52a1 1 0 0 1 2 0v10.066L18.293 5.293a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ArrowDownLeftOutlinedIcon,
} as const;

const ArrowDownLeftSVG: React.FC<ArrowDownLeftProps> = ({
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

const ArrowDownLeft = styled(ArrowDownLeftSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ArrowDownLeft;
