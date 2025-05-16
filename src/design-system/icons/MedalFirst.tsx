// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MedalFirstIconVariant = 'outlined';
type MedalFirstProps = IconProps & { variant?: MedalFirstIconVariant };

const MedalFirstOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.437 1.616a1 1 0 0 1 1.847.768l-1.04 2.5a1 1 0 0 1-1.847-.768zm3.648-.02a1 1 0 1 1 1.83.808l-3.344 7.574a7 7 0 1 1-7.564.272L4.106 2.447a1 1 0 0 1 1.789-.894l3.9 7.801a7 7 0 0 1 1.367-.304L7.936 2.439a1 1 0 0 1 1.798-.877l3.701 7.585q.145.03.288.066zM17 16a5 5 0 0 0-4.36-4.96h-.006A5 5 0 1 0 17 16m-5.1-3.3a1 1 0 0 1 1.6.8v5a1 1 0 1 1-2 0v-3l-.4.3a1 1 0 0 1-1.2-1.6z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MedalFirstOutlinedIcon,
} as const;

const MedalFirstSVG: React.FC<MedalFirstProps> = ({
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

const MedalFirst = styled(MedalFirstSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default MedalFirst;
