// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MarketingIconVariant = 'outlined';
type MarketingProps = IconProps & { variant?: MarketingIconVariant };

const MarketingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 6.58 5-2.857v12.554l-5-2.857zM7 7h6v6H7a3 3 0 0 1 0-6m12.606-5.355L13.734 5H7a5 5 0 0 0-.878 9.923l.646 4.519a2.98 2.98 0 1 0 5.9-.843L12.154 15h1.58l5.872 3.355A1.6 1.6 0 0 0 22 16.966V3.034a1.6 1.6 0 0 0-2.394-1.39M8.748 19.159 8.154 15h1.98l.554 3.881a.98.98 0 0 1-1.94.278"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MarketingOutlinedIcon,
} as const;

const MarketingSVG: React.FC<MarketingProps> = ({
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

const Marketing = styled(MarketingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Marketing;
