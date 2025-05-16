// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ListIconVariant = 'outlined' | 'filled';
type ListProps = IconProps & { variant?: ListIconVariant };

const ListOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.753 6.668A1 1 0 0 0 3.267 5.33l-.01.011A1 1 0 0 0 4.743 6.68zM8 5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-3.321 6.256a1 1 0 0 1 .074 1.412l-.01.011a1 1 0 0 1-1.486-1.338l.01-.011a1 1 0 0 1 1.412-.074m.066 7.403a.994.994 0 1 0-1.48-1.33l-.01.01a.994.994 0 1 0 1.48 1.33zM7 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
const ListFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.125 7.002a1.5 1.5 0 1 0-2.23-2.007l-.01.012a1.5 1.5 0 1 0 2.23 2.006zM6.5 6A1.5 1.5 0 0 1 8 4.5h12a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 6m-3.605 4.996a1.5 1.5 0 1 1 2.23 2.006l-.01.011a1.5 1.5 0 0 1-2.23-2.006zM6.5 12A1.5 1.5 0 0 1 8 10.5h12a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 12m-3.606 4.994a1.495 1.495 0 0 1 2.222 2l-.01.01a1.495 1.495 0 0 1-2.222-2zM6.5 18A1.5 1.5 0 0 1 8 16.5h12a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 18"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ListOutlinedIcon,
  filled: ListFilledIcon,
} as const;

const ListSVG: React.FC<ListProps> = ({
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

const List = styled(ListSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default List;
