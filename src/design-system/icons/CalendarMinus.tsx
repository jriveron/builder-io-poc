// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CalendarMinusIconVariant = 'outlined';
type CalendarMinusProps = IconProps & { variant?: CalendarMinusIconVariant };

const CalendarMinusOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5h-3.5a1 1 0 0 1 0-2H14V2a1 1 0 0 1 1-1M2 6v13a3 3 0 0 0 3 3h8a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1v-8h16v2a1 1 0 1 0 2 0V6a3 3 0 0 0-3-3h-.5a1 1 0 1 0 0 2h.5a1 1 0 0 1 1 1v3H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3m12.992 11a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CalendarMinusOutlinedIcon,
} as const;

const CalendarMinusSVG: React.FC<CalendarMinusProps> = ({
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

const CalendarMinus = styled(CalendarMinusSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default CalendarMinus;
