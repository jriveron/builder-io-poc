// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CopyIconVariant = 'outlined';
type CopyProps = IconProps & { variant?: CopyIconVariant };

const CopyOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.6 3A1.6 1.6 0 0 0 3 4.6v9.8A1.6 1.6 0 0 0 4.6 16H8v3.4A1.6 1.6 0 0 0 9.6 21h9.8a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 19.4 8H16V4.6A1.6 1.6 0 0 0 14.4 3zM14 8V5H5v9h3V9.6A1.6 1.6 0 0 1 9.6 8zm-4 7v4h9v-9h-9z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CopyOutlinedIcon,
} as const;

const CopySVG: React.FC<CopyProps> = ({
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

const Copy = styled(CopySVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Copy;
