// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type HubIconVariant = 'outlined' | 'filled';
type HubProps = IconProps & { variant?: HubIconVariant };

const HubOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hub_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.63 5.37-3.668.45a5 5 0 0 0-3.82 2.643l-2.865 5.471 1.789 1.789 5.47-2.866a5 5 0 0 0 2.643-3.82zM8.957 17.443l-2.4-2.4-3.238-.648a1 1 0 0 1-.685-1.455l.79-1.467a5.85 5.85 0 0 1 5.491-3.068l.456-.87a7 7 0 0 1 5.348-3.7l4.175-.512a1.6 1.6 0 0 1 1.783 1.783l-.513 4.175a7 7 0 0 1-3.7 5.348l-.87.456a5.85 5.85 0 0 1-3.067 5.49l-1.467.79a1 1 0 0 1-1.455-.684zm4.576-1.278-2.527 1.323.295 1.476.278-.15a3.85 3.85 0 0 0 1.954-2.65m-5.698-5.698a3.85 3.85 0 0 0-2.65 1.954l-.15.278 1.477.295zm-3.929 10.26a1 1 0 0 1-.632-.633v-.001l-.001-.002-.002-.004-.003-.01-.01-.032-.028-.098a5.558 5.558 0 0 1-.184-1.407c0-.86.216-2.044 1.177-3.004a1 1 0 0 1 1.414 1.414c-.454.453-.591 1.038-.591 1.59q.001.212.022.392.181.022.392.023c.553 0 1.138-.138 1.59-.591a1 1 0 0 1 1.415 1.414c-.96.96-2.144 1.177-3.005 1.177a5.6 5.6 0 0 1-1.504-.213l-.031-.01-.011-.003-.004-.001h-.002zm9.862-12.263a1.25 1.25 0 1 0 1.768 1.768 1.25 1.25 0 0 0-1.768-1.768"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="hub_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const HubFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.958 17.443-2.4-2.4-3.238-.648a1 1 0 0 1-.685-1.455l.79-1.467a5.85 5.85 0 0 1 5.491-3.068l.456-.87a7 7 0 0 1 5.348-3.7l4.175-.512a1.6 1.6 0 0 1 1.783 1.783l-.513 4.175a7 7 0 0 1-3.7 5.348l-.87.456a5.85 5.85 0 0 1-3.067 5.49l-1.467.79a1 1 0 0 1-1.455-.684zm4.575-1.278-2.526 1.323.295 1.476.278-.15a3.85 3.85 0 0 0 1.953-2.65m-5.697-5.697a3.85 3.85 0 0 0-2.65 1.953l-.15.278 1.477.295zm5.931-.236a1.25 1.25 0 1 1 1.768-1.768 1.25 1.25 0 0 1-1.768 1.768M3.273 20.094a1 1 0 0 0 .632.633h.002l.002.001.004.001.01.004.032.01.097.028a5.565 5.565 0 0 0 1.407.184c.861 0 2.044-.216 3.005-1.177a1 1 0 1 0-1.414-1.414c-.453.453-1.038.591-1.591.591q-.212-.002-.392-.023a4 4 0 0 1-.022-.391c0-.553.137-1.138.59-1.591a1 1 0 1 0-1.413-1.414c-.961.96-1.177 2.144-1.177 3.005a5.6 5.6 0 0 0 .212 1.504l.01.031.003.01.002.005v.003"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: HubOutlinedIcon,
  filled: HubFilledIcon,
} as const;

const HubSVG: React.FC<HubProps> = ({
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

const Hub = styled(HubSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Hub;
