// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type HelpIconVariant = 'outlined';
type HelpProps = IconProps & { variant?: HelpIconVariant };

const HelpOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.394 4.959A8.96 8.96 0 0 1 12 3c2.12 0 4.068.733 5.606 1.958l-2.914 2.828A5 5 0 0 0 12 7c-.991 0-1.915.289-2.693.786zM4.977 6.371A8.96 8.96 0 0 0 3 12c0 2.13.74 4.087 1.977 5.629l2.894-2.808A4.98 4.98 0 0 1 7 12c0-1.046.321-2.018.871-2.82zm4.946 3.464a3 3 0 1 0 4.154 4.33 3 3 0 0 0-4.154-4.33m6.205-.656 2.894-2.809A8.96 8.96 0 0 1 21 12c0 2.13-.74 4.088-1.978 5.63l-2.894-2.808c.55-.804.872-1.775.872-2.822a4.98 4.98 0 0 0-.872-2.821m-1.436 7.035 2.914 2.828A8.96 8.96 0 0 1 12 21a8.96 8.96 0 0 1-5.606-1.959l2.913-2.827A4.98 4.98 0 0 0 12 17c.991 0 1.915-.288 2.692-.786M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: HelpOutlinedIcon,
} as const;

const HelpSVG: React.FC<HelpProps> = ({
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

const Help = styled(HelpSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Help;
