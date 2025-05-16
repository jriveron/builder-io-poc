// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type PhoneIconVariant = 'outlined';
type PhoneProps = IconProps & { variant?: PhoneIconVariant };

const PhoneOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.064 1h3.75a1 1 0 0 1 .937.648l1.455 3.87a1 1 0 0 1 .047.535L9.538 9.89c.861 1.982 2.266 3.336 4.611 4.563l3.78-.733a1 1 0 0 1 .546.048l3.881 1.479a1 1 0 0 1 .644.934v3.584c0 1.77-1.565 3.226-3.41 2.825-3.066-.667-8.782-2.369-12.797-6.383-3.852-3.852-5.134-9.16-5.565-12.011C.958 2.412 2.392 1 4.064 1m3.059 2h-3.06c-.582 0-.925.452-.857.897.41 2.716 1.607 7.501 5.001 10.896 3.597 3.596 8.841 5.197 11.808 5.843.484.105.985-.256.985-.87V16.87l-2.971-1.132-3.838.744a1 1 0 0 1-.64-.088c-2.931-1.472-4.864-3.233-5.98-6.023a1 1 0 0 1-.054-.554l.72-3.856z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: PhoneOutlinedIcon,
} as const;

const PhoneSVG: React.FC<PhoneProps> = ({
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

const Phone = styled(PhoneSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Phone;
