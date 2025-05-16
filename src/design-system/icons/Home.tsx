// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type HomeIconVariant = 'outlined';
type HomeProps = IconProps & { variant?: HomeIconVariant };

const HomeOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.408 3.401a5 5 0 0 1 5.184 0l5 3.03A5 5 0 0 1 22 10.709V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.292a5 5 0 0 1 2.408-4.276zm4.147 1.71a3 3 0 0 0-3.11 0l-5 3.031A3 3 0 0 0 4 10.708V17a3 3 0 0 0 3 3h1v-3a4 4 0 1 1 8 0v3h1a3 3 0 0 0 3-3v-6.292a3 3 0 0 0-1.445-2.566zM14 20v-3a2 2 0 1 0-4 0v3z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: HomeOutlinedIcon,
} as const;

const HomeSVG: React.FC<HomeProps> = ({
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

const Home = styled(HomeSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Home;
