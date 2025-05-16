// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BusIconVariant = 'outlined';
type BusProps = IconProps & { variant?: BusIconVariant };

const BusOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0V6a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0zm1 5a1 1 0 0 0-1 1v7a2 2 0 0 0 1.5 1.937v.963a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V21h5v.9a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-.963A2 2 0 0 0 22 19v-7a1 1 0 0 0-1-1zm15.5 10v.5h-2V21zm1-2h.5v-6H4v6h15.5m-14 2.5V21h2v.5zm2.18-6.244a1 1 0 0 1 .073 1.412l-.01.011a1 1 0 0 1-1.486-1.338l.01-.011a1 1 0 0 1 1.412-.074m10 0a1 1 0 0 1 .073 1.412l-.01.011a1 1 0 0 1-1.486-1.338l.01-.011a1 1 0 0 1 1.412-.074M7 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BusOutlinedIcon,
} as const;

const BusSVG: React.FC<BusProps> = ({
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

const Bus = styled(BusSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Bus;
