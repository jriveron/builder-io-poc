// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ArrowDownRightIconVariant = 'outlined';
type ArrowDownRightProps = IconProps & { variant?: ArrowDownRightIconVariant };

const ArrowDownRightOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.52 19a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1V6.52a1 1 0 1 0-2 0v10.066L6.707 5.293a1 1 0 0 0-1.414 1.414L16.586 18H6.52a1 1 0 0 0-1 1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ArrowDownRightOutlinedIcon,
} as const;

const ArrowDownRightSVG: React.FC<ArrowDownRightProps> = ({
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

const ArrowDownRight = styled(ArrowDownRightSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ArrowDownRight;
