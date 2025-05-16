// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ComparisonWithPeersIconVariant = 'outlined';
type ComparisonWithPeersProps = IconProps & {
  variant?: ComparisonWithPeersIconVariant;
};

const ComparisonWithPeersOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.505 5.23A3.343 3.343 0 0 1 11 6.342V8h2V6.343a3.343 3.343 0 0 1 6.495-1.114l3.15 8.918A5 5 0 1 1 13 16v-6h-2v6a5 5 0 1 1-9.645-1.853zm.003 5.996A5 5 0 0 1 6 11c1.126 0 2.164.372 3 1V6.343a1.343 1.343 0 0 0-2.61-.447zM9 16a3 3 0 1 0-6 0 3 3 0 0 0 6 0m10.492-4.773A5 5 0 0 0 18 11a4.98 4.98 0 0 0-3 1V6.343a1.343 1.343 0 0 1 2.61-.447zM15 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ComparisonWithPeersOutlinedIcon,
} as const;

const ComparisonWithPeersSVG: React.FC<ComparisonWithPeersProps> = ({
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

const ComparisonWithPeers = styled(ComparisonWithPeersSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default ComparisonWithPeers;
