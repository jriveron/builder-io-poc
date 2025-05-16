// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type OfferIconVariant = 'outlined' | 'filled';
type OfferProps = IconProps & { variant?: OfferIconVariant };

const OfferOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.658 21.707a1 1 0 0 1-1.414 0l-7.071-7.071a1 1 0 0 1 0-1.414l8.485-8.485a1 1 0 0 1 .707-.293h7.071a1 1 0 0 1 1 1v7.07a1 1 0 0 1-.292.708zM4.294 13.93l5.657 5.657 7.485-7.485V6.444H11.78zm9.9-5.657a1 1 0 1 1 1.413 1.414 1 1 0 0 1-1.414-1.414"
      clipRule="evenodd"
    />
  </svg>
);
const OfferFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.659 21.707a1 1 0 0 1-1.414 0l-7.071-7.071a1 1 0 0 1 0-1.414l8.485-8.485a1 1 0 0 1 .707-.293h7.071a1 1 0 0 1 1 1v7.07a1 1 0 0 1-.293.708zm3.535-13.435a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: OfferOutlinedIcon,
  filled: OfferFilledIcon,
} as const;

const OfferSVG: React.FC<OfferProps> = ({
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

const Offer = styled(OfferSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Offer;
