// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ImageRemoveIconVariant = 'outlined';
type ImageRemoveProps = IconProps & { variant?: ImageRemoveIconVariant };

const ImageRemoveOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 22a1 1 0 1 0 0-2H4v-3.34l5.988-2.567 3.598 1.636a1 1 0 1 0 .828-1.821l-4-1.818a1 1 0 0 0-.808-.01L4 14.485V4h16v9a1 1 0 1 0 2 0V3.6A1.6 1.6 0 0 0 20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22zm4-14a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m.172 11.172a1 1 0 0 1 1.414 0l1.415 1.414 1.414-1.414a1 1 0 1 1 1.414 1.414L20.415 19l1.414 1.414a1 1 0 1 1-1.414 1.414L19 20.414l-1.415 1.414a1 1 0 1 1-1.414-1.414L17.586 19l-1.414-1.414a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ImageRemoveOutlinedIcon,
} as const;

const ImageRemoveSVG: React.FC<ImageRemoveProps> = ({
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

const ImageRemove = styled(ImageRemoveSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ImageRemove;
