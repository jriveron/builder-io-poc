// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BusinessOccasionIconVariant = 'outlined';
type BusinessOccasionProps = IconProps & {
  variant?: BusinessOccasionIconVariant;
};

const BusinessOccasionOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 4v2h6V4zm8 2V3.6A1.6 1.6 0 0 0 15.4 2H8.6A1.6 1.6 0 0 0 7 3.6V6H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM4 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BusinessOccasionOutlinedIcon,
} as const;

const BusinessOccasionSVG: React.FC<BusinessOccasionProps> = ({
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

const BusinessOccasion = styled(BusinessOccasionSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default BusinessOccasion;
