// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type PoiIconVariant = 'outlined';
type PoiProps = IconProps & { variant?: PoiIconVariant };

const PoiOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 2a1 1 0 0 0-1 1v5.161A7.01 7.01 0 0 0 5.29 13H5a1 1 0 1 0 0 2v5H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-5a1 1 0 1 0 0-2h-.29a7.005 7.005 0 0 0-6.21-4.982V7h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM13 20h4v-5h-4zm-2-5v5H7v-5zm1-2h4.584a5.001 5.001 0 0 0-9.168 0zm.5-9v1h3V4z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: PoiOutlinedIcon,
} as const;

const PoiSVG: React.FC<PoiProps> = ({
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

const Poi = styled(PoiSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Poi;
