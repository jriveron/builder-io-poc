// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type UserLocationIconVariant = 'outlined';
type UserLocationProps = IconProps & { variant?: UserLocationIconVariant };

const UserLocationOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#userLocation_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.921 5.786 5.645 9.503l6.104 2.686a1.5 1.5 0 0 1 .77.769l2.685 6.104zm.317-2.166a1.5 1.5 0 0 1 1.849 1.85l-4.334 15.476c-.38 1.356-2.25 1.489-2.817.2l-3.17-7.205-7.205-3.17c-1.289-.567-1.156-2.437.2-2.817z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="userLocation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: UserLocationOutlinedIcon,
} as const;

const UserLocationSVG: React.FC<UserLocationProps> = ({
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

const UserLocation = styled(UserLocationSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default UserLocation;
