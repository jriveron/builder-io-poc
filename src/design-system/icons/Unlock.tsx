// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type UnlockIconVariant = 'outlined';
type UnlockProps = IconProps & { variant?: UnlockIconVariant };

const UnlockOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414L7 8.414V11h-.4A1.6 1.6 0 0 0 5 12.6v6.8A1.6 1.6 0 0 0 6.6 21h10.8a1.6 1.6 0 0 0 1.386-.8l1.507 1.507a1 1 0 0 0 1.414-1.414zm13.296 16.125-5.42-5.421L11.5 13H7v6h10v-.5q0-.042.003-.082M9.586 11 9 10.414V11zm.117-7.519C10.356 3.171 11.12 3 12 3c1.926 0 3.226.825 4.011 1.916C16.76 5.956 17 7.173 17 8v3h.4a1.6 1.6 0 0 1 1.6 1.6v.4a1 1 0 1 1-2 0h-1a1 1 0 0 1-1-1V8c0-.507-.16-1.289-.612-1.916C13.974 5.508 13.274 5 12 5c-.614 0-1.082.119-1.44.289a1 1 0 1 1-.857-1.808"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: UnlockOutlinedIcon,
} as const;

const UnlockSVG: React.FC<UnlockProps> = ({
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

const Unlock = styled(UnlockSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Unlock;
