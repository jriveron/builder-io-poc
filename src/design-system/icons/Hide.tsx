// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type HideIconVariant = 'outlined';
type HideProps = IconProps & { variant?: HideIconVariant };

const HideOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.59 7.088a1 1 0 0 1 1.322.502c3.246 7.214 12.93 7.214 16.176 0a1 1 0 0 1 1.824.82c-.846 1.88-2.056 3.358-3.475 4.433l1.872 2.568a1 1 0 1 1-1.617 1.178l-1.96-2.69c-1.181.583-2.448.934-3.732 1.054V17.5a1 1 0 1 1-2 0v-2.547a10.7 10.7 0 0 1-3.73-1.055L5.307 16.59a1 1 0 1 1-1.616-1.178l1.871-2.568C4.145 11.768 2.934 10.29 2.088 8.41a1 1 0 0 1 .502-1.322"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: HideOutlinedIcon,
} as const;

const HideSVG: React.FC<HideProps> = ({
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

const Hide = styled(HideSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Hide;
