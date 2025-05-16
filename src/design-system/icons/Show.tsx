// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ShowIconVariant = 'outlined';
type ShowProps = IconProps & { variant?: ShowIconVariant };

const ShowOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.912 13.41c3.246-7.213 12.93-7.213 16.176 0a1 1 0 0 0 1.824-.82c-3.954-8.787-15.87-8.787-19.824 0a1 1 0 1 0 1.824.82M14 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ShowOutlinedIcon,
} as const;

const ShowSVG: React.FC<ShowProps> = ({
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

const Show = styled(ShowSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Show;
