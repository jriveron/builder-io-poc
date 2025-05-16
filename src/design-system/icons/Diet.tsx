// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DietIconVariant = 'outlined';
type DietProps = IconProps & { variant?: DietIconVariant };

const DietOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.659 11.808a5.936 5.936 0 0 1 5.34-6.477l6.172-.595.556 5.776c.32 3.324-2.177 6.307-5.525 6.63a6 6 0 0 1-3.634-.809c.62-1.168 1.45-2.282 2.68-3.67a1 1 0 1 0-1.497-1.326c-1.163 1.313-2.047 2.46-2.741 3.679a5.84 5.84 0 0 1-1.351-3.208m.43 5.145A7.85 7.85 0 0 1 3.669 12a7.936 7.936 0 0 1 7.139-8.66l6.57-.633a1.6 1.6 0 0 1 1.747 1.44l.594 6.174c.428 4.448-2.901 8.385-7.325 8.811a8 8 0 0 1-4.624-.953c-.299.864-.55 1.84-.79 3.02a1 1 0 1 1-1.96-.398c.3-1.482.632-2.72 1.07-3.848"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DietOutlinedIcon,
} as const;

const DietSVG: React.FC<DietProps> = ({
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

const Diet = styled(DietSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Diet;
