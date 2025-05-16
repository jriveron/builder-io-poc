// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type MicrophoneIconVariant = 'outlined' | 'filled';
type MicrophoneProps = IconProps & { variant?: MicrophoneIconVariant };

const MicrophoneOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 5a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0zm4-2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2M5 9a1 1 0 0 1 1 1v1a6 6 0 0 0 12 0v-1a1 1 0 1 1 2 0v1a8 8 0 0 1-7 7.938V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.062A8 8 0 0 1 4 11v-1a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
const MicrophoneFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 5a3.75 3.75 0 1 1 7.5 0v6a3.75 3.75 0 1 1-7.5 0zM5 9.25a.75.75 0 0 1 .75.75v1a6.25 6.25 0 1 0 12.5 0v-1a.75.75 0 0 1 1.5 0v1a7.75 7.75 0 0 1-7 7.714v2.536H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-2.536a7.75 7.75 0 0 1-7-7.714v-1A.75.75 0 0 1 5 9.25"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: MicrophoneOutlinedIcon,
  filled: MicrophoneFilledIcon,
} as const;

const MicrophoneSVG: React.FC<MicrophoneProps> = ({
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

const Microphone = styled(MicrophoneSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Microphone;
