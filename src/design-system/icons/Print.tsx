// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type PrintIconVariant = 'outlined';
type PrintProps = IconProps & { variant?: PrintIconVariant };

const PrintOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 9V4h10v5zm12-5.4v5.816c1.766.772 3 2.534 3 4.584v6.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 20.4V14a5 5 0 0 1 3-4.584V3.6A1.6 1.6 0 0 1 6.6 2h10.8A1.6 1.6 0 0 1 19 3.6M4 14a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6H4zm3 2a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm10.745-2.341a.994.994 0 1 0-1.48-1.33l-.01.01a.994.994 0 1 0 1.48 1.33z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: PrintOutlinedIcon,
} as const;

const PrintSVG: React.FC<PrintProps> = ({
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

const Print = styled(PrintSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Print;
