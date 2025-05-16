// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AddNoteIconVariant = 'outlined';
type AddNoteProps = IconProps & { variant?: AddNoteIconVariant };

const AddNoteOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 3a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2zM4 8a1 1 0 0 1 1-1h5.941a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h6.823a1 1 0 0 0 .708-.293l6.176-6.176a1 1 0 0 0 .293-.708V13.06a1 1 0 1 0-2 0v.765h-3.177a3 3 0 0 0-3 3V20H5a1 1 0 0 1-1-1zm9.824 7.823h1.762l-2.763 2.763v-1.762a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AddNoteOutlinedIcon,
} as const;

const AddNoteSVG: React.FC<AddNoteProps> = ({
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

const AddNote = styled(AddNoteSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default AddNote;
