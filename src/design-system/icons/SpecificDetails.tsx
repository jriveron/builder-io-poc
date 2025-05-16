// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type SpecificDetailsIconVariant = 'outlined';
type SpecificDetailsProps = IconProps & {
  variant?: SpecificDetailsIconVariant;
};

const SpecificDetailsOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 20V4H4v16zm2 .4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 20.4V3.6A1.6 1.6 0 0 1 3.6 2h16.8A1.6 1.6 0 0 1 22 3.6zM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V8h-3v8h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V8H8v1a1 1 0 0 1-2 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: SpecificDetailsOutlinedIcon,
} as const;

const SpecificDetailsSVG: React.FC<SpecificDetailsProps> = ({
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

const SpecificDetails = styled(SpecificDetailsSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default SpecificDetails;
