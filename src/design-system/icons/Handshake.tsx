// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type HandshakeIconVariant = 'outlined';
type HandshakeProps = IconProps & { variant?: HandshakeIconVariant };

const HandshakeOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.077 4.88a5 5 0 0 0-6.299-.633 4.85 4.85 0 0 0-6.677.174l-2.33 2.33a4 4 0 0 0-.966 4.093l.12.363a1 1 0 0 0 1.898-.633l-.12-.362a2 2 0 0 1 .483-2.047l2.33-2.33a2.85 2.85 0 0 1 4.031 0l2.934 2.934a.5.5 0 0 1-.707.707l-2.475-2.475a1 1 0 0 0-1.414 0l-5.303 5.304a2.5 2.5 0 0 0 2.315 4.207c.12.269.292.521.513.742a2.5 2.5 0 0 0 1.414.707c.074.518.31 1.017.707 1.415.398.397.897.633 1.414.707a2.5 2.5 0 0 0 4.243 1.414l7.112-7.112a3.7 3.7 0 0 0 1.057-2.2 5.7 5.7 0 0 0-1.635-4.66zm-4.829.828 1.647 1.647a2.5 2.5 0 0 1-3.535 3.535L9.592 9.123l-4.596 4.596a.5.5 0 1 0 .707.707l3.182-3.182a1 1 0 0 1 1.414 1.414l-2.475 2.475a.5.5 0 1 0 .707.707l2.475-2.475a1 1 0 0 1 1.414 1.414l-2.474 2.475a.5.5 0 0 0 .707.707l2.474-2.474a1 1 0 1 1 1.415 1.414l-2.475 2.474a.5.5 0 0 0 .707.708l7.112-7.112c.27-.271.441-.626.483-1.006a3.7 3.7 0 0 0-1.06-3.026l-2.646-2.645a3 3 0 0 0-3.415-.586"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: HandshakeOutlinedIcon,
} as const;

const HandshakeSVG: React.FC<HandshakeProps> = ({
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

const Handshake = styled(HandshakeSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Handshake;
