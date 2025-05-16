// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type OnlineReservationOnIconVariant = 'outlined';
type OnlineReservationOnProps = IconProps & {
  variant?: OnlineReservationOnIconVariant;
};

const OnlineReservationOnOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3q-.232 0-.462.012A16.8 16.8 0 0 0 9.595 7.5h4.81a16.8 16.8 0 0 0-1.943-4.488A9 9 0 0 0 12 3m3.032.523c.63 1.276 1.11 2.611 1.437 3.977h3.327a9.03 9.03 0 0 0-4.764-3.977M14.819 9.5H9.181a17.4 17.4 0 0 0 0 5h5.638a17.4 17.4 0 0 0 0-5m2.019 5a19.4 19.4 0 0 0 0-5h3.81c.23.794.352 1.633.352 2.5s-.123 1.706-.352 2.5zm-2.433 2h-4.81a16.8 16.8 0 0 0 1.943 4.488 9 9 0 0 0 .924 0 16.8 16.8 0 0 0 1.943-4.488m.627 3.977c.63-1.276 1.11-2.611 1.437-3.977h3.327a9.03 9.03 0 0 1-4.764 3.977M4.204 7.5a9.03 9.03 0 0 1 4.764-3.977A19 19 0 0 0 7.531 7.5zm-.852 2h3.81a19.4 19.4 0 0 0 0 5h-3.81A9 9 0 0 1 3 12c0-.867.123-1.706.352-2.5m.852 7h3.327a19 19 0 0 0 1.437 3.977A9.03 9.03 0 0 1 4.204 16.5M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: OnlineReservationOnOutlinedIcon,
} as const;

const OnlineReservationOnSVG: React.FC<OnlineReservationOnProps> = ({
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

const OnlineReservationOn = styled(OnlineReservationOnSVG)(
  ({ size = 'l', theme }) => {
    const iconSizeToken = ICON_SIZE_MAPPING[size];
    const computedIconSize = theme.size[iconSizeToken];
    return { width: computedIconSize, height: computedIconSize };
  }
);

export default OnlineReservationOn;
