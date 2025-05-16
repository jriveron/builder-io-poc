// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type InternetIconVariant = 'outlined';
type InternetProps = IconProps & { variant?: InternetIconVariant };

const InternetOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.554 3.01a9 9 0 0 1 .893 0q.075.117.167.269c.26.43.613 1.07.968 1.892.287.665.574 1.447.814 2.329H9.604c.24-.882.527-1.664.814-2.33a15.6 15.6 0 0 1 1.136-2.16m-2.576.51q-.196.395-.396.858c-.376.87-.752 1.92-1.043 3.122H4.204a9.03 9.03 0 0 1 4.774-3.98M1.706 8.115l-.027.07A11 11 0 0 0 1 12a11 11 0 0 0 .706 3.885C3.276 20.043 7.293 23 12 23a1 1 0 1 0 0-2q-.207 0-.413-.01a12 12 0 0 1-.2-.32c-.261-.43-.614-1.07-.969-1.892a17.4 17.4 0 0 1-.8-2.278h2.381a1 1 0 1 0 0-2H9.192A17 17 0 0 1 9 11.993c0-.88.069-1.713.185-2.493h5.63c.116.782.185 1.618.185 2.5a1 1 0 1 0 2 0c0-.877-.06-1.712-.165-2.5h3.813c.23.794.352 1.633.352 2.5a1 1 0 1 0 2 0c0-5.703-4.34-10.392-9.898-10.945l-.007-.001Q12.555 1 12 1C7.293 1 3.276 3.957 1.706 8.115M7 11.995v.014c.003.874.066 1.706.172 2.491h-3.82A9 9 0 0 1 3 12c0-.867.123-1.706.352-2.5h3.813A19 19 0 0 0 7 11.995m.551 4.505H4.204a9.03 9.03 0 0 0 4.805 3.99 19.444 19.444 0 0 1-1.457-3.99m7.47-12.98q.196.395.397.858c.376.87.752 1.92 1.043 3.122h3.335a9.03 9.03 0 0 0-4.774-3.98m.398 10.293c.515-.361 1.163-.328 1.666-.019l5.317 3.272c.569.35.853.96.829 1.535-.025.599-.427 1.313-1.285 1.41l-2.026.23-.91 1.826c-.384.773-1.193.907-1.764.725a1.73 1.73 0 0 1-1.16-1.304l-1.255-6.116c-.119-.578.072-1.198.588-1.559m1.604 2.291.795 3.872.796-1.6 1.775-.2z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: InternetOutlinedIcon,
} as const;

const InternetSVG: React.FC<InternetProps> = ({
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

const Internet = styled(InternetSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Internet;
