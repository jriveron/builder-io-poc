// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ArrowUpRightIconVariant = 'outlined';
type ArrowUpRightProps = IconProps & { variant?: ArrowUpRightIconVariant };

const ArrowUpRightOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.52 6a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v12.48a1 1 0 1 1-2 0V8.414L6.707 19.707a1 1 0 0 1-1.414-1.414L16.586 7H6.52a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ArrowUpRightOutlinedIcon,
} as const;

const ArrowUpRightSVG: React.FC<ArrowUpRightProps> = ({
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

const ArrowUpRight = styled(ArrowUpRightSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ArrowUpRight;
