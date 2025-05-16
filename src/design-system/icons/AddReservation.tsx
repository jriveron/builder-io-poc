// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AddReservationIconVariant = 'outlined';
type AddReservationProps = IconProps & { variant?: AddReservationIconVariant };

const AddReservationOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2h-2zM1 5.597c0-.882.715-1.6 1.599-1.598 2.861.002 4.71.145 7.153.561a3.85 3.85 0 0 1 2.253 1.258c.567-.526 1.533-.324 1.66.47.062.393-.144.74-.348 1.085l-.043.073A2 2 0 0 0 13 8.458v9.756c2.847-.688 5.128-.972 7.99-1.156h.006l.003-.004H21V11.5a1 1 0 1 1 2 0v5.554a2.007 2.007 0 0 1-1.881 2c-2.938.188-5.198.482-8.16 1.23a1 1 0 0 1-1.918 0c-2.961-.748-5.222-1.042-8.16-1.23a2.007 2.007 0 0 1-1.881-2zm10 12.617V8.458c0-.963-.676-1.772-1.584-1.926C7.216 6.157 5.538 6.015 3 6v11.054l.004.003h.003l.002.001c2.863.184 5.144.468 7.991 1.156"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AddReservationOutlinedIcon,
} as const;

const AddReservationSVG: React.FC<AddReservationProps> = ({
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

const AddReservation = styled(AddReservationSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AddReservation;
