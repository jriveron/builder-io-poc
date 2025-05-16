// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ShareIOsIconVariant = 'outlined';
type ShareIOsProps = IconProps & { variant?: ShareIOsIconVariant };

const ShareIOsOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 1 1 2 0v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.707 2.293a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 0 0 1.414 1.414L11 5.414V15a1 1 0 1 0 2 0V5.414l1.793 1.793a1 1 0 1 0 1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ShareIOsOutlinedIcon,
} as const;

const ShareIOsSVG: React.FC<ShareIOsProps> = ({
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

const ShareIOs = styled(ShareIOsSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ShareIOs;
