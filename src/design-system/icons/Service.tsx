// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ServiceIconVariant = 'outlined';
type ServiceProps = IconProps & { variant?: ServiceIconVariant };

const ServiceOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 7a1 1 0 0 1-1-1V4H4v6h6V9a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-4H4v8h6v-1a1 1 0 1 1 2 0v1h2v-2a1 1 0 1 1 2 0v2h4v-4h-5a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h4V9h-4v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h5V4h-8v2a1 1 0 0 1-1 1m11 1v12.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 20.4V3.6A1.6 1.6 0 0 1 3.6 2h16.8A1.6 1.6 0 0 1 22 3.6z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ServiceOutlinedIcon,
} as const;

const ServiceSVG: React.FC<ServiceProps> = ({
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

const Service = styled(ServiceSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Service;
