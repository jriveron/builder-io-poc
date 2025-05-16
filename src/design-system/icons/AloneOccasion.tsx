// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AloneOccasionIconVariant = 'outlined';
type AloneOccasionProps = IconProps & { variant?: AloneOccasionIconVariant };

const AloneOccasionOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.002 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4.478 9.582a1 1 0 1 0-1.813.843l.857 1.845a1 1 0 0 0 .699.557h.003l.025.006.104.025a8.855 8.855 0 0 1 1.582.55c.433.202.803.43 1.052.672.243.235.299.41.299.536 0 .117-.029.151-.038.162l-.001.002a.5.5 0 0 1-.193.12 1.5 1.5 0 0 1-.49.1h-4.305l-.558-.31 1.33-.847a1 1 0 0 0-1.073-1.687l-2.725 1.734L8.238 20H6.432a1 1 0 0 1-.141-.013 1.5 1.5 0 0 1-.349-.087.5.5 0 0 1-.192-.12l-.001-.002c-.01-.01-.038-.045-.038-.162 0-.127.056-.301.299-.537.248-.24.618-.47 1.051-.67a9 9 0 0 1 1.687-.576l.024-.006h.004a1 1 0 0 0 .699-.557l.857-1.845a1 1 0 1 0-1.814-.843l-.657 1.414-.18.052c-.39.116-.922.295-1.463.547-.532.247-1.126.588-1.6 1.049-.481.466-.907 1.125-.907 1.972 0 .571.184 1.058.497 1.437.299.362.672.575.986.701A3.5 3.5 0 0 0 6.379 22h2.118a1 1 0 0 0 .485-.125l1.767-.982 1.768.982a1 1 0 0 0 .485.126h4.571v-1l.001 1h.046l.085-.004a3.48 3.48 0 0 0 1.1-.241c.314-.127.687-.34.986-.702.313-.38.497-.866.497-1.437 0-.847-.426-1.506-.907-1.972-.474-.46-1.069-.802-1.6-1.049a11 11 0 0 0-1.643-.598zM7.737 9.771C8.685 8.758 9.812 8.19 11.2 8.024c.334-.039 1.79.011 2.1.073 1.552.312 2.863 1.263 3.787 2.751.478.768 1.087 2.26 1.277 3.127.044.204.067.242.175.287.191.08 1.237.359 2.071.552.923.215 1.068.291 1.259.661.079.152.131.311.131.401 0 .231-.111.551-.243.702-.164.186-.488.342-.71.342-.465 0-3.396-.768-3.878-1.017-.381-.196-.52-.404-.629-.943a13 13 0 0 0-.206-.82c-.418-1.462-.934-2.423-1.693-3.155C13.91 10.281 13.158 10 12 10c-1.14 0-1.9.278-2.612.955-.89.847-1.457 2.006-1.906 3.897a5 5 0 0 1-.182.628c-.084.162-.245.308-.469.423-.482.249-3.413 1.017-3.878 1.017-.222 0-.546-.156-.71-.342-.132-.151-.243-.471-.243-.702 0-.09.052-.249.131-.401.191-.37.336-.446 1.259-.661.833-.193 1.881-.472 2.068-.551.111-.046.13-.084.214-.415.419-1.649 1.156-3.105 2.065-4.077"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AloneOccasionOutlinedIcon,
} as const;

const AloneOccasionSVG: React.FC<AloneOccasionProps> = ({
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

const AloneOccasion = styled(AloneOccasionSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AloneOccasion;
