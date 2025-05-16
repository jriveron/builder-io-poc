// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BookingModuleIconVariant = 'outlined';
type BookingModuleProps = IconProps & { variant?: BookingModuleIconVariant };

const BookingModuleOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.2 3a1 1 0 0 0-1 1v9.222h15.6V4a1 1 0 0 0-1-1zm14.844 12.222H3.957l-1.275 4.506A1 1 0 0 0 3.644 21h16.712a1 1 0 0 0 .962-1.272zM2.2 14.084V4a3 3 0 0 1 3-3h13.6a3 3 0 0 1 3 3v10.084l1.443 5.1A3 3 0 0 1 20.356 23H3.644a3 3 0 0 1-2.886-3.817zM10 19a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M9.47 5.97a.75.75 0 0 1 .677-.205l3.333.666a.75.75 0 0 1 .09 1.447l-.848.283L14.53 9.97a.75.75 0 1 1-1.06 1.06L11.66 9.222l-.283.848a.75.75 0 0 1-1.447-.09l-.666-3.333a.75.75 0 0 1 .205-.677"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BookingModuleOutlinedIcon,
} as const;

const BookingModuleSVG: React.FC<BookingModuleProps> = ({
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

const BookingModule = styled(BookingModuleSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default BookingModule;
