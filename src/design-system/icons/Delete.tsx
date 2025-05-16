// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DeleteIconVariant = 'outlined';
type DeleteProps = IconProps & { variant?: DeleteIconVariant };

const DeleteOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.625 4a1 1 0 0 1 1-1h2.75a1 1 0 0 1 1 1v1h-4.75zm-2 0v1H3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2h-4.625V4a3 3 0 0 0-3-3h-2.75a3 3 0 0 0-3 3m-2.64 4.827a1 1 0 1 0-1.97.346L5.01 20.52A3 3 0 0 0 7.965 23h8.07a3 3 0 0 0 2.955-2.48l1.995-11.347a1 1 0 0 0-1.97-.346L17.02 20.173a1 1 0 0 1-.985.827h-8.07a1 1 0 0 1-.985-.827z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DeleteOutlinedIcon,
} as const;

const DeleteSVG: React.FC<DeleteProps> = ({
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

const Delete = styled(DeleteSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Delete;
