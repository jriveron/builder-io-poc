// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ExitIconVariant = 'outlined';
type ExitProps = IconProps & { variant?: ExitIconVariant };

const ExitOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 1 0-2 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm10.707 10.707 3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L16.586 11H12a1 1 0 1 0 0 2h4.586l-1.293 1.293a1 1 0 0 0 1.414 1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ExitOutlinedIcon,
} as const;

const ExitSVG: React.FC<ExitProps> = ({
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

const Exit = styled(ExitSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Exit;
