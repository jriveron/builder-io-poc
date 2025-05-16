// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MuteIconVariant = 'outlined';
type MuteProps = IconProps & { variant?: MuteIconVariant };

const MuteOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4.857c0-1.593-1.771-2.546-3.1-1.67l-6 3.956H4a3 3 0 0 0-3 3v3.714a3 3 0 0 0 3 3h2.9l6 3.956c1.329.876 3.1-.077 3.1-1.67zM8 8.813l6-3.956v14.286l-6-3.956a2 2 0 0 0-1.1-.33H4a1 1 0 0 1-1-1v-3.714a1 1 0 0 1 1-1h2.9a2 2 0 0 0 1.1-.33m10.707.48a1 1 0 0 0-1.414 1.414L18.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L20 13.414l1.293 1.293a1 1 0 1 0 1.414-1.414L21.415 12l1.292-1.293a1 1 0 0 0-1.414-1.414L20 10.586z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MuteOutlinedIcon,
} as const;

const MuteSVG: React.FC<MuteProps> = ({
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

const Mute = styled(MuteSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Mute;
