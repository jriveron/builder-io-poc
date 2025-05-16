// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ReportIconVariant = 'outlined';
type ReportProps = IconProps & { variant?: ReportIconVariant };

const ReportOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.3 21.995a1 1 0 0 1-.895-1.094l.6-5.996.95-10.45A1.6 1.6 0 0 1 6.548 3h13.795a1.6 1.6 0 0 1 1.594 1.745l-.891 9.8A1.6 1.6 0 0 1 19.452 16H5.905l-.51 5.1a1 1 0 0 1-1.094.895M6.096 14h12.992l.818-9H6.913z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ReportOutlinedIcon,
} as const;

const ReportSVG: React.FC<ReportProps> = ({
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

const Report = styled(ReportSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Report;
