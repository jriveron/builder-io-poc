// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type OccasionIconVariant = 'outlined';
type OccasionProps = IconProps & { variant?: OccasionIconVariant };

const OccasionOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.652 1.241 12 2l.57-.664zm-1.304 0-.001.002-.003.002-.007.006-.023.02-.076.07a9.674 9.674 0 0 0-1.024 1.108C9.687 3.119 9 4.19 9 5.375c0 .96.211 1.858.731 2.54.337.442.771.75 1.269.923V10H5a3 3 0 0 0-3 3v1c0 1.014.378 1.94 1 2.646V20a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-3.354c.622-.705 1-1.632 1-2.646v-1a3 3 0 0 0-3-3h-6V8.838a2.7 2.7 0 0 0 1.269-.923c.52-.682.731-1.58.731-2.54 0-1.184-.687-2.257-1.213-2.926a9.7 9.7 0 0 0-1.101-1.178l-.023-.02-.007-.006-.003-.002-.001-.002a1 1 0 0 0-1.304 0M12 12H5a1 1 0 0 0-1 1v1a2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0v-1a1 1 0 0 0-1-1zm0-10-.652-.759.084.097zm.678 4.703c-.137.18-.331.297-.678.297s-.54-.117-.678-.297c-.164-.216-.322-.63-.322-1.328 0-.473.313-1.088.787-1.691A7 7 0 0 1 12 3.425q.106.122.213.259c.475.603.787 1.218.787 1.691 0 .697-.158 1.112-.322 1.328M18 18q.519-.002 1-.126V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.126a4.01 4.01 0 0 0 4-1.228A4 4 0 0 0 12 18a4 4 0 0 0 3-1.354A4 4 0 0 0 18 18"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: OccasionOutlinedIcon,
} as const;

const OccasionSVG: React.FC<OccasionProps> = ({
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

const Occasion = styled(OccasionSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Occasion;
