// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ErrorIconVariant = 'outlined' | 'filled';
type ErrorProps = IconProps & { variant?: ErrorIconVariant };

const ErrorOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M9.877 8.464A1 1 0 1 0 8.463 9.88L10.585 12l-2.122 2.121a1 1 0 1 0 1.414 1.415L12 13.414l2.121 2.122a1 1 0 1 0 1.414-1.415L13.413 12l2.121-2.121a1 1 0 1 0-1.414-1.415L12 10.586z"
      clipRule="evenodd"
    />
  </svg>
);
const ErrorFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M8.641 8.641a.75.75 0 0 1 1.06 0L12 10.94l2.298-2.298a.75.75 0 0 1 1.06 1.06L13.06 12l2.298 2.298a.75.75 0 0 1-1.06 1.06L12 13.062l-2.298 2.298a.75.75 0 1 1-1.061-1.06L10.939 12 8.641 9.702a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ErrorOutlinedIcon,
  filled: ErrorFilledIcon,
} as const;

const ErrorSVG: React.FC<ErrorProps> = ({
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

const Error = styled(ErrorSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Error;
