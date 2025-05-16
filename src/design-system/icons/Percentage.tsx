// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type PercentageIconVariant = 'outlined' | 'filled';
type PercentageProps = IconProps & { variant?: PercentageIconVariant };

const PercentageOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m2 14.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-7-7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m8.293-1.207a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const PercentageFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m4.707 6.293a1 1 0 0 0-1.414 0l-8 8a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: PercentageOutlinedIcon,
  filled: PercentageFilledIcon,
} as const;

const PercentageSVG: React.FC<PercentageProps> = ({
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

const Percentage = styled(PercentageSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Percentage;
