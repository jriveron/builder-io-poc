// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MedalIconVariant = 'outlined';
type MedalProps = IconProps & { variant?: MedalIconVariant };

const MedalOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.744 1.077a1 1 0 0 0-1.307.539l-1.04 2.5a1 1 0 1 0 1.846.768l1.04-2.5a1 1 0 0 0-.54-1.307m3.66.008a1 1 0 0 0-1.32.511l-3.362 7.617a7 7 0 0 0-.287-.066L9.733 1.562a1 1 0 1 0-1.797.877l3.226 6.61q-.71.087-1.367.305l-3.9-7.801a1 1 0 0 0-1.79.894l3.902 7.803a7 7 0 1 0 7.564-.272l3.344-7.574a1 1 0 0 0-.511-1.319m-5.765 9.955a5 5 0 1 1-.006 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MedalOutlinedIcon,
} as const;

const MedalSVG: React.FC<MedalProps> = ({
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

const Medal = styled(MedalSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Medal;
