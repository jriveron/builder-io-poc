// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ImagePlusIconVariant = 'outlined';
type ImagePlusProps = IconProps & { variant?: ImagePlusIconVariant };

const ImagePlusOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 22a1 1 0 1 0 0-2H4v-3.34l5.988-2.567 5.099 2.317a1 1 0 0 0 .827-1.82l-5.5-2.5a1 1 0 0 0-.808-.01L4 14.485V4h16v9a1 1 0 1 0 2 0V3.6A1.6 1.6 0 0 0 20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22zm3-15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 1a3 3 0 1 0-6 0 3 3 0 0 0 6 0m1 8a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ImagePlusOutlinedIcon,
} as const;

const ImagePlusSVG: React.FC<ImagePlusProps> = ({
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

const ImagePlus = styled(ImagePlusSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ImagePlus;
