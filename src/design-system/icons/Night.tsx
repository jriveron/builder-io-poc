// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type NightIconVariant = 'outlined';
type NightProps = IconProps & { variant?: NightIconVariant };

const NightOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.8 2.15a1 1 0 0 1 .474.85c0 4.101 1.017 6.982 2.88 8.846 1.864 1.863 4.745 2.88 8.846 2.88a1 1 0 0 1 .895 1.445A10.49 10.49 0 0 1 12.494 22C6.698 22 2 17.302 2 11.507 2 7.385 4.376 3.82 7.83 2.104a1 1 0 0 1 .97.046M7.337 4.758a8.493 8.493 0 1 0 11.906 11.906c-3.58-.262-6.454-1.356-8.502-3.404S7.597 8.338 7.336 4.758"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: NightOutlinedIcon,
} as const;

const NightSVG: React.FC<NightProps> = ({
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

const Night = styled(NightSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Night;
