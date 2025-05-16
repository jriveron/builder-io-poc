// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DishesIconVariant = 'outlined';
type DishesProps = IconProps & { variant?: DishesIconVariant };

const DishesOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 20a1 1 0 0 1 1-1h2v-4a1 1 0 1 1 2 0v4h2a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1M17 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 .625-.927h.001l.01-.005.055-.024a4.637 4.637 0 0 0 .934-.575c.53-.424.875-.917.875-1.469V4.5h2V9c0 1.448-.905 2.455-1.625 3.03-.314.251-.623.447-.875.589V20a1 1 0 0 1-1 1m3.5-16.5a1 1 0 1 0-2 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 9.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1M5.09 6.989c-.133 1.318-.1 2.702.315 3.586.385.82 1.328 1.695 2.311 2.417.471.345.914.63 1.24.827l.044.027.043-.027c.326-.197.77-.482 1.24-.827.984-.722 1.926-1.597 2.312-2.417.415-.884.447-2.268.314-3.586a18 18 0 0 0-.217-1.489H5.307c-.075.396-.16.916-.217 1.489M4.5 4.5l-.969-.249A1 1 0 0 1 4.5 3.5h9a1 1 0 0 1 .968.751L13.5 4.5l.968-.249v.002l.002.004.003.012.01.042a13 13 0 0 1 .15.689c.088.452.195 1.08.266 1.788.137 1.358.17 3.223-.494 4.637-.615 1.308-1.922 2.433-2.939 3.18a19 19 0 0 1-1.945 1.25l-.035.019-.01.005-.003.002h-.001L9 15l-.472.882-.002-.001-.003-.002-.01-.005-.035-.02-.124-.069a19.319 19.319 0 0 1-1.821-1.181c-1.017-.746-2.324-1.871-2.939-3.179-.664-1.414-.631-3.28-.494-4.637a20 20 0 0 1 .416-2.477l.01-.042.004-.012v-.004l.001-.002zM9 15l-.472.882c.294.157.65.157.944 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DishesOutlinedIcon,
} as const;

const DishesSVG: React.FC<DishesProps> = ({
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

const Dishes = styled(DishesSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Dishes;
