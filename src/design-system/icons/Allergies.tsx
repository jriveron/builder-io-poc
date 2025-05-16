// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AllergiesIconVariant = 'outlined';
type AllergiesProps = IconProps & { variant?: AllergiesIconVariant };

const AllergiesOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 0 0-9 9c0 2.093.714 4.018 1.912 5.547L17.688 5.025A8.96 8.96 0 0 0 12 3m7.088 3.453L6.312 18.975A8.96 8.96 0 0 0 12 21a9 9 0 0 0 9-9 8.96 8.96 0 0 0-1.912-5.547M1 12C1 5.925 5.925 1 12 1a10.97 10.97 0 0 1 7.855 3.3A10.97 10.97 0 0 1 23 12c0 6.075-4.925 11-11 11a10.97 10.97 0 0 1-7.856-3.3A10.97 10.97 0 0 1 1 12"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AllergiesOutlinedIcon,
} as const;

const AllergiesSVG: React.FC<AllergiesProps> = ({
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

const Allergies = styled(AllergiesSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Allergies;
