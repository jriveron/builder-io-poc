// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type FeedbackIconVariant = 'outlined';
type FeedbackProps = IconProps & { variant?: FeedbackIconVariant };

const FeedbackOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 17V4h16v13h-3.74a1.6 1.6 0 0 0-1.166.503L12 20.792l-3.094-3.288A1.6 1.6 0 0 0 7.741 17zM3.6 2A1.6 1.6 0 0 0 2 3.6v13.8A1.6 1.6 0 0 0 3.6 19h3.968l3.267 3.471.728-.685-.728.685a1.6 1.6 0 0 0 2.33 0l-.728-.685.728.685L16.432 19H20.4a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zm9.273 4.516a1 1 0 0 0-1.75 0L9.837 8.839l-2.323 1.286a1 1 0 0 0 0 1.75l2.323 1.286 1.286 2.324a1 1 0 0 0 1.75 0l1.286-2.324 2.323-1.286a1 1 0 0 0 0-1.75L14.16 8.84zm-1.425 3.543.55-.994.55.994a1 1 0 0 0 .391.39l.995.551-.995.55a1 1 0 0 0-.39.391l-.551.994-.55-.994a1 1 0 0 0-.391-.39l-.994-.55.994-.551a1 1 0 0 0 .39-.39"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: FeedbackOutlinedIcon,
} as const;

const FeedbackSVG: React.FC<FeedbackProps> = ({
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

const Feedback = styled(FeedbackSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Feedback;
