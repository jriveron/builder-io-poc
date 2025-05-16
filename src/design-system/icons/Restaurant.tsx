// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type RestaurantIconVariant = 'outlined';
type RestaurantProps = IconProps & { variant?: RestaurantIconVariant };

const RestaurantOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.388 2h5.097a1.6 1.6 0 0 1 1.578 1.337l.705 4.227c.074.447-.04.993-.473 1.378A4.23 4.23 0 0 1 19.493 10c-.974 0-1.77-.324-2.308-.632a5 5 0 0 1-.816-.583l-.054-.05-.018-.017-.006-.006-.003-.003c-.001-.001-.002-.002.705-.709l-.707.707-.252-.252zm2.559 5.487q.099.069.23.145c.336.192.79.368 1.316.368.559 0 .983-.2 1.256-.385L20.146 4h-2.548z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.993 2h6.405l.637 6.372-.335.335L16.993 8l.707.707-.002.002-.003.003-.006.006-.018.017-.053.05q-.066.061-.18.152c-.15.12-.365.276-.636.431a4.67 4.67 0 0 1-2.309.632c-.974 0-1.77-.324-2.309-.632a5 5 0 0 1-.815-.583l-.054-.05-.018-.017-.006-.006-.003-.003c-.001-.001-.002-.002.705-.709l-.707.707-.293-.293zm2 5.518q.082.056.184.114c.336.192.79.368 1.316.368s.98-.176 1.316-.368q.072-.041.134-.081L15.588 4h-2.595z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.588 2h6.405v6.414l-.293.293L11.993 8l.707.707v.001l-.002.001-.003.003-.006.006-.018.017-.053.05q-.066.061-.18.152c-.15.12-.365.276-.636.431A4.67 4.67 0 0 1 9.493 10c-.974 0-1.77-.324-2.309-.632a5 5 0 0 1-.815-.583l-.054-.05-.018-.017-.006-.006-.003-.003c-.001-.001-.002-.002.705-.709l-.707.707-.335-.335zm1.455 5.55.134.082c.336.192.79.368 1.316.368s.98-.176 1.316-.368q.103-.058.184-.114V4H8.398z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.923 3.337A1.6 1.6 0 0 1 3.501 2h5.097l-.646 6.455-.252.252L6.993 8l.707.707-.002.002-.003.003-.006.006-.018.017-.054.05q-.066.061-.179.152a5 5 0 0 1-.636.431A4.67 4.67 0 0 1 4.493 10c-1.41 0-2.37-.676-2.802-1.058a1.5 1.5 0 0 1-.473-1.378zm4.116 4.15L6.388 4H3.84l-.602 3.615C3.51 7.8 3.934 8 4.493 8c.526 0 .98-.176 1.316-.368q.132-.076.23-.145"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9h2v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.833 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6h-2v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6h-2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: RestaurantOutlinedIcon,
} as const;

const RestaurantSVG: React.FC<RestaurantProps> = ({
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

const Restaurant = styled(RestaurantSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Restaurant;
