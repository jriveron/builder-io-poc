// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type RefreshIconVariant = 'outlined';
type RefreshProps = IconProps & { variant?: RefreshIconVariant };

const RefreshOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.044 11.099A9.001 9.001 0 0 1 19.484 7H17a1 1 0 1 0 0 2h4.4A1.6 1.6 0 0 0 23 7.4V3a1 1 0 1 0-2 0v2.675A10.99 10.99 0 0 0 12 1C6.294 1 1.605 5.341 1.053 10.901a1 1 0 0 0 1.99.198M12.049 21a9 9 0 0 0 8.956-8.099 1 1 0 1 1 1.99.198C22.443 18.659 17.754 23 12.049 23c-3.722 0-7.01-1.848-9-4.675V21a1 1 0 1 1-2 0v-4.4a1.6 1.6 0 0 1 1.6-1.6h4.4a1 1 0 1 1 0 2H4.565a8.99 8.99 0 0 0 7.484 4"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: RefreshOutlinedIcon,
} as const;

const RefreshSVG: React.FC<RefreshProps> = ({
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

const Refresh = styled(RefreshSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Refresh;
