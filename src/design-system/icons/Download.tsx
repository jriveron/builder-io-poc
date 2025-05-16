// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type DownloadIconVariant = 'outlined';
type DownloadProps = IconProps & { variant?: DownloadIconVariant };

const DownloadOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 8c0-1.037.02-2.258.607-3.235C8.127 3.898 9.244 3 12 3c2.757 0 3.873.898 4.392 1.765C16.98 5.742 17 6.963 17 8a1 1 0 0 0 1 1c.673 0 1.706.21 2.54.812.785.564 1.46 1.514 1.46 3.188 0 1.146-.317 1.935-.737 2.488-.428.564-1.01.947-1.628 1.188a1 1 0 0 0 .73 1.862c.877-.343 1.793-.92 2.492-1.841C23.563 15.766 24 14.543 24 13c0-2.326-.991-3.876-2.29-4.812-.88-.633-1.869-.964-2.723-1.104-.041-.97-.208-2.23-.88-3.348C17.128 2.102 15.245 1 12 1S6.873 2.102 5.893 3.736c-.672 1.119-.839 2.377-.88 3.348-.854.14-1.843.471-2.722 1.104C.99 9.124 0 10.674 0 13c0 1.543.437 2.765 1.143 3.697.699.92 1.615 1.498 2.492 1.841a1 1 0 0 0 .73-1.862c-.617-.241-1.2-.624-1.628-1.188C2.317 14.935 2 14.146 2 13c0-1.674.675-2.624 1.46-3.188C4.293 9.21 5.326 9 6 9a1 1 0 0 0 1-1m9.207 11.207-3.5 3.5a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414L11 19.586V13a1 1 0 1 1 2 0v6.586l1.793-1.793a1 1 0 0 1 1.414 1.414"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: DownloadOutlinedIcon,
} as const;

const DownloadSVG: React.FC<DownloadProps> = ({
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

const Download = styled(DownloadSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Download;
