// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CyclingIconVariant = 'outlined';
type CyclingProps = IconProps & { variant?: CyclingIconVariant };

const CyclingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m2 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0m9.758-10.268a1 1 0 0 0-1.4.117l-3 3.5a1 1 0 0 0 .38 1.576l3.984 1.632-1.159 3.092a1 1 0 0 0 1.873.702l1.5-4a1 1 0 0 0-.557-1.276L9.778 11.6l1.457-1.7 2.242 1.868a1 1 0 0 0 .64.232h3.5a1 1 0 1 0 0-2H14.48z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CyclingOutlinedIcon,
} as const;

const CyclingSVG: React.FC<CyclingProps> = ({
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

const Cycling = styled(CyclingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Cycling;
