// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type CommentIconVariant = 'outlined';
type CommentProps = IconProps & { variant?: CommentIconVariant };

const CommentOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 0 0-9 9c0 1.641.438 3.177 1.203 4.5a1 1 0 0 1 .118.683L3.75 20.25l3.067-.57a1 1 0 0 1 .684.117A8.96 8.96 0 0 0 12 21a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11c-1.867 0-3.628-.466-5.17-1.289l-4.147.772a1 1 0 0 1-1.166-1.166l.772-4.146A10.96 10.96 0 0 1 1 12"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: CommentOutlinedIcon,
} as const;

const CommentSVG: React.FC<CommentProps> = ({
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

const Comment = styled(CommentSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Comment;
