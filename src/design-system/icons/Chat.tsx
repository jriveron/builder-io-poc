// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ChatIconVariant = 'outlined';
type ChatProps = IconProps & { variant?: ChatIconVariant };

const ChatOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 12a4.5 4.5 0 0 0-3.899 6.75 1 1 0 0 1 .118.683l-.194 1.042 1.042-.194a1 1 0 0 1 .684.118A4.5 4.5 0 1 0 7.5 12M1 16.5a6.5 6.5 0 1 1 3.587 5.812l-2.129.396a1 1 0 0 1-1.166-1.166l.396-2.129A6.5 6.5 0 0 1 1 16.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 3a7 7 0 0 1 6.064 10.5 1 1 0 0 0-.117.683l.403 2.167-2.167-.403a1 1 0 0 0-.684.117 7 7 0 0 1-2.376.846 1 1 0 0 0 .319 1.975 9 9 0 0 0 2.727-.907l3.248.605a1 1 0 0 0 1.166-1.166l-.605-3.249A9 9 0 0 0 14 1C9.468 1 5.72 4.348 5.092 8.706a1 1 0 0 0 1.98.285A7 7 0 0 1 14 3"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ChatOutlinedIcon,
} as const;

const ChatSVG: React.FC<ChatProps> = ({
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

const Chat = styled(ChatSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Chat;
