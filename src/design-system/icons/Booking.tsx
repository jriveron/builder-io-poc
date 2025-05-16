// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type BookingIconVariant = 'outlined';
type BookingProps = IconProps & { variant?: BookingIconVariant };

const BookingOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6c2.538.015 4.215.157 6.416.532.908.154 1.584.963 1.584 1.926v9.756a99 99 0 0 0-1.062-.244c-2.375-.515-4.43-.752-6.928-.912C2.99 17.058 3 7.857 3 6M1 17.054c0 1.065.832 1.933 1.881 2 2.938.188 5.198.482 8.16 1.23a1 1 0 0 0 1.918 0c2.961-.748 5.222-1.042 8.16-1.23a2.006 2.006 0 0 0 1.881-2V5.597c0-.881-.715-1.599-1.599-1.598-2.861.002-4.711.145-7.153.561A3.86 3.86 0 0 0 12 5.812 3.86 3.86 0 0 0 9.752 4.56c-2.442-.416-4.292-.559-7.153-.561A1.6 1.6 0 0 0 1 5.597zm20 0-.005.004-.005.001c-2.863.184-5.143.468-7.991 1.156V8.458c0-.963.676-1.772 1.584-1.926C16.785 6.157 18.462 6.015 21 6z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: BookingOutlinedIcon,
} as const;

const BookingSVG: React.FC<BookingProps> = ({
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

const Booking = styled(BookingSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Booking;
