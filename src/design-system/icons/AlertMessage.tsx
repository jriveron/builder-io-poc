// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AlertMessageIconVariant = 'outlined';
type AlertMessageProps = IconProps & { variant?: AlertMessageIconVariant };

const AlertMessageOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 1 9 9 8.96 8.96 0 0 1-4.5-1.203 1 1 0 0 0-.683-.118l-3.067.571.57-3.067a1 1 0 0 0-.117-.684A8.95 8.95 0 0 1 3 12m9-11C5.925 1 1 5.925 1 12c0 1.867.466 3.629 1.289 5.17l-.772 4.147a1 1 0 0 0 1.166 1.166l4.146-.772A10.96 10.96 0 0 0 12 23c6.075 0 11-4.925 11-11S18.075 1 12 1m0 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m.679 8.256a1 1 0 0 1 .074 1.412l-.01.011a1 1 0 0 1-1.486-1.338l.01-.011a1 1 0 0 1 1.412-.074"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AlertMessageOutlinedIcon,
} as const;

const AlertMessageSVG: React.FC<AlertMessageProps> = ({
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

const AlertMessage = styled(AlertMessageSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AlertMessage;
