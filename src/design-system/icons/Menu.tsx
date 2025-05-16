// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MenuIconVariant = 'outlined' | 'filled';
type MenuProps = IconProps & { variant?: MenuIconVariant };

const MenuOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 5v14a3 3 0 0 0 3 3h14a1 1 0 1 0 0-2H6a1 1 0 1 1 0-2h14a1 1 0 0 0 .99-1.143q.01-.07.01-.143V3.6A1.6 1.6 0 0 0 19.4 2H6a3 3 0 0 0-3 3m3-1a1 1 0 0 0-1 1v11.17c.313-.11.65-.17 1-.17h13V4z"
      clipRule="evenodd"
    />
  </svg>
);
const MenuFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.879 2.879A3 3 0 0 1 6 2h13.4A1.6 1.6 0 0 1 21 3.6v13.468a.3.3 0 0 1-.009.066A1 1 0 0 1 20 18H6a1 1 0 0 0 0 2h14a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121M9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MenuOutlinedIcon,
  filled: MenuFilledIcon,
} as const;

const MenuSVG: React.FC<MenuProps> = ({
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

const Menu = styled(MenuSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Menu;
