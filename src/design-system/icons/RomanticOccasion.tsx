// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type RomanticOccasionIconVariant = 'outlined';
type RomanticOccasionProps = IconProps & {
  variant?: RomanticOccasionIconVariant;
};

const RomanticOccasionOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.673 4a3.67 3.67 0 0 0-3 1.553q.108.121.248.26c.212.213.461.434.732.629.473-.893 1.343-1.552 2.45-1.552 1.71 0 2.845 1.562 2.845 3.152q0 .102-.006.203.005.052.005.104v3.1q.001.37-.088.759c.31-.539.487-1.163.487-1.83V7.674A3.673 3.673 0 0 0 11.673 4m1.094 3.333c-.18-.3-.46-.443-.664-.443-.176 0-.402.1-.575.315.399.074.809.11 1.239.128M9.475 8.645A6.4 6.4 0 0 1 8 7.684v2.695c0 1.172.549 2.215 1.403 2.888 1.52.151 2.392-.18 2.866-.545.504-.388.678-.9.678-1.272V9.34c-1.084-.028-2.275-.152-3.472-.696m3.26 7.308a5.675 5.675 0 0 0 4.611-5.574V7.673A5.673 5.673 0 1 0 6 7.673v2.706a5.675 5.675 0 0 0 4.734 5.595v4.92a1 1 0 1 0 2 0zm2.035 3.493-.002-.01zm.02-.196q.014-.05.036-.118c.112-.34.383-.792.82-1.23.438-.437.89-.708 1.23-.82a2 2 0 0 1 .118-.035q-.012.051-.035.119c-.112.339-.383.79-.82 1.229-.438.437-.89.708-1.23.82a2 2 0 0 1-.118.035m2.4-2.224-.011-.002q.011.001.011.002m-.173-.164-.002-.01zm-2.411 2.411q-.011-.001-.011-.002zm-1.679-.77c.23-.693.695-1.404 1.305-2.015.61-.61 1.321-1.075 2.014-1.305.63-.209 1.578-.313 2.252.36.674.674.569 1.621.36 2.252-.23.693-.695 1.403-1.305 2.014s-1.321 1.075-2.014 1.305c-.63.21-1.578.314-2.252-.36s-.569-1.621-.36-2.252"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: RomanticOccasionOutlinedIcon,
} as const;

const RomanticOccasionSVG: React.FC<RomanticOccasionProps> = ({
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

const RomanticOccasion = styled(RomanticOccasionSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default RomanticOccasion;
