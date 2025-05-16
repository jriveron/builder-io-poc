// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type SettingsIconVariant = 'outlined';
type SettingsProps = IconProps & { variant?: SettingsIconVariant };

const SettingsOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.981 1a1 1 0 0 0-.967.746L9.507 3.67l-1.61.678-1.232-1.096a1 1 0 0 0-1.372.04l-2 2a1 1 0 0 0-.07 1.338l1.081 1.33-.663 1.63-1.868.435A1 1 0 0 0 1 11v2a1 1 0 0 0 .737.965l1.932.527.68 1.614-1.095 1.229a1 1 0 0 0 .039 1.372l2 2a1 1 0 0 0 1.339.068l1.33-1.083 1.589.654.48 1.899A1 1 0 0 0 11 23h2a1 1 0 0 0 .97-.755l.48-1.9 1.643-.68a70.438 70.438 0 0 1 1.033.896l.151.134.055.05a1 1 0 0 0 1.375-.038l2-2a1 1 0 0 0 .056-1.354l-1.09-1.285.674-1.628 1.905-.495a1 1 0 0 0 .748-.968V11a1 1 0 0 0-.754-.97l-1.891-.48-.673-1.625 1.082-1.28a1 1 0 0 0-.057-1.352l-2-2a1 1 0 0 0-1.357-.053l-1.27 1.086-1.681-.692-.496-1.888A1 1 0 0 0 12.935 1zm.335 3.656L11.752 3h.412l.427 1.624a1 1 0 0 0 .586.67l2.707 1.114a1 1 0 0 0 1.03-.165l1.033-.882.695.696-.88 1.042a1 1 0 0 0-.161 1.028l1.097 2.651a1 1 0 0 0 .678.587l1.624.412v.427l-1.638.426a1 1 0 0 0-.672.585l-1.098 2.652a1 1 0 0 0 .161 1.03l.889 1.047-.685.684-.007-.006c-.37-.322-.845-.728-1.113-.92a1 1 0 0 0-.964-.11l-2.651 1.097a1 1 0 0 0-.587.679L12.222 21h-.443l-.412-1.633a1 1 0 0 0-.59-.68l-2.605-1.072a1 1 0 0 0-1.013.15l-1.09.89-.694-.694.887-.996a1 1 0 0 0 .175-1.054l-1.114-2.644a1 1 0 0 0-.659-.576L3 12.236v-.443l1.6-.373a1 1 0 0 0 .699-.597l1.08-2.657a1 1 0 0 0-.15-1.008L5.345 6.07l.695-.695 1 .89a1 1 0 0 0 1.053.173l2.645-1.114a1 1 0 0 0 .578-.667M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: SettingsOutlinedIcon,
} as const;

const SettingsSVG: React.FC<SettingsProps> = ({
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

const Settings = styled(SettingsSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Settings;
