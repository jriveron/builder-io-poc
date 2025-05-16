// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BookmarkIconVariant = 'outlined' | 'filled';
type BookmarkProps = IconProps & { variant?: BookmarkIconVariant };

const BookmarkOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 4a1 1 0 0 0-1 1v14.168l4.378-2.814a3 3 0 0 1 3.244 0L18 19.168V5a1 1 0 0 0-1-1zM4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.54.841l-5.92-3.805a1 1 0 0 0-1.08 0l-5.92 3.805A1 1 0 0 1 4 21z"
      clipRule="evenodd"
    />
  </svg>
);
const BookmarkFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.54.841l5.92-3.805a1 1 0 0 1 1.08 0l5.92 3.805A1 1 0 0 0 20 21V5a3 3 0 0 0-3-3z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BookmarkOutlinedIcon,
  filled: BookmarkFilledIcon,
} as const;

const BookmarkSVG: React.FC<BookmarkProps> = ({
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

const Bookmark = styled(BookmarkSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Bookmark;
