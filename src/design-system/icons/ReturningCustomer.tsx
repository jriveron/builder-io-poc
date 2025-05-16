// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ReturningCustomerIconVariant = 'outlined';
type ReturningCustomerProps = IconProps & {
  variant?: ReturningCustomerIconVariant;
};

const ReturningCustomerOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 5a5 5 0 1 0-3.334-1.274A8 8 0 0 0 1 18v1a1 1 0 1 0 2 0v-1a6 6 0 0 1 6-6m9.936-1.36a2.62 2.62 0 0 0-3.871 0 .62.62 0 0 1-.486.201 2.62 2.62 0 0 0-2.737 2.738.62.62 0 0 1-.202.486 2.62 2.62 0 0 0 0 3.87c.136.125.21.303.202.486a2.62 2.62 0 0 0 2.737 2.738.62.62 0 0 1 .486.2 2.62 2.62 0 0 0 3.87 0 .62.62 0 0 1 .487-.2 2.62 2.62 0 0 0 2.737-2.738.62.62 0 0 1 .201-.485 2.62 2.62 0 0 0 0-3.871.62.62 0 0 1-.201-.486 2.62 2.62 0 0 0-2.737-2.738.62.62 0 0 1-.486-.2m-2.393 1.347a.62.62 0 0 1 .914 0c.525.576 1.28.889 2.058.852a.62.62 0 0 1 .646.646 2.62 2.62 0 0 0 .852 2.058c.27.245.27.669 0 .914a2.62 2.62 0 0 0-.852 2.058.62.62 0 0 1-.646.646 2.62 2.62 0 0 0-2.058.852.62.62 0 0 1-.914 0 2.62 2.62 0 0 0-2.057-.852.62.62 0 0 1-.647-.646 2.62 2.62 0 0 0-.852-2.058.62.62 0 0 1 0-.914c.576-.525.889-1.279.852-2.058a.62.62 0 0 1 .646-.646 2.62 2.62 0 0 0 2.058-.852m-1.887 3.306a1 1 0 0 1 1.414 0l.384.384 1.475-1.475a1 1 0 0 1 1.414 1.414l-2.182 2.182a1 1 0 0 1-1.414 0l-1.09-1.09a1 1 0 0 1 0-1.415"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ReturningCustomerOutlinedIcon,
} as const;

const ReturningCustomerSVG: React.FC<ReturningCustomerProps> = ({
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

const ReturningCustomer = styled(ReturningCustomerSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default ReturningCustomer;
