// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type GlobeIconVariant = 'outlined';
type GlobeProps = IconProps & { variant?: GlobeIconVariant };

const GlobeOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.023 11.353-.015.268 5.334 1.94a1 1 0 0 1 .62 1.214l-.915 3.202.82 2.463A9 9 0 0 0 12 21a9 9 0 0 0 3.903-.888l-.277-1.385-1.997-.799A1 1 0 0 1 13 17v-3.5a1 1 0 0 1 .684-.949l3-1a1 1 0 0 1 .426-.045l3.89.432a9 9 0 0 0-.023-.581l-1.713-.857h-1.571l-2.322.928A1 1 0 0 1 14 10.5v-3a1 1 0 0 1 .859-.99l2.888-.413.265-.795A8.97 8.97 0 0 0 12 3c-.774 0-1.525.098-2.241.281l.636 1.272a1 1 0 0 1-.063 1.002l-2 3a1 1 0 0 1-.636.426l-2.261.452-2.31 1.848q-.05.04-.102.071m.856-3.237.496-.397a1 1 0 0 1 .429-.2l2.094-.418 1.448-2.173-.466-.932a9.04 9.04 0 0 0-4.001 4.12M19.53 7.07c.363.553.667 1.15.902 1.778l-.486-.242A1 1 0 0 0 19.5 8.5h-2a1 1 0 0 0-.371.072L16 9.023v-.656l2.641-.377a1 1 0 0 0 .808-.674zm1.262 6.858-3.685-.41-2.108.703v2.102l1.871.749a1 1 0 0 1 .61.732l.23 1.152a9 9 0 0 0 3.082-5.028m-14.537 5a9 9 0 0 1-3.073-5.116l3.6 1.31-.744 2.603a1 1 0 0 0 .013.591zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: GlobeOutlinedIcon,
} as const;

const GlobeSVG: React.FC<GlobeProps> = ({
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

const Globe = styled(GlobeSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Globe;
