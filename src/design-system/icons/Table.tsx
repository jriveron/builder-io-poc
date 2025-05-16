// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type TableIconVariant = 'outlined';
type TableProps = IconProps & { variant?: TableIconVariant };

const TableOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.396 6.241a1 1 0 1 0-1.971.338l.951 5.549-.942 4.255a1 1 0 0 0 1.953.433l.793-3.581H7.28c.144 0 .236.009.291.02l.002.005a.5.5 0 0 1 .015.093c.004.052.005.106.005.191V16.6a1 1 0 1 0 2 0v-3.087c0-.337.004-1.318-.938-1.946-.448-.3-.998-.332-1.375-.332H6.252zm7.583 3.876h2.609a1 1 0 0 0 0-2H8.369a1 1 0 1 0 0 2h2.61v6.482a1 1 0 1 0 2 0zm6.78-4.692a1 1 0 0 1 .817 1.154l-.952 5.549.943 4.255a1 1 0 0 1-1.953.433l-.793-3.581h-1.102c-.144 0-.236.009-.291.02l-.002.005a.5.5 0 0 0-.015.093 2 2 0 0 0-.005.191V16.6a1 1 0 1 1-2 0v-3.087c0-.337-.004-1.318.938-1.946.448-.3.998-.332 1.375-.332h1.03l.856-4.994a1 1 0 0 1 1.154-.816"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: TableOutlinedIcon,
} as const;

const TableSVG: React.FC<TableProps> = ({
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

const Table = styled(TableSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Table;
