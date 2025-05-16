// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type WalkingIconVariant = 'outlined';
type WalkingProps = IconProps & { variant?: WalkingIconVariant };

const WalkingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-2.939 12.52 1.062-4.249a2.7 2.7 0 0 0-.784.332c-.54.346-1.124 1.05-1.124 2.75a1 1 0 1 1-2 0c0-2.245.825-3.653 2.046-4.434 1.122-.718 2.41-.79 3.154-.792h1.434a1 1 0 0 1 .981.804c.094.472.365 1.26.85 1.977.484.712 1.122 1.272 1.934 1.475a1 1 0 1 1-.486 1.94c-1.442-.36-2.447-1.327-3.103-2.293a8 8 0 0 1-.86-1.682l-1.045 4.184 4.63 5.955a1 1 0 1 1-1.578 1.228l-4.93-6.34a1 1 0 0 1-.18-.856m1.067 4.363a1 1 0 0 0-1.6-1.2l-2.113 2.818a1 1 0 0 0 1.6 1.2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: WalkingOutlinedIcon,
} as const;

const WalkingSVG: React.FC<WalkingProps> = ({
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

const Walking = styled(WalkingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Walking;
