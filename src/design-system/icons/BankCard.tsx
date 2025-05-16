// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BankCardIconVariant = 'outlined';
type BankCardProps = IconProps & { variant?: BankCardIconVariant };

const BankCardOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7H6a1 1 0 0 1 0-2h15V7a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.5 14a.5.5 0 0 0-.333.127 1 1 0 1 1-1.334-1.49 2.5 2.5 0 1 1 0 3.726 1 1 0 0 1 1.334-1.49A.5.5 0 1 0 17.5 14"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.5 14c.129 0 .244.047.333.127a1 1 0 1 0 1.334-1.49 2.5 2.5 0 1 0 0 3.726 1 1 0 0 0-1.334-1.49A.5.5 0 1 1 15.5 14"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BankCardOutlinedIcon,
} as const;

const BankCardSVG: React.FC<BankCardProps> = ({
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

const BankCard = styled(BankCardSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default BankCard;
