// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type PeopleIconVariant = 'outlined';
type PeopleProps = IconProps & { variant?: PeopleIconVariant };

const PeopleOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.906 8.75a4 4 0 1 0-5.811 0 6.02 6.02 0 0 0-2.83 3.48 8 8 0 0 0-.93-.504 5 5 0 1 0-6.669 0A8 8 0 0 0 0 19v1a1 1 0 1 0 2 0v-1a6 6 0 0 1 12 0v1a1 1 0 1 0 2 0v-1a7.97 7.97 0 0 0-1.99-5.28A4 4 0 0 1 22 14v.5a1 1 0 1 0 2 0V14c0-2.26-1.25-4.227-3.094-5.25M16 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: PeopleOutlinedIcon,
} as const;

const PeopleSVG: React.FC<PeopleProps> = ({
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

const People = styled(PeopleSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default People;
