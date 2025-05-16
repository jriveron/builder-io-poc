// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type OnlineReservationOffIconVariant = 'outlined';
type OnlineReservationOffProps = IconProps & {
  variant?: OnlineReservationOffIconVariant;
};

const OnlineReservationOffOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.969 3.523a9 9 0 0 0-.896.376 1 1 0 1 1-.874-1.798A10.96 10.96 0 0 1 12 1c6.075 0 11 4.925 11 11 0 1.72-.395 3.35-1.1 4.801a1 1 0 0 1-1.89-.301H20a1 1 0 1 1 0-2h.648A9 9 0 0 0 21 12c0-.867-.123-1.706-.352-2.5h-3.81Q17 10.746 17 12a1 1 0 1 1-2 0q0-1.256-.18-2.5H13a1 1 0 1 1 0-2h1.405a16.8 16.8 0 0 0-1.943-4.488 9 9 0 0 0-.924 0q-.642 1.035-1.121 2.14a1 1 0 0 1-1.834-.799q.183-.42.386-.83M19.796 7.5h-3.327a19 19 0 0 0-1.437-3.977A9.03 9.03 0 0 1 19.796 7.5m-15.41-.3a9 9 0 0 0-.182.3h.482zM2.941 5.757A10.95 10.95 0 0 0 1 12c0 6.075 4.925 11 11 11 2.317 0 4.47-.718 6.243-1.942l2.05 2.05a1 1 0 0 0 1.414-1.415l-19-19a1 1 0 0 0-1.414 1.414zM16.8 19.615l-.978-.978q-.345.937-.79 1.84a9 9 0 0 0 1.768-.863m-2.556-2.556-.558-.559H9.595a16.8 16.8 0 0 0 1.943 4.488 9 9 0 0 0 .924 0 16.8 16.8 0 0 0 1.782-3.93M11.686 14.5 9 11.815c-.01.898.05 1.796.18 2.685zM7.11 9.926 6.686 9.5H3.352A9 9 0 0 0 3 12c0 .867.123 1.706.352 2.5h3.81a19.4 19.4 0 0 1-.05-4.574m1.857 10.55A19 19 0 0 1 7.531 16.5H4.204a9.03 9.03 0 0 0 4.764 3.977"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: OnlineReservationOffOutlinedIcon,
} as const;

const OnlineReservationOffSVG: React.FC<OnlineReservationOffProps> = ({
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

const OnlineReservationOff = styled(OnlineReservationOffSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default OnlineReservationOff;
