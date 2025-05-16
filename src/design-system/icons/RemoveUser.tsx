// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type RemoveUserIconVariant = 'outlined';
type RemoveUserProps = IconProps & { variant?: RemoveUserIconVariant };

const RemoveUserOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m6.334 3.726a5 5 0 1 0-6.669 0A8 8 0 0 0 0 19v1a1 1 0 1 0 2 0v-1a6 6 0 0 1 12 0v1a1 1 0 1 0 2 0v-1a8 8 0 0 0-4.666-7.274m6.58-4.554a1 1 0 0 1 1.415 0l1.414 1.414 1.414-1.414a1 1 0 1 1 1.414 1.414L22.157 10l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414-1.414 1.414a1 1 0 1 1-1.415-1.414L19.33 10l-1.415-1.414a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: RemoveUserOutlinedIcon,
} as const;

const RemoveUserSVG: React.FC<RemoveUserProps> = ({
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

const RemoveUser = styled(RemoveUserSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default RemoveUser;
