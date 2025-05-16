// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ArtificialIntelligenceIconVariant = 'outlined' | 'filled';
type ArtificialIntelligenceProps = IconProps & {
  variant?: ArtificialIntelligenceIconVariant;
};

const ArtificialIntelligenceOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 7a1 1 0 0 1 1 1c0 2.36.507 3.788 1.371 4.647C18.236 13.506 19.666 14 22 14a1 1 0 1 1 0 2c-2.328 0-3.759.506-4.626 1.374C16.506 18.24 16 19.673 16 22a1 1 0 1 1-2 0c0-2.326-.509-3.758-1.379-4.626S10.32 16 8 16a1 1 0 1 1 0-2c2.326 0 3.756-.494 4.624-1.354C13.49 11.787 14 10.359 14 8a1 1 0 0 1 1-1m-.002 5.782a5.6 5.6 0 0 1-.966 1.284q-.566.558-1.266.942a5.7 5.7 0 0 1 1.269.95c.382.382.7.812.963 1.286a5.7 5.7 0 0 1 .961-1.285q.566-.563 1.268-.951a5.6 5.6 0 0 1-1.265-.943 5.6 5.6 0 0 1-.964-1.283M6.5 1a1 1 0 0 1 1 1c0 1.477.319 2.28.776 2.734.459.455 1.263.766 2.724.766a1 1 0 1 1 0 2c-1.454 0-2.26.317-2.722.778C7.818 8.74 7.5 9.546 7.5 11a1 1 0 1 1-2 0c0-1.453-.319-2.26-.781-2.721C4.256 7.817 3.449 7.5 2 7.5a1 1 0 0 1 0-2c1.455 0 2.26-.31 2.721-.767C5.179 4.278 5.5 3.475 5.5 2a1 1 0 0 1 1-1m-.002 4.73a4 4 0 0 1-.778.776 4 4 0 0 1 .778.78 4 4 0 0 1 .778-.78 4 4 0 0 1-.778-.776"
      clipRule="evenodd"
    />
  </svg>
);
const ArtificialIntelligenceFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 7a1 1 0 0 1 1 1c0 2.36.507 3.788 1.371 4.647C18.236 13.506 19.666 14 22 14a1 1 0 1 1 0 2c-2.328 0-3.759.506-4.626 1.374C16.506 18.24 16 19.673 16 22a1 1 0 1 1-2 0c0-2.326-.509-3.758-1.379-4.626S10.32 16 8 16a1 1 0 1 1 0-2c2.326 0 3.756-.494 4.624-1.354C13.49 11.787 14 10.359 14 8a1 1 0 0 1 1-1M6.5 1a1 1 0 0 1 1 1c0 1.477.319 2.28.776 2.734.459.455 1.263.766 2.724.766a1 1 0 1 1 0 2c-1.454 0-2.26.317-2.722.778C7.818 8.74 7.5 9.546 7.5 11a1 1 0 1 1-2 0c0-1.453-.319-2.26-.781-2.721C4.256 7.817 3.449 7.5 2 7.5a1 1 0 0 1 0-2c1.455 0 2.26-.31 2.721-.767C5.179 4.278 5.5 3.475 5.5 2a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ArtificialIntelligenceOutlinedIcon,
  filled: ArtificialIntelligenceFilledIcon,
} as const;

const ArtificialIntelligenceSVG: React.FC<ArtificialIntelligenceProps> = ({
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

const ArtificialIntelligence = styled(ArtificialIntelligenceSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default ArtificialIntelligence;
