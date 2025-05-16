// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DesignIconVariant = 'outlined';
type DesignProps = IconProps & { variant?: DesignIconVariant };

const DesignOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.283 17.274a1.6 1.6 0 0 0 0-2.263l-2.405-2.404a1 1 0 0 0-1.414 1.414l2.122 2.121-4.243 4.243-.707-.707 1.414-1.415a1 1 0 1 0-1.414-1.414l-1.414 1.415a1 1 0 1 0-1.415 1.414l2.404 2.404a1.6 1.6 0 0 0 2.263 0zM9.978 5.535a1 1 0 0 0 1.414-1.415L8.99 1.717a1.6 1.6 0 0 0-2.263 0L1.918 6.526a1.6 1.6 0 0 0 0 2.262l2.404 2.404a1 1 0 0 0 1.414-1.414L7.15 8.364A1 1 0 1 0 5.736 6.95L4.322 8.364l-.707-.707 4.243-4.243zm5.799.116.772-.773a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.414l-.773.773zm-1.414 1.414 2.828 2.828-8.909 8.909a1 1 0 0 1-.619.289l-2.74.242.242-2.74a1 1 0 0 1 .289-.62zm5.015-3.601a3 3 0 0 0-4.243 0l-1.48 1.48-9.615 9.615a3 3 0 0 0-.867 1.858l-.242 2.74A2 2 0 0 0 5.1 21.326l2.74-.242a3 3 0 0 0 1.858-.867L20.793 9.121a3 3 0 0 0 0-4.242z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DesignOutlinedIcon,
} as const;

const DesignSVG: React.FC<DesignProps> = ({
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

const Design = styled(DesignSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Design;
