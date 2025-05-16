// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type InterrogationMarkIconVariant = 'outlined';
type InterrogationMarkProps = IconProps & {
  variant?: InterrogationMarkIconVariant;
};

const InterrogationMarkOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.506 7.794C10.22 8.038 10 8.413 10 9a1 1 0 1 1-2 0c0-1.163.469-2.1 1.212-2.731.722-.613 1.65-.894 2.538-.894s1.816.281 2.538.894C15.03 6.899 15.5 7.837 15.5 9c0 .813-.21 1.445-.559 1.969-.288.432-.662.766-.935 1.01l-.087.077c-.305.275-.51.48-.658.741C13.123 13.042 13 13.4 13 14a1 1 0 1 1-2 0c0-.899.19-1.604.52-2.188.321-.566.741-.955 1.061-1.243l.062-.056c.311-.28.495-.444.634-.654.12-.18.223-.422.223-.859 0-.587-.219-.962-.506-1.206-.31-.263-.757-.419-1.244-.419s-.934.156-1.244.419M12.679 17.256a1 1 0 0 1 .074 1.412l-.01.011a1 1 0 1 1-1.486-1.338l.01-.011a1 1 0 0 1 1.412-.074"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: InterrogationMarkOutlinedIcon,
} as const;

const InterrogationMarkSVG: React.FC<InterrogationMarkProps> = ({
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

const InterrogationMark = styled(InterrogationMarkSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default InterrogationMark;
