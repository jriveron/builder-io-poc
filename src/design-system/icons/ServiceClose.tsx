// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ServiceCloseIconVariant = 'outlined';
type ServiceCloseProps = IconProps & { variant?: ServiceCloseIconVariant };

const ServiceCloseOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 2a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM5 14c0-1.828.7-3.49 1.847-4.738l9.891 9.89A7 7 0 0 1 5 14m-2 0c0-2.38.925-4.545 2.432-6.153l-1.14-1.14a1 1 0 0 1 1.415-1.414l15 15a1 1 0 0 1-1.414 1.414l-1.14-1.14A9 9 0 0 1 3 14m13.5-7.795a1 1 0 1 0-1 1.73A7 7 0 0 1 19 14c0 .606-.077 1.192-.22 1.75a1 1 0 1 0 1.937.5c.185-.72.283-1.475.283-2.25a9 9 0 0 0-4.5-7.795"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ServiceCloseOutlinedIcon,
} as const;

const ServiceCloseSVG: React.FC<ServiceCloseProps> = ({
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

const ServiceClose = styled(ServiceCloseSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ServiceClose;
