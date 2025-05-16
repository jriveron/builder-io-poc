// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type NotificationIconVariant = 'outlined';
type NotificationProps = IconProps & { variant?: NotificationIconVariant };

const NotificationOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.028 3.19C8.335 1.797 10.122 1 12 1s3.665.796 4.972 2.19C18.277 4.584 19 6.458 19 8.4c0 3.596.722 5.837 1.39 7.145.336.656.662 1.086.889 1.34a3 3 0 0 0 .31.306l.002.002a1 1 0 0 1-.59 1.807H3a1 1 0 0 1-.592-1.807l.003-.002q.012-.008.053-.045c.053-.047.143-.132.256-.26.227-.255.553-.685.889-1.341C4.279 14.237 5 11.996 5 8.4c0-1.943.723-3.817 2.028-5.21M18.91 17q-.15-.252-.3-.545C17.779 14.83 17 12.27 17 8.4c0-1.452-.541-2.833-1.487-3.842C14.57 3.552 13.305 3 12 3s-2.57.552-3.513 1.558C7.542 5.567 7 6.948 7 8.4c0 3.87-.778 6.43-1.61 8.055q-.15.293-.3.545zM9.768 20.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 0 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: NotificationOutlinedIcon,
} as const;

const NotificationSVG: React.FC<NotificationProps> = ({
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

const Notification = styled(NotificationSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Notification;
