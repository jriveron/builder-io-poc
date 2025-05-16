// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BillingIconVariant = 'outlined';
type BillingProps = IconProps & { variant?: BillingIconVariant };

const BillingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 20a3 3 0 0 0 3-3V4H9v10h3.4c.887 0 1.56.702 1.627 1.517.058.716.233 1.916.723 2.907C15.225 19.382 15.904 20 17 20m0 2H6a4 4 0 0 1-4-4v-1a3 3 0 0 1 3-3h2V3.6A1.6 1.6 0 0 1 8.6 2h11.8A1.6 1.6 0 0 1 22 3.6V17a5 5 0 0 1-5 5m-9-6H5a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h7.355a6 6 0 0 1-.397-.689c-.58-1.169-.805-2.47-.895-3.311zm4-10a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BillingOutlinedIcon,
} as const;

const BillingSVG: React.FC<BillingProps> = ({
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

const Billing = styled(BillingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Billing;
