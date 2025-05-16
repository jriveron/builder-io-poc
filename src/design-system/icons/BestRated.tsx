// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BestRatedIconVariant = 'outlined' | 'filled';
type BestRatedProps = IconProps & { variant?: BestRatedIconVariant };

const BestRatedOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bestRated_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.218 1.95a3 3 0 0 0-4.436 0l-1.02 1.12a1 1 0 0 1-.786.326l-1.513-.07a3 3 0 0 0-3.137 3.136l.07 1.514a1 1 0 0 1-.325.786l-1.12 1.02a3 3 0 0 0 0 4.436l1.12 1.02a1 1 0 0 1 .326.786l-.071 1.514a3 3 0 0 0 3.137 3.137l1.513-.071a1 1 0 0 1 .786.325l1.02 1.12a3 3 0 0 0 4.436 0l1.02-1.12a1 1 0 0 1 .787-.325l1.513.07a3 3 0 0 0 3.137-3.136l-.07-1.514a1 1 0 0 1 .325-.786l1.12-1.02a3 3 0 0 0 0-4.436l-1.12-1.02a1 1 0 0 1-.326-.786l.07-1.514a3 3 0 0 0-3.136-3.137l-1.513.071a1 1 0 0 1-.786-.325zm-2.957 1.347a1 1 0 0 1 1.479 0l1.02 1.12a3 3 0 0 0 2.358.977l1.514-.07a1 1 0 0 1 1.045 1.045l-.07 1.513a3 3 0 0 0 .976 2.359l1.12 1.02a1 1 0 0 1 0 1.478l-1.12 1.02a3 3 0 0 0-.977 2.359l.071 1.513a1 1 0 0 1-1.046 1.046l-1.513-.071a3 3 0 0 0-2.358.977l-1.02 1.12a1 1 0 0 1-1.479 0l-1.02-1.12a3 3 0 0 0-2.358-.977l-1.514.07a1 1 0 0 1-1.045-1.045l.07-1.513a3 3 0 0 0-.976-2.358l-1.12-1.02a1 1 0 0 1 0-1.48l1.12-1.02a3 3 0 0 0 .976-2.358l-.07-1.513a1 1 0 0 1 1.045-1.046l1.514.071a3 3 0 0 0 2.358-.977zm-1.554 7.996a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.414L11 12.586z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bestRated_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const BestRatedFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bestRatedFilled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.782 1.95a3 3 0 0 1 4.436 0l1.02 1.12a1 1 0 0 0 .787.326l1.513-.07a3 3 0 0 1 3.137 3.136l-.07 1.514a1 1 0 0 0 .325.786l1.12 1.02a3 3 0 0 1 0 4.436l-1.12 1.02a1 1 0 0 0-.326.786l.07 1.514a3 3 0 0 1-3.136 3.137l-1.513-.071a1 1 0 0 0-.786.325l-1.02 1.12a3 3 0 0 1-4.437 0l-1.02-1.12a1 1 0 0 0-.786-.325l-1.513.07a3 3 0 0 1-3.137-3.136l.07-1.514a1 1 0 0 0-.325-.786l-1.12-1.02a3 3 0 0 1 0-4.436l1.12-1.02a1 1 0 0 0 .326-.786l-.071-1.514a3 3 0 0 1 3.137-3.137l1.513.071a1 1 0 0 0 .786-.325zm-1.489 9.343a1 1 0 0 1 1.414 0L11 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bestRatedFilled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BestRatedOutlinedIcon,
  filled: BestRatedFilledIcon,
} as const;

const BestRatedSVG: React.FC<BestRatedProps> = ({
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

const BestRated = styled(BestRatedSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default BestRated;
