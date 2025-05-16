// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CoverIconVariant = 'outlined';
type CoverProps = IconProps & { variant?: CoverIconVariant };

const CoverOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3a1 1 0 0 1 1 1v5a2 2 0 1 0 4 0V4a1 1 0 1 1 2 0v5a4 4 0 0 1-3 3.874V20a1 1 0 1 1-2 0v-7.126A4 4 0 0 1 4 9V4a1 1 0 0 1 1-1m14.502.135a1 1 0 0 0-.998-.003l-1.485.848A5 5 0 0 0 14.5 8.321V12a3 3 0 0 0 3 3h.5v5a1 1 0 1 0 2 0V4a1 1 0 0 0-.498-.865M18 13h-.5a1 1 0 0 1-1-1V8.321A3 3 0 0 1 18 5.723zM9 4a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CoverOutlinedIcon,
} as const;

const CoverSVG: React.FC<CoverProps> = ({
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

const Cover = styled(CoverSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Cover;
