// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CarIconVariant = 'outlined';
type CarProps = IconProps & { variant?: CarIconVariant };

const CarOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.4 5.606A1 1 0 0 1 7.319 5h9.362a1 1 0 0 1 .92.606l2.318 5.41a1 1 0 0 1 .081.395V17H4v-5.59a1 1 0 0 1 .08-.393zM18 19h2v1h-2zm-2 1.4V19H8v1.4A1.6 1.6 0 0 1 6.4 22H3.6A1.6 1.6 0 0 1 2 20.4v-8.99a3 3 0 0 1 .243-1.181l2.318-5.41A3 3 0 0 1 7.32 3h9.362a3 3 0 0 1 2.758 1.818l2.318 5.41c.16.374.243.776.243 1.183V20.4a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6M4 19h2v1H4zM8 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-1 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm8 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CarOutlinedIcon,
} as const;

const CarSVG: React.FC<CarProps> = ({
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

const Car = styled(CarSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Car;
