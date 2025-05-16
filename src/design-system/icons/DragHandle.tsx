// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DragHandleIconVariant = 'outlined';
type DragHandleProps = IconProps & { variant?: DragHandleIconVariant };

const DragHandleOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6-12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DragHandleOutlinedIcon,
} as const;

const DragHandleSVG: React.FC<DragHandleProps> = ({
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

const DragHandle = styled(DragHandleSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default DragHandle;
