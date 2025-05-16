// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MapIconVariant = 'outlined';
type MapProps = IconProps & { variant?: MapIconVariant };

const MapOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.894 2.315A1.6 1.6 0 0 1 22 3.832v14.735a1.6 1.6 0 0 1-1.094 1.518l-5.59 1.864a1 1 0 0 1-.632 0L9 20.054l-4.894 1.631A1.6 1.6 0 0 1 2 20.168V5.432c0-.688.44-1.3 1.094-1.517l5.59-1.864a1 1 0 0 1 .632 0L15 3.946zM14 5.72l-4-1.334V18.28l4 1.334zm2 13.892V5.72l4-1.334V18.28zm-8-1.334V4.387L4 5.721v13.892z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MapOutlinedIcon,
} as const;

const MapSVG: React.FC<MapProps> = ({
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

const Map = styled(MapSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Map;
