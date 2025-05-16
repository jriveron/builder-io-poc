// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DayIconVariant = 'outlined';
type DayProps = IconProps & { variant?: DayIconVariant };

const DayOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#day_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2a1 1 0 1 0 2 0V1a1 1 0 1 0-2 0zm1 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0m16 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-9 12a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1m7.293-3.293a1 1 0 0 0 1.414-1.414l-1-1a1 1 0 0 0-1.414 1.414zm1.414-17.414a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414m-16 17.414a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 1.414zM3.293 3.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M1 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="day_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DayOutlinedIcon,
} as const;

const DaySVG: React.FC<DayProps> = ({
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

const Day = styled(DaySVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Day;
