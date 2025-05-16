// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type LockIconVariant = 'outlined';
type LockProps = IconProps & { variant?: LockIconVariant };

const LockOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.988 4.916C8.774 3.825 10.074 3 12 3s3.226.825 4.012 1.916C16.76 5.956 17 7.173 17 8v3h.4a1.6 1.6 0 0 1 1.6 1.6v6.8a1.6 1.6 0 0 1-1.6 1.6H6.6A1.6 1.6 0 0 1 5 19.4v-6.8A1.6 1.6 0 0 1 6.6 11H7V8c0-.827.24-2.044.988-3.084M9 11h6V8c0-.507-.16-1.289-.611-1.916C13.974 5.508 13.274 5 12 5s-1.974.508-2.388 1.084C9.16 6.711 9 7.494 9 8zm-2 2v6h10v-6z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: LockOutlinedIcon,
} as const;

const LockSVG: React.FC<LockProps> = ({
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

const Lock = styled(LockSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Lock;
