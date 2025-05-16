// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type GiftIconVariant = 'outlined';
type GiftProps = IconProps & { variant?: GiftIconVariant };

const GiftOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11a1 1 0 0 1 1 1v9h14v-9a1 1 0 1 1 2 0v9.4a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 21.4V12a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 7.6A1.6 1.6 0 0 1 2.6 6h18.8A1.6 1.6 0 0 1 23 7.6v3.8a1.6 1.6 0 0 1-1.6 1.6H2.6A1.6 1.6 0 0 1 1 11.4zM3 8v3h18V8z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 6a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5 3a1.5 1.5 0 0 0 0 3h3.154a8 8 0 0 0-.468-1.018C9.557 3.838 8.694 3 7.5 3M12 7l.98-.197V6.8l-.001-.005-.004-.016a4 4 0 0 0-.055-.236 10.696 10.696 0 0 0-.982-2.525C11.194 2.662 9.807 1 7.5 1a3.5 3.5 0 1 0 0 7H12a1 1 0 0 0 .98-1.197z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.061 4.018C12.807 2.662 14.194 1 16.5 1a3.5 3.5 0 1 1 0 7H12a1 1 0 0 1-.98-1.196L12 7l-.98-.196V6.8l.001-.005.004-.016a4 4 0 0 1 .055-.236 10.696 10.696 0 0 1 .982-2.525M13.346 6H16.5a1.5 1.5 0 0 0 0-3c-1.194 0-2.057.838-2.686 1.982A8 8 0 0 0 13.346 6m-.366 1.198"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: GiftOutlinedIcon,
} as const;

const GiftSVG: React.FC<GiftProps> = ({
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

const Gift = styled(GiftSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Gift;
