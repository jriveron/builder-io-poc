// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type NoiseLevelHighIconVariant = 'outlined';
type NoiseLevelHighProps = IconProps & { variant?: NoiseLevelHighIconVariant };

const NoiseLevelHighOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.9 3.187c1.329-.876 3.1.077 3.1 1.67v14.286c0 1.593-1.771 2.546-3.1 1.67l-6-3.956H3a3 3 0 0 1-3-3v-3.714a3 3 0 0 1 3-3h2.9zm1.1 1.67L7 8.813a2 2 0 0 1-1.1.33H3a1 1 0 0 0-1 1v3.714a1 1 0 0 0 1 1h2.9a2 2 0 0 1 1.1.33l6 3.956zm3.937 2.364a1 1 0 0 1 1.406.152A7.47 7.47 0 0 1 20 12.074a7.47 7.47 0 0 1-1.627 4.666 1 1 0 1 1-1.565-1.245 5.47 5.47 0 0 0 1.192-3.421 5.47 5.47 0 0 0-1.213-3.447 1 1 0 0 1 .151-1.406m4.58-2.8a1 1 0 1 0-1.631 1.158A11.44 11.44 0 0 1 22 12.226c0 2.474-.78 4.764-2.11 6.64a1 1 0 1 0 1.633 1.156A13.44 13.44 0 0 0 24 12.226c0-2.907-.92-5.6-2.483-7.805"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: NoiseLevelHighOutlinedIcon,
} as const;

const NoiseLevelHighSVG: React.FC<NoiseLevelHighProps> = ({
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

const NoiseLevelHigh = styled(NoiseLevelHighSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default NoiseLevelHigh;
