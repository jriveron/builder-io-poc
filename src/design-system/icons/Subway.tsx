// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type SubwayIconVariant = 'outlined';
type SubwayProps = IconProps & { variant?: SubwayIconVariant };

const SubwayOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M9.207 7.793A1 1 0 0 0 7.5 8.5v7a1 1 0 1 0 2 0v-4.586l1.793 1.793a1 1 0 0 0 1.414 0l1.793-1.793V15.5a1 1 0 1 0 2 0v-7a1 1 0 0 0-1.707-.707L12 10.586z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: SubwayOutlinedIcon,
} as const;

const SubwaySVG: React.FC<SubwayProps> = ({
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

const Subway = styled(SubwaySVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Subway;
