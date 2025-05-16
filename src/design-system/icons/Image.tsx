// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ImageIconVariant = 'outlined';
type ImageProps = IconProps & { variant?: ImageIconVariant };

const ImageOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 20v-1.356l-10.012-4.55L4 16.66V20zm2-16.4v16.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 20.4V3.6A1.6 1.6 0 0 1 3.6 2h16.8A1.6 1.6 0 0 1 22 3.6m-11.586 8.49L20 16.447V4H4v10.484l5.606-2.403a1 1 0 0 1 .808.009M17 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ImageOutlinedIcon,
} as const;

const ImageSVG: React.FC<ImageProps> = ({
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

const Image = styled(ImageSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Image;
