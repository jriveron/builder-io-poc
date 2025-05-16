// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type LikeIconVariant = 'outlined' | 'filled';
type LikeProps = IconProps & { variant?: LikeIconVariant };

const LikeOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.15 4.026a.631.631 0 0 1 1.146.506L12.274 7.94A1.6 1.6 0 0 0 13.806 10h4.576a1 1 0 0 1 .964 1.263l-1.909 7a1 1 0 0 1-.965.737H8V9.778a3 3 0 0 0 1.44-1.234zM6 10H4.5v9H6zm8.746-7.293a2.63 2.63 0 0 0-4.31.29l-2.71 4.518A1 1 0 0 1 6.867 8H4.1a1.6 1.6 0 0 0-1.6 1.6v9.8A1.6 1.6 0 0 0 4.1 21h12.372a3 3 0 0 0 2.895-2.21l1.909-7A3 3 0 0 0 18.38 8h-4.037l.868-2.893a2.63 2.63 0 0 0-.466-2.4"
      clipRule="evenodd"
    />
  </svg>
);
const LikeFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 8v13H6.5V8H4a1.5 1.5 0 0 0-1.5 1.5v10A1.5 1.5 0 0 0 4 21h12.473a3 3 0 0 0 2.894-2.21l1.909-7A3 3 0 0 0 18.382 8h-4.038l.868-2.893a2.631 2.631 0 0 0-4.776-2.11L8.57 6.107a4 4 0 0 0-.556 1.728A1 1 0 0 0 8 8"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: LikeOutlinedIcon,
  filled: LikeFilledIcon,
} as const;

const LikeSVG: React.FC<LikeProps> = ({
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

const Like = styled(LikeSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Like;
