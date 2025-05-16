// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ImageListIconVariant = 'outlined';
type ImageListProps = IconProps & { variant?: ImageListIconVariant };

const ImageListOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 18a1 1 0 1 0 2 0V5h13a1 1 0 1 0 0-2H4.6A1.6 1.6 0 0 0 3 4.6zM20 8v8.59l-7.224-2.534a1 1 0 0 0-.645-.005L8 15.416V8zm2-.4v12.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 20.4V7.6A1.6 1.6 0 0 1 7.6 6h12.8A1.6 1.6 0 0 1 22 7.6m-9.565 8.456L20 18.71V20H8v-2.477zM17 11.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M16.5 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ImageListOutlinedIcon,
} as const;

const ImageListSVG: React.FC<ImageListProps> = ({
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

const ImageList = styled(ImageListSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ImageList;
