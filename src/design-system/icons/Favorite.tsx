// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type FavoriteIconVariant = 'outlined' | 'filled';
type FavoriteProps = IconProps & { variant?: FavoriteIconVariant };

const FavoriteOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.305 2A6.6 6.6 0 0 0 12 3.607a6.577 6.577 0 0 0-9.066.43c-2.579 2.673-2.579 6.977 0 9.65l7.295 7.562a2.463 2.463 0 0 0 3.465.076l.005-.005c1.709-1.646 3.357-3.396 4.983-5.122.799-.848 1.591-1.69 2.383-2.51A6.95 6.95 0 0 0 23 8.861a6.95 6.95 0 0 0-1.935-4.825A6.61 6.61 0 0 0 16.305 2m-3.32 3.426-.265.275a1 1 0 0 1-1.44 0l-.265-.275a4.58 4.58 0 0 0-6.642 0c-1.83 1.898-1.83 4.974 0 6.873l7.296 7.561c.173.18.463.187.646.016 1.674-1.612 3.261-3.298 4.865-5.001.807-.857 1.618-1.718 2.446-2.576l.097-.104A4.96 4.96 0 0 0 21 8.862a4.95 4.95 0 0 0-1.374-3.436A4.61 4.61 0 0 0 16.306 4a4.6 4.6 0 0 0-3.321 1.426"
      clipRule="evenodd"
    />
  </svg>
);
const FavoriteFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.305 2A6.6 6.6 0 0 0 12 3.607a6.577 6.577 0 0 0-9.066.43c-2.579 2.673-2.579 6.977 0 9.65l7.295 7.562a2.463 2.463 0 0 0 3.465.076l.001-.001.004-.004c1.709-1.646 3.353-3.392 4.975-5.114l.003-.002c.799-.85 1.593-1.692 2.388-2.517A6.95 6.95 0 0 0 23 8.862a6.95 6.95 0 0 0-1.935-4.825A6.61 6.61 0 0 0 16.305 2"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: FavoriteOutlinedIcon,
  filled: FavoriteFilledIcon,
} as const;

const FavoriteSVG: React.FC<FavoriteProps> = ({
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

const Favorite = styled(FavoriteSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Favorite;
