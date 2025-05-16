// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ImportDataIconVariant = 'outlined';
type ImportDataProps = IconProps & { variant?: ImportDataIconVariant };

const ImportDataOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.793 12.207 3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L13 12.586V3a1 1 0 1 0-2 0v9.586l-1.793-1.793a1 1 0 0 0-1.414 1.414M3 13a1 1 0 1 1 2 0v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 1 1 2 0v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ImportDataOutlinedIcon,
} as const;

const ImportDataSVG: React.FC<ImportDataProps> = ({
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

const ImportData = styled(ImportDataSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default ImportData;
