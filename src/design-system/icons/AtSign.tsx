// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AtSignIconVariant = 'outlined';
type AtSignProps = IconProps & { variant?: AtSignIconVariant };

const AtSignOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a8 8 0 0 1 8 8c0 2.33-1.212 3.23-2.164 3.389-.52.086-.992-.03-1.313-.262C16.226 14.912 16 14.56 16 14V8a1 1 0 0 0-1.884-.468A4.5 4.5 0 0 0 12 7c-2.03 0-4 1.404-4 3.5v3c0 2.096 1.97 3.5 4 3.5.98 0 1.945-.327 2.682-.9.19.247.416.465.67.648.804.581 1.831.777 2.812.613C20.212 17.021 22 15.17 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 6.112-2.084 1 1 0 1 0-1.224-1.583A8 8 0 1 1 12 4m2 9.5v-3c0-.665-.717-1.5-2-1.5s-2 .835-2 1.5v3c0 .665.717 1.5 2 1.5s2-.835 2-1.5"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AtSignOutlinedIcon,
} as const;

const AtSignSVG: React.FC<AtSignProps> = ({
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

const AtSign = styled(AtSignSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AtSign;
