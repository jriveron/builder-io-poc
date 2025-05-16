// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type FineDiningIconVariant = 'outlined' | 'filled';
type FineDiningProps = IconProps & { variant?: FineDiningIconVariant };

const FineDiningOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.879 5.636 2.12 2.122 2.122-2.122L12 3.515zM8.182 6.768a1.6 1.6 0 0 1 0-2.263l2.686-2.687a1.6 1.6 0 0 1 2.263 0l2.687 2.687a1.6 1.6 0 0 1 0 2.263l-2.687 2.687a1.6 1.6 0 0 1-2.263 0zM5.637 14.12 3.515 12l2.122-2.121L7.757 12zM1.818 10.87a1.6 1.6 0 0 0 0 2.262l2.687 2.687a1.6 1.6 0 0 0 2.263 0l2.687-2.687a1.6 1.6 0 0 0 0-2.262L6.768 8.182a1.6 1.6 0 0 0-2.263 0zM12 20.485l-2.121-2.121 2.12-2.122 2.122 2.122zm-3.818-3.253a1.6 1.6 0 0 0 0 2.263l2.686 2.687a1.6 1.6 0 0 0 2.263 0l2.687-2.687a1.6 1.6 0 0 0 0-2.263l-2.687-2.687a1.6 1.6 0 0 0-2.263 0zm10.181-3.11L16.242 12l2.121-2.121L20.485 12zm-3.818-3.253a1.6 1.6 0 0 0 0 2.262l2.687 2.687a1.6 1.6 0 0 0 2.262 0l2.688-2.687a1.6 1.6 0 0 0 0-2.262l-2.687-2.687a1.6 1.6 0 0 0-2.263 0z"
      clipRule="evenodd"
    />
  </svg>
);
const FineDiningFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.358 6.59a1.35 1.35 0 0 1 0-1.909l2.687-2.687a1.35 1.35 0 0 1 1.91 0l2.687 2.687a1.35 1.35 0 0 1 0 1.91l-2.687 2.687a1.35 1.35 0 0 1-1.91 0zm-6.363 4.455a1.35 1.35 0 0 0 0 1.91l2.687 2.687a1.35 1.35 0 0 0 1.91 0l2.686-2.687a1.35 1.35 0 0 0 0-1.91L6.591 8.358a1.35 1.35 0 0 0-1.909 0zm6.363 6.364a1.35 1.35 0 0 0 0 1.91l2.687 2.687a1.35 1.35 0 0 0 1.91 0l2.687-2.687a1.35 1.35 0 0 0 0-1.91l-2.687-2.687a1.35 1.35 0 0 0-1.91 0zm6.364-6.364a1.35 1.35 0 0 0 0 1.91l2.687 2.687a1.35 1.35 0 0 0 1.909 0l2.687-2.687a1.35 1.35 0 0 0 0-1.91l-2.687-2.687a1.35 1.35 0 0 0-1.91 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: FineDiningOutlinedIcon,
  filled: FineDiningFilledIcon,
} as const;

const FineDiningSVG: React.FC<FineDiningProps> = ({
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

const FineDining = styled(FineDiningSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default FineDining;
