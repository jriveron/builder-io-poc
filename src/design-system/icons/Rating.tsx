// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type RatingIconVariant = 'outlined' | 'filled';
type RatingProps = IconProps & { variant?: RatingIconVariant };

const RatingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.61 9.483 8.68a1 1 0 0 1-.752.546l-5.617.816 4.06 3.931a1 1 0 0 1 .29.889l-.96 5.561 5.032-2.631a1 1 0 0 1 .927 0l5.032 2.631-.959-5.561a1 1 0 0 1 .29-.889l4.06-3.931-5.617-.816a1 1 0 0 1-.752-.545zM10.289 2.56c.701-1.412 2.72-1.412 3.422 0l2.364 4.763 5.29.769c1.559.226 2.197 2.143 1.055 3.25l-3.823 3.702.902 5.228c.27 1.568-1.379 2.736-2.768 2.01L12 19.805 7.269 22.28c-1.39.727-3.039-.441-2.768-2.009l.902-5.228L1.58 11.34c-1.142-1.106-.504-3.023 1.055-3.25l5.29-.768zl.87.432z"
      clipRule="evenodd"
    />
  </svg>
);
const RatingFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.587 8.236 2.597-5.232a.911.911 0 0 1 1.63 0l2.598 5.232 5.809.844a.902.902 0 0 1 .503 1.542l-4.203 4.07.992 5.75c.127.738-.652 1.3-1.32.952L12 18.678l-5.194 2.716c-.667.349-1.447-.214-1.32-.953l.993-5.75-4.203-4.07a.902.902 0 0 1 .503-1.54z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.914 3.272a.15.15 0 0 0-.058.065L9.259 8.57a.75.75 0 0 1-.564.41l-5.81.843a.153.153 0 0 0-.088.261l4.202 4.07a.75.75 0 0 1 .218.666l-.992 5.75a.14.14 0 0 0 .062.148q.04.03.082.032c.023.003.052 0 .088-.02l5.195-2.716a.75.75 0 0 1 .695 0l5.194 2.717a.15.15 0 0 0 .171-.013.14.14 0 0 0 .062-.149l-.992-5.749a.75.75 0 0 1 .217-.666l4.203-4.07a.153.153 0 0 0-.089-.26l-5.809-.845a.75.75 0 0 1-.564-.409l-2.597-5.232a.15.15 0 0 0-.058-.065A.2.2 0 0 0 12 3.25a.2.2 0 0 0-.085.022m-1.402-.602c.61-1.227 2.365-1.227 2.974 0l2.423 4.88 5.42.788c1.355.197 1.908 1.863.916 2.823l-3.917 3.794.924 5.359c.235 1.36-1.197 2.377-2.406 1.745L12 19.524 7.152 22.06c-1.208.632-2.64-.385-2.405-1.745l.924-5.36-3.918-3.793c-.991-.96-.438-2.626.917-2.823l5.42-.788z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: RatingOutlinedIcon,
  filled: RatingFilledIcon,
} as const;

const RatingSVG: React.FC<RatingProps> = ({
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

const Rating = styled(RatingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Rating;
