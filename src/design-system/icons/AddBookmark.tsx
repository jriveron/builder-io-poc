// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AddBookmarkIconVariant = 'outlined';
type AddBookmarkProps = IconProps & { variant?: AddBookmarkIconVariant };

const AddBookmarkOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2h-2z"
    />
    <path
      fill="currentColor"
      d="M13 2H7a3 3 0 0 0-3 3v16a1 1 0 0 0 1.54.841l5.92-3.805a1 1 0 0 1 1.08 0l5.92 3.805A1 1 0 0 0 20 21v-9a1 1 0 1 0-2 0v7.168l-4.378-2.814a3 3 0 0 0-3.244 0L6 19.168V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AddBookmarkOutlinedIcon,
} as const;

const AddBookmarkSVG: React.FC<AddBookmarkProps> = ({
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

const AddBookmark = styled(AddBookmarkSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AddBookmark;
