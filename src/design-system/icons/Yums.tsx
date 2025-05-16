// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type YumsIconVariant = 'outlined';
type YumsProps = IconProps & { variant?: YumsIconVariant };

const YumsOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.517 17.22q-.502 0-1-.166a2.4 2.4 0 0 1-.849-.472l-.12-.106.798-1.466c.1.09.267.226.423.33.082.053.164.102.224.127q.254.105.512.105c.238 0 .41-.059.534-.16.168-.135.345-.465.489-.785L8.639 8h1.998l1.883 4.43L14.418 8h1.876l-3.12 7.202-.008.017q-.3.72-.689 1.166l-.009.01c-.257.3-.554.517-.89.642l-.007.002q-.482.182-1.053.181"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: YumsOutlinedIcon,
} as const;

const YumsSVG: React.FC<YumsProps> = ({
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

const Yums = styled(YumsSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Yums;
