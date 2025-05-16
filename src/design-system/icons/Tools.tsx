// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type ToolsIconVariant = 'outlined';
type ToolsProps = IconProps & { variant?: ToolsIconVariant };

const ToolsOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.658 9.243 6.463 7.048l-1.535.512a1 1 0 0 1-1.174-.435L1.633 3.59a1 1 0 0 1 .15-1.222L3.198.954a1 1 0 0 1 1.221-.15l3.536 2.121a1 1 0 0 1 .434 1.174l-.512 1.535.826.826c.238-1.204.78-2.355 1.702-3.278 1.054-1.054 2.506-1.659 3.912-1.863 1.394-.203 2.89-.03 4.027.652a1 1 0 0 1 .193 1.565L15.752 6.32l-.14 1.556 1.555-.142L19.95 4.95a1 1 0 0 1 1.565.192c.682 1.138.854 2.633.652 4.028-.204 1.405-.81 2.858-1.863 3.912-.42.42-.887.76-1.385 1.03l2.86 2.859a3 3 0 0 1-4.243 4.242l-5.51-5.51-5.511 5.51a3 3 0 1 1-4.243-4.242l6.63-6.631a8 8 0 0 1-.245-1.097m2.079 2.093-7.05 7.049a1 1 0 1 0 1.415 1.414l7.065-7.066.033-.031a.99.99 0 0 1 1.056-.194c1.904.742 4.262.532 5.635-.84.685-.686 1.141-1.71 1.298-2.786.07-.482.076-.947.027-1.369l-1.891 1.892a1 1 0 0 1-.617.288l-3.11.283A1 1 0 0 1 13.51 8.89l.282-3.111a1 1 0 0 1 .29-.617l1.89-1.892a5.4 5.4 0 0 0-1.369.028c-1.076.157-2.099.612-2.784 1.298-1.376 1.376-1.584 3.74-.837 5.646a1 1 0 0 1-.247 1.094m3.188 3.437 5.026 5.026a1 1 0 0 0 1.414-1.414l-3.56-3.561c-.963.16-1.952.13-2.88-.05m-7.982-9.66-.886.296L3.75 3.23l.31-.31 2.178 1.307z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: ToolsOutlinedIcon,
} as const;

const ToolsSVG: React.FC<ToolsProps> = ({
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

const Tools = styled(ToolsSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Tools;
