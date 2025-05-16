// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type EnlargeIconVariant = 'outlined';
type EnlargeProps = IconProps & { variant?: EnlargeIconVariant };

const EnlargeOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 3a1 1 0 1 0 0 2h1.586l-3.293 3.293a1 1 0 0 0 1.414 1.414L19 6.414V8a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1zM8 21a1 1 0 1 0 0-2H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414L5 17.586V16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: EnlargeOutlinedIcon,
} as const;

const EnlargeSVG: React.FC<EnlargeProps> = ({
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

const Enlarge = styled(EnlargeSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Enlarge;
