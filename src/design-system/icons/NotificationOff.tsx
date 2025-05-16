// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type NotificationOffIconVariant = 'outlined';
type NotificationOffProps = IconProps & {
  variant?: NotificationOffIconVariant;
};

const NotificationOffOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.55 5.54a1 1 0 0 1 .68 1.24A5.8 5.8 0 0 0 7 8.4c0 3.87-.778 6.43-1.61 8.055q-.15.293-.3.545H18a1 1 0 1 1 0 2H3a1 1 0 0 1-.591-1.807l.003-.002q.012-.008.053-.045c.053-.047.143-.132.256-.26.227-.255.553-.685.889-1.341C4.279 14.237 5 11.996 5 8.4c0-.745.106-1.48.31-2.18a1 1 0 0 1 1.24-.68M7.028 3.19C8.335 1.797 10.122 1 12 1s3.665.796 4.972 2.19C18.277 4.584 19 6.458 19 8.4c0 3.596.721 5.837 1.39 7.145.336.656.662 1.086.889 1.34a3 3 0 0 0 .31.306l.002.002a1 1 0 0 1-1.17 1.622l.561-.79c-.561.79-.563.789-.563.789l-.001-.001-.003-.002-.007-.005-.017-.013a2 2 0 0 1-.184-.152 5 5 0 0 1-.423-.427 8.4 8.4 0 0 1-1.174-1.759C17.779 14.83 17 12.27 17 8.4c0-1.452-.541-2.833-1.487-3.842C14.57 3.552 13.305 3 12 3s-2.57.552-3.513 1.558a1 1 0 0 1-1.46-1.367M9.768 20.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 0 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: NotificationOffOutlinedIcon,
} as const;

const NotificationOffSVG: React.FC<NotificationOffProps> = ({
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

const NotificationOff = styled(NotificationOffSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default NotificationOff;
