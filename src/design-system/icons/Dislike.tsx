// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DislikeIconVariant = 'outlined' | 'filled';
type DislikeProps = IconProps & { variant?: DislikeIconVariant };

const DislikeOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.15 19.474a.631.631 0 0 0 1.146-.506l-1.022-3.408a1.6 1.6 0 0 1 1.532-2.06h4.576a1 1 0 0 0 .964-1.263l-1.909-7a1 1 0 0 0-.965-.737H8v9.222a3 3 0 0 1 1.44 1.235zM6 13.5v-9H4.5v9zm8.746 7.293a2.63 2.63 0 0 1-4.31-.29l-2.71-4.517a1 1 0 0 0-.858-.486H4.1a1.6 1.6 0 0 1-1.6-1.6V4.1a1.6 1.6 0 0 1 1.6-1.6h12.372a3 3 0 0 1 2.895 2.21l1.909 7a3 3 0 0 1-2.895 3.79h-4.037l.868 2.893a2.63 2.63 0 0 1-.466 2.4"
      clipRule="evenodd"
    />
  </svg>
);
const DislikeFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 15.5v-13H6.5v13H4A1.5 1.5 0 0 1 2.5 14V4A1.5 1.5 0 0 1 4 2.5h12.473a3 3 0 0 1 2.894 2.21l1.909 7a3 3 0 0 1-2.894 3.79h-4.038l.868 2.893a2.631 2.631 0 0 1-4.776 2.11l-1.866-3.11a4 4 0 0 1-.556-1.728A1 1 0 0 1 8 15.5"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DislikeOutlinedIcon,
  filled: DislikeFilledIcon,
} as const;

const DislikeSVG: React.FC<DislikeProps> = ({
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

const Dislike = styled(DislikeSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Dislike;
