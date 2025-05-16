// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type EditIconVariant = 'outlined';
type EditProps = IconProps & { variant?: EditIconVariant };

const EditOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.793 9.121a3 3 0 0 0 0-4.242l-1.415-1.415a3 3 0 0 0-4.242 0L4.04 14.56a3 3 0 0 0-.867 1.857l-.242 2.74a2 2 0 0 0 2.168 2.17l2.74-.243a3 3 0 0 0 1.858-.867zm-1.415-2.828a1 1 0 0 1 0 1.414l-.772.773-2.829-2.828.773-.773a1 1 0 0 1 1.414 0zm-5.015.773 2.828 2.828-8.908 8.909a1 1 0 0 1-.62.289l-2.74.242.242-2.74a1 1 0 0 1 .29-.62z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: EditOutlinedIcon,
} as const;

const EditSVG: React.FC<EditProps> = ({
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

const Edit = styled(EditSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Edit;
