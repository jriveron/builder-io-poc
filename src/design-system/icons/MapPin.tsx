// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MapPinIconVariant = 'outlined';
type MapPinProps = IconProps & { variant?: MapPinIconVariant };

const MapPinOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 10a7 7 0 0 1 14 0c0 .841-.395 1.959-1.121 3.248-.711 1.263-1.672 2.575-2.653 3.776A51 51 0 0 1 12 20.596q-.235-.238-.53-.543a51 51 0 0 1-2.696-3.029c-.98-1.2-1.942-2.513-2.653-3.776C5.395 11.958 5 10.842 5 10m6.312 12.726L12 22l.688.726-.688.652zm0 0L12 22c.688.726.688.725.689.725l.006-.006.02-.018.07-.068c.06-.059.15-.145.261-.256a53.17 53.17 0 0 0 3.728-4.088c1.02-1.246 2.058-2.658 2.847-4.06C20.395 12.856 21 11.369 21 10a9 9 0 1 0-18 0c0 1.368.605 2.855 1.379 4.23.789 1.401 1.828 2.813 2.847 4.06a53 53 0 0 0 3.99 4.343l.07.068.019.018zM10 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MapPinOutlinedIcon,
} as const;

const MapPinSVG: React.FC<MapPinProps> = ({
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

const MapPin = styled(MapPinSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default MapPin;
