// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MuseumIconVariant = 'outlined';
type MuseumProps = IconProps & { variant?: MuseumIconVariant };

const MuseumOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.479 3.147a1 1 0 0 1 1.043 0l9 5.5a1 1 0 0 1-1.043 1.706L12 5.172l-8.478 5.181a1 1 0 0 1-1.043-1.706zM5 12a1 1 0 0 1 1 1v6h12v-6a1 1 0 1 1 2 0v6.4a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 19.4V13a1 1 0 0 1 1-1m4.32-2.073a1 1 0 0 0-1.82.573v6a1 1 0 1 0 2 0v-2.828l1.68 2.401a1 1 0 0 0 1.64 0l1.68-2.4V16.5a1 1 0 1 0 2 0v-6a1 1 0 0 0-1.82-.573L12 13.757z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MuseumOutlinedIcon,
} as const;

const MuseumSVG: React.FC<MuseumProps> = ({
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

const Museum = styled(MuseumSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Museum;
