// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type GroupHubIconVariant = 'outlined';
type GroupHubProps = IconProps & { variant?: GroupHubIconVariant };

const GroupHubOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.88 4a1 1 0 0 0 1 1h3.706L3.293 19.293a1 1 0 1 0 1.414 1.414L19 6.414v3.706a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6.12a1 1 0 0 0-1 1M21 14.52a1 1 0 0 0-2 0v3.066l-3.293-3.293a1 1 0 0 0-1.414 1.414L17.586 19H14.52a1 1 0 1 0 0 2H20a1 1 0 0 0 1-1zM8.293 9.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: GroupHubOutlinedIcon,
} as const;

const GroupHubSVG: React.FC<GroupHubProps> = ({
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

const GroupHub = styled(GroupHubSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default GroupHub;
