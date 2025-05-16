// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type VoucherIconVariant = 'outlined';
type VoucherProps = IconProps & { variant?: VoucherIconVariant };

const VoucherOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1 13.414a1 1 0 0 0 0 1.414L4.22 16.95a1 1 0 0 0 1.414 0 1 1 0 1 1 1.414 1.414 1 1 0 0 0 0 1.414L9.171 21.9a1 1 0 0 0 1.414 0l11.314-11.314a1 1 0 0 0 0-1.414L19.777 7.05a1 1 0 0 0-1.414 0 1 1 0 1 1-1.414-1.414 1 1 0 0 0 0-1.414L14.828 2.1a1 1 0 0 0-1.415 0zm2.949 1.535-.828-.828 2.828-2.828.353.354a1 1 0 0 0 1.415-1.415l-.354-.353 5.658-5.657.827.828a3.001 3.001 0 0 0 4.002 4l.827.829-5.657 5.657-.354-.354a1 1 0 0 0-1.414 1.414l.354.354-2.828 2.828-.828-.828a3.001 3.001 0 0 0-4.001-4m5.889-2.595a1 1 0 0 0-1.414 1.414l.707.707a1 1 0 0 0 1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: VoucherOutlinedIcon,
} as const;

const VoucherSVG: React.FC<VoucherProps> = ({
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

const Voucher = styled(VoucherSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Voucher;
