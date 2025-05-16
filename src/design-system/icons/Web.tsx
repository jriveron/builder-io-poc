// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type WebIconVariant = 'outlined';
type WebProps = IconProps & { variant?: WebIconVariant };

const WebOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#web_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3q-.225 0-.446.01c-.129.2-.299.479-.49.831a17 17 0 0 0-1.397 3.434 1 1 0 1 1-1.923-.55c.367-1.282.82-2.363 1.234-3.205A9.03 9.03 0 0 0 4.204 7.5a1 1 0 1 1-1.732-1 11 11 0 0 1 10.62-5.446h.013c3.605.36 6.697 2.46 8.423 5.445a1 1 0 1 1-1.731 1.002 9.03 9.03 0 0 0-4.775-3.981c.415.842.867 1.923 1.234 3.205a1 1 0 0 1-1.922.55 17 17 0 0 0-1.397-3.434 13 13 0 0 0-.49-.83A9 9 0 0 0 12 3M2.837 16.134a1 1 0 0 1 1.367.365 9.03 9.03 0 0 0 4.774 3.981 19.3 19.3 0 0 1-1.234-3.205 1 1 0 1 1 1.923-.55c.42 1.465.962 2.635 1.397 3.434.191.352.361.631.49.83a9 9 0 0 0 .893 0c.128-.199.298-.478.49-.83.434-.8.977-1.969 1.396-3.434a1 1 0 1 1 1.923.55 19.3 19.3 0 0 1-1.234 3.205 9.03 9.03 0 0 0 4.775-3.98 1 1 0 1 1 1.731 1 11 11 0 0 1-8.424 5.445l-.011.001a11 11 0 0 1-2.182 0l-.02-.001A11 11 0 0 1 2.472 17.5a1 1 0 0 1 .365-1.367m7.121-6.421A1 1 0 0 0 8 9.977a1 1 0 0 0-1.958-.264L5.5 11.52l-.542-1.807a1 1 0 0 0-1.916 0L2.5 11.52l-.542-1.807a1 1 0 1 0-1.916.574l1.5 5a1 1 0 0 0 1.916 0L4 13.48l.542 1.807a1 1 0 0 0 1.916 0l1.5-5q.04-.132.042-.265.003.133.042.265l1.5 5a1 1 0 0 0 1.916 0L12 13.48l.542 1.807a1 1 0 0 0 1.916 0l1.5-5q.04-.132.042-.265.003.133.042.265l1.5 5a1 1 0 0 0 1.916 0L20 13.48l.542 1.807a1 1 0 0 0 1.916 0l1.5-5a1 1 0 0 0-1.916-.574L21.5 11.52l-.542-1.807a1 1 0 0 0-1.916 0L18.5 11.52l-.542-1.807A1 1 0 0 0 16 9.977a1 1 0 0 0-1.958-.264L13.5 11.52l-.542-1.807a1 1 0 0 0-1.916 0L10.5 11.52z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="web_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: WebOutlinedIcon,
} as const;

const WebSVG: React.FC<WebProps> = ({
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

const Web = styled(WebSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Web;
