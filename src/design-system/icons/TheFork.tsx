// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type TheForkIconVariant = 'outlined';
type TheForkProps = IconProps & { variant?: TheForkIconVariant };

const TheForkOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.131 2.65C5.416 2.65 2 7.37 2 12.06c0 9.547 10.731 9.237 10.731 9.237l-.15-1.259a2.045 2.045 0 0 0-1.535-1.752c-1.455-.354-3.563-1.54-3.563-5.523 0-2.71-.01-6.68-.01-6.68h1.696l1.024 7.367c.084.477.456 1.136 1.462 1.045L10.05 4.741h1.67l1.783 7.904a.943.943 0 0 0 .912-1.157l-1.468-5.945h1.837l1.832 5.205c.539 1.323.653 2.648.41 3.855-.23 1.141-.76 2.088-1.5 2.755a2.07 2.07 0 0 0-.609 2.066l.383 1.439C19.756 19.568 22 15.736 22 11.942c0-4.631-3.328-9.292-9.869-9.292"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: TheForkOutlinedIcon,
} as const;

const TheForkSVG: React.FC<TheForkProps> = ({
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

const TheFork = styled(TheForkSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default TheFork;
