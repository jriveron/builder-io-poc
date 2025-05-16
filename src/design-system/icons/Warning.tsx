// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type WarningIconVariant = 'outlined' | 'filled';
type WarningProps = IconProps & { variant?: WarningIconVariant };

const WarningOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.4 3.505c1.153-2.007 4.048-2.007 5.201 0l8.043 13.987c1.15 2-.293 4.496-2.6 4.496H3.958c-2.307 0-3.751-2.496-2.601-4.496zm3.467.997a1 1 0 0 0-1.733 0L3.09 18.489a1 1 0 0 0 .867 1.499h16.086a1 1 0 0 0 .866-1.499zM12 7.988a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m.753 9.668a1 1 0 1 0-1.486-1.338l-.01.01a1 1 0 0 0 1.486 1.339z"
      clipRule="evenodd"
    />
  </svg>
);
const WarningFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.601 3.505c-1.153-2.007-4.048-2.007-5.201 0L1.357 17.492c-1.15 2 .294 4.496 2.6 4.496h16.087c2.307 0 3.75-2.496 2.6-4.496zM12 7.988a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m.679 8.255a1 1 0 0 1 .074 1.413l-.01.01a1 1 0 1 1-1.486-1.337l.01-.011a1 1 0 0 1 1.412-.075"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: WarningOutlinedIcon,
  filled: WarningFilledIcon,
} as const;

const WarningSVG: React.FC<WarningProps> = ({
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

const Warning = styled(WarningSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Warning;
