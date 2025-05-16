// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ValueForMoneyIconVariant = 'outlined';
type ValueForMoneyProps = IconProps & { variant?: ValueForMoneyIconVariant };

const ValueForMoneyOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1v-5a3 3 0 0 1 3-3h12V6a1 1 0 0 0-1-1zm-3 9a3 3 0 0 0 3 3v1a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3V6a3 3 0 0 0-3-3h-14a3 3 0 0 0-3 3zm6-5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1m13.179 4.256a1 1 0 0 1 .074 1.412l-.01.011a1 1 0 0 1-1.486-1.338l.01-.011a1 1 0 0 1 1.412-.074M8.753 14.668a1 1 0 0 0-1.486-1.338l-.01.011a1 1 0 1 0 1.486 1.338zM14.5 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ValueForMoneyOutlinedIcon,
} as const;

const ValueForMoneySVG: React.FC<ValueForMoneyProps> = ({
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

const ValueForMoney = styled(ValueForMoneySVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ValueForMoney;
