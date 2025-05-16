// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type StarsIconVariant = 'outlined' | 'filled';
type StarsProps = IconProps & { variant?: StarsIconVariant };

const StarsOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.54 5.842.46-.977.46.977a1 1 0 0 0 .754.562l1.123.171-.842.858a1 1 0 0 0-.273.862l.189 1.152-.928-.511a1 1 0 0 0-.965 0l-.928.51.188-1.15a1 1 0 0 0-.273-.863l-.84-.858 1.122-.171a1 1 0 0 0 .753-.562m1.69-3.056a1.357 1.357 0 0 0-2.46 0l-.812 1.721-1.797.275c-1.165.178-1.507 1.58-.764 2.338l1.326 1.352-.315 1.92c-.168 1.028.906 2.04 1.997 1.44L12 10.953l1.596.879c1.09.6 2.165-.412 1.997-1.44l-.315-1.92 1.326-1.352c.743-.757.4-2.16-.764-2.338l-1.797-.275zM6 13.866l-.46.976a1 1 0 0 1-.754.562l-1.122.171.841.858a1 1 0 0 1 .273.862l-.188 1.152.928-.511a1 1 0 0 1 .965 0l.928.51-.189-1.15a1 1 0 0 1 .273-.863l.842-.858-1.123-.171a1 1 0 0 1-.753-.562zm-1.23-2.08a1.357 1.357 0 0 1 2.46 0l.813 1.721 1.797.275c1.165.178 1.507 1.58.764 2.338l-1.326 1.352.315 1.92c.168 1.028-.907 2.04-1.997 1.44L6 19.952l-1.595.878c-1.09.6-2.165-.41-1.997-1.438l.315-1.921-1.326-1.352c-.743-.757-.401-2.16.763-2.338l1.798-.275zM18 13.866l-.46.976a1 1 0 0 1-.753.562l-1.123.171.842.858a1 1 0 0 1 .273.862l-.19 1.152.93-.511a1 1 0 0 1 .964 0l.928.51-.189-1.15a1 1 0 0 1 .273-.863l.842-.858-1.123-.171a1 1 0 0 1-.753-.562zm-1.23-2.08a1.357 1.357 0 0 1 2.46 0l.813 1.721 1.797.275c1.165.178 1.507 1.58.764 2.338l-1.326 1.352.315 1.92c.168 1.028-.907 2.04-1.997 1.44L18 19.952l-1.595.878c-1.09.6-2.165-.41-1.997-1.438l.315-1.921-1.326-1.352c-.743-.757-.401-2.16.764-2.338l1.797-.275z"
      clipRule="evenodd"
    />
  </svg>
);
const StarsFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.004 2.892a1.106 1.106 0 0 0-2.01 0l-.868 1.842-1.929.295c-.948.145-1.234 1.293-.623 1.916L8.99 8.387l-.335 2.046c-.14.849.745 1.666 1.63 1.18l1.715-.945 1.716.945c.885.486 1.769-.331 1.63-1.18l-.336-2.046 1.415-1.442c.612-.623.325-1.77-.623-1.916l-1.929-.295zm-6 9a1.106 1.106 0 0 0-2.01 0l-.868 1.842-1.929.295c-.948.145-1.234 1.293-.623 1.916l1.415 1.442-.335 2.046c-.14.849.745 1.666 1.63 1.18l1.715-.945 1.716.945c.885.486 1.769-.331 1.63-1.18l-.335-2.046 1.414-1.442c.612-.623.325-1.77-.623-1.916l-1.929-.295zm12 0a1.106 1.106 0 0 0-2.01 0l-.868 1.842-1.929.295c-.948.145-1.234 1.293-.623 1.916l1.415 1.442-.335 2.046c-.14.849.745 1.666 1.63 1.18l1.715-.945 1.716.945c.885.486 1.769-.331 1.63-1.18l-.335-2.046 1.414-1.442c.612-.623.325-1.77-.623-1.916l-1.929-.295z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: StarsOutlinedIcon,
  filled: StarsFilledIcon,
} as const;

const StarsSVG: React.FC<StarsProps> = ({
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

const Stars = styled(StarsSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Stars;
