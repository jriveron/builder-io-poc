// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CrossIconVariant = 'outlined';
type CrossProps = IconProps & { variant?: CrossIconVariant };

const CrossOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.05 6.05a1 1 0 0 1 1.414 0l4.535 4.536 4.536-4.536a1 1 0 0 1 1.414 1.414L13.413 12l4.536 4.535a1 1 0 0 1-1.414 1.415l-4.536-4.536-4.535 4.536a1 1 0 1 1-1.415-1.415L10.585 12 6.049 7.464a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CrossOutlinedIcon,
} as const;

const CrossSVG: React.FC<CrossProps> = ({
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

const Cross = styled(CrossSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Cross;
