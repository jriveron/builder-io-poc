// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type IconPlaceholderIconVariant = 'outlined';
type IconPlaceholderProps = IconProps & {
  variant?: IconPlaceholderIconVariant;
};

const IconPlaceholderOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.06 3.073Q8.52 3.001 9 3h1.2a1 1 0 1 0 0-2H9q-.639 0-1.25.097a1 1 0 0 0 .31 1.976M13.8 1a1 1 0 1 0 0 2H15q.48 0 .94.073a1 1 0 0 0 .31-1.976A8 8 0 0 0 15 1zm5.903 1.528a1 1 0 0 0-1.177 1.617c.51.37.958.82 1.329 1.329a1 1 0 0 0 1.617-1.177 8 8 0 0 0-1.769-1.77M5.473 4.145a1 1 0 0 0-1.176-1.617 8 8 0 0 0-1.77 1.769 1 1 0 1 0 1.618 1.177c.37-.51.82-.958 1.329-1.329m-2.4 3.915a1 1 0 1 0-1.976-.31A8 8 0 0 0 1 9v1.2a1 1 0 1 0 2 0V9q0-.48.073-.94m19.83-.31a1 1 0 0 0-1.976.31Q21 8.52 21 9v1.2a1 1 0 1 0 2 0V9q0-.639-.097-1.25M23 13.8a1 1 0 1 0-2 0V15q0 .48-.073.94a1 1 0 0 0 1.976.31q.096-.611.097-1.25zm-20 0a1 1 0 1 0-2 0V15q0 .639.097 1.25a1 1 0 0 0 1.976-.31A6 6 0 0 1 3 15zm18.472 5.903a1 1 0 0 0-1.617-1.177c-.37.51-.82.958-1.329 1.329a1 1 0 1 0 1.177 1.617 8 8 0 0 0 1.77-1.769M4.145 18.526a1 1 0 1 0-1.617 1.177 8 8 0 0 0 1.769 1.77 1 1 0 0 0 1.177-1.618 6 6 0 0 1-1.329-1.329m3.915 2.4a1 1 0 0 0-.31 1.977Q8.36 22.999 9 23h1.2a1 1 0 1 0 0-2H9q-.48 0-.94-.073m8.19 1.977a1 1 0 0 0-.31-1.976Q15.48 21 15 21h-1.2a1 1 0 1 0 0 2H15q.639 0 1.25-.097M9.294 5.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.237-.238A2 2 0 0 0 8 11a1 1 0 1 1-2 0 4 4 0 0 1 3.605-3.98l-.312-.313a1 1 0 0 1 0-1.414M17 12a1 1 0 0 1 1 1 4 4 0 0 1-3.605 3.98l.312.313a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 1.414l-.237.238A2 2 0 0 0 16 13a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: IconPlaceholderOutlinedIcon,
} as const;

const IconPlaceholderSVG: React.FC<IconPlaceholderProps> = ({
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

const IconPlaceholder = styled(IconPlaceholderSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default IconPlaceholder;
